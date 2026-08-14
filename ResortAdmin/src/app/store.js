import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import reviewReducer from '../features/reviewSlice'

export default configureStore({
  reducer: {
   auth: authReducer,
   review: reviewReducer,
  },
})