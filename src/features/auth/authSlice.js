import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



export const login = createAsyncThunk('auth/login', async (credentials) => {

  try {
      const response = await axios.post(`${process.env.REACT_APP_API_SERVER}/api/v1/user/login`, credentials)
      return response.data
  } catch (err){
    if (err.response.status === 401)
      return err.response.data.response
    else{
      return {success:false, error: "Oops, something went wrong!"}
    }
  }
  
})

export const signup = createAsyncThunk('auth/signup', async (credentials) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_SERVER}/api/v1/user/signup`, credentials)
    return response.data
  } catch (err) {
    //TODO: handle async network request error

      if (err.response.status === 400)
        return err.response.data.response
      else{
        return {success:false, error: "Please check your credentials"}
      }
  } 
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    name: ''
  },
  reducers: {
    loggedIn(sliceState, action) {
      sliceState.isLoggedIn = action.payload.isLoggedIn
      sliceState.name= action.payload.name
    },
  },
  extraReducers: {
    [login.fulfilled]: (sliceState, action) => {
      sliceState.isLoggedIn = true
      sliceState.name = action.payload.name
    },
    [signup.pending]: (sliceState, action) => {
      sliceState.authError = ''

    },
    [signup.fulfilled]: (sliceState, action) => {
      if (!action.payload.success) {
        sliceState.isLoggedIn = false
        sliceState.name = ''
      } else {
        sliceState.isLoggedIn = true
        sliceState.name = action.payload.name
      }
    },
    [signup.rejected]: (sliceState, action)=> {
      console.log(action)
    }

  }
})

export const selectUserName = state => state.auth.name
export const selectLoginStatus = state => state.auth.isLoggedIn

const reducer = authSlice.reducer

export default reducer

export const { loggedIn } = authSlice.actions
