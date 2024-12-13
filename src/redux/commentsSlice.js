import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../api";
// import axios from "axios";

export const getCommentsByVideoIdYoutubeAPI = createAsyncThunk(
  'comments/getCommentsByVideoIdYoutubeAPI',
  async (videoId) => {
    try {
      const { data } = await request.get('/commentThreads', {
        params: {
          part: "snippet",
          videoId
        }
      })
      console.log(data.items)
      return data.items
    } catch (error) {
      console.log(error.response.data)
    }
  }
)

// export const postCommentByPostgreSQL = createAsyncThunk(
//   'comments' / 'postCommentByPostgreSQL',
//   async ({ comment, videoId, userUID }) => {
//     const data = {
//       comment,
//       videoId,
//       userUID
//     }
//     const API_URL='https://19a9e975-a1ef-4a91-8443-8591673e6221-00-2145k6cy2psgl.pike.replit.dev'
//   const response=await axios.post(`${API_URL}/comment`,data) 
//     console.log(response)
//     return response
//   }
// )

const commentsSlice = createSlice({
  name:"comments",
  initialState: {
    videoComments: [],
    loading:true
  },
  extraReducers:(builder)=> {
    builder
      .addCase(getCommentsByVideoIdYoutubeAPI.fulfilled, (state, action) => {
        state.videoComments = action.payload
        state.loading=false
      })
    //   .addCase(postCommentByPostgreSQL.fulfilled, (state, action) => {
    //   state.videoComments=state.videoComments.push()
    // })
  }
})
export default commentsSlice.reducer
