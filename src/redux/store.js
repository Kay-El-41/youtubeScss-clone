import { configureStore } from "@reduxjs/toolkit";
// import authReducer from './login/authSlice'
import videoReducer from './videoSlice'
export default configureStore({
  reducer: {
    // auth:authReducer
    videos:videoReducer
  }
})