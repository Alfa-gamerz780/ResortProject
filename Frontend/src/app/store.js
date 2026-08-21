import { configureStore } from '@reduxjs/toolkit'
import roomReducer from '../features/RoomSlice'
import reviewReducer from '../features/ReviewSlice'
import quarryReducer from '../features/Quarry.slice'

export default configureStore({
  reducer: {
    room: roomReducer,
    review: reviewReducer,
    quarry: quarryReducer,
  },
})