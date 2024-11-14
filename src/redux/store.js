import { configureStore } from "@reduxjs/toolkit";
// import authReducer from './login/authSlice'
import videoReducer from './videoSlice'
import channelReducer from "./channelSlice"

export default configureStore({
  reducer: {
    // auth:authReducer
    videos: videoReducer,
    channel:channelReducer
  }
})