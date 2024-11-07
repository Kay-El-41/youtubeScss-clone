import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from '../api'
export const getPopularVideos = createAsyncThunk(
  "videos/getPopularVideos",
  async (_, { rejectWithValue }) => {
    try {
      const res = await request.get('/videos', {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "MY",
          maxResults: 100,  // Fixed from maxResult
          pageToken: ''
        }
      });
      return res.data.items;
    } catch (error) {
      if (error.response?.status === 403) {
        // Redirect to login or refresh token
        window.location.href = '/login';
      }
      return rejectWithValue(error.message);
    }
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    loading: true,
    error: null
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(getPopularVideos.pending, (state) => {
        state.error = null;

      })
      .addCase(getPopularVideos.fulfilled, (state, action) => {
        state.loading = false
        state.videos = action.payload
        state.error = null;

        console.log(state.videos)
      })
    .addCase(getPopularVideos.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
      state.videos = []
    })
  }
})

export default videoSlice.reducer