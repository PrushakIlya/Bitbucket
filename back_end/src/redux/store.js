import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Slices/productSlice'

export default configureStore({
  reducer: counterSlice.reducer
})