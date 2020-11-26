import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await axios.post(`${process.env.REACT_APP_API_SERVER}/api/v1/user/login`, credentials)
  return response
})

export const signup = createAsyncThunk('auth/signup', async (credentials) => {
  console.log("Inside signup ",process.env.REACT_APP_API_SERVER)
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_SERVER}/api/v1/user/signup`, credentials)
    return response.data
  } catch (err) {
    //TODO: handle async network request error
    console.log(err)
    return 'Error'
  } 
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: {
      name: '',
      lastName: ''
    }
  },
  reducers: {
    loggedIn(sliceState, action) {
      sliceState.isLoggedIn = true
    },
  },
  extraReducers: {
    [login.fulfilled]: (sliceState, action) => {

    },
    [signup.pending]: (sliceState, action) => {
      sliceState.authError = ''

    },
    [signup.fulfilled]: (sliceState, action) => {
      if (!action.payload.success) {
        sliceState.isLoggedIn = false
      } else {
        sliceState.isLoggedIn = true
      }
    },
    [signup.rejected]: (sliceState, action)=> {
      console.log(action)
    }

  }
})

export const selectUser = state => state.auth.user
export const isLoggedIn = state => state.auth.isLoggedIn

const reducer = authSlice.reducer

export default reducer

export const { loggedIn } = authSlice.actions
