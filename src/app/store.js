import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/LoginSlice'
import roomReducer from '../features/RoomSlice'
import reviewReducer from '../features/ReviewSlice'

export default configureStore({
  reducer: {
    room: roomReducer,
    review: reviewReducer,
  },
})