import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import reviewReducer from '../features/reviewSlice'
import roomReducer from '../features/roomSlice'
import quarryReducer from '../features/quarrySlice'

export default configureStore({
  reducer: {
   auth: authReducer,
   review: reviewReducer,
   room: roomReducer,
   quarry: quarryReducer,
  },
})