/* eslint-disable camelcase */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user_id: null,
  username: '',
  email: '',
  token: ''
}

const userSlicer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      const { user_id, username, email, token } = action.payload
      state.user_id = user_id
      state.username = username
      state.email = email
      state.token = token
    }
  }
})

export default userSlicer.reducer

export const { setUserDetails } = userSlicer.actions
