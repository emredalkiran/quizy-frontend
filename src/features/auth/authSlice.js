import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axios } from 'axios'


export const logIn = createAsyncThunk('auth/logIn', async (credentials) => {
  //const response = await axios.post('/v1/api/login', credentials)
  return {name: "Emre", lastName: "Dalkiran"}
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
    [logIn.fulfilled]: (sliceState, action) => {
    //  return {...state, user:action.payload.name}
      sliceState.user = action.payload
      sliceState.isLoggedIn = true
    }
  }
})

export const selectUser = state => state.auth.user

const reducer = authSlice.reducer

export default reducer

export const { loggedIn } = authSlice.actions
