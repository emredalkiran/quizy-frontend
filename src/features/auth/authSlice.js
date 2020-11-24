import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axios } from 'axios'


export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await axios.post('/v1/api/user/login', credentials)
  return response
})

export const signup = createAsyncThunk('auth/signup', async (credentials) => {
  const response = await axios.post('/v1/api/user/signup', credentials)
  return response
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
      console.log("Logged in")
    },
    [signup.fulfilled]: (sliceState, action) => {
      console.log("Signed up")
    }
  }
})

export const selectUser = state => state.auth.user

const reducer = authSlice.reducer

export default reducer

export const { loggedIn } = authSlice.actions
