import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  name: 'CLA',
  email: 'email@example.com'
}

export const updateAccount = createAsyncThunk("account/updateData", async ({name, email}) => {
  const response = await axios.patch('http://localhost:3000/profile', {name, email})
  return response.data
})

export const accountSlice = createSlice({
  name: 'account', 
  initialState,
  reducers: {
    update: (state, action) => {
        state.name = action.payload.name
        state.email = action.payload.email
    }
  },
  // extraReducers(builder) {
  //   builder.addCase(updateAccount.fulfilled, (state, action)=> {
  //     state.name = action.payload.name
  //     state.email = action.payload.email
  //   })
  // }
})

// Action creators are generated for each case reducer function
export const { update } = accountSlice.actions

export default accountSlice.reducer