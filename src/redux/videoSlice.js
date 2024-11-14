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
          maxResults: 100,  // limit to 50 items  per request
          pageToken: ''
        }
      });
      console.log(res)
      return res;
    } catch (error) {
      if (error.response?.status === 403) {
        // Redirect to login or refresh token
        window.location.href = '/login';
      }
      return rejectWithValue(error.message);
    }
  }
);

export const getChannelIcon = createAsyncThunk(
  "videos/getChannelIcon",
  async (channelId,{rejectWithValue}) => {
    try {
      const { data: { items } } = await request.get('/channels', {
        params: {
          part:'snippet',
          id: channelId
        }
      })
      // console.log(items)
      return items[0]
    } catch (error) {
      return rejectWithValue(error.message)
    }   
  })

export const getVideosByCategory = createAsyncThunk(
  "videos/getVideoByCategory",
  /*
  In the createAsyncThunk function, the first parameter is the
  input argument passed when the thunk is dispatched, and the
  second parameter is an object containing additional utilities
  provided by Redux Toolkit.
   */
  async (keyword, { getState }) => {
    try {
      /*
      get nextPageToken state from videos slice using getState() function
      */
      const { nextPageToken } = getState().videos
      const res = await request('/search', {
        params: {
          part: 'snippet',
          maxResults: 20,
          pageToken: nextPageToken,
          /*The q parameter in the YouTube Data API is typically
           used as a search query parameter. It allows you to 
           specify a text string to search for videos, playlists,
           or channels that match the query. */
          q: keyword,
          type:'video'
        }
      })
      console.log(res)
      // Get video IDs from search results
      const videoIds = res.data.items.map(item => item.id.videoId).join(',');

      // Get full video details
      const { data: videoData } = await request('/videos', {
        params: {
          part: 'snippet,contentDetails,statistics',
          id: videoIds,
        },
      });

      return {
        videos: videoData.items,
        nextPageToken: res.data.nextPageToken,
        category: keyword,
      };
    }catch (error) {
    console.log(error)
  }
  }
  )




const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    /*
    With an object {}, you can directly access the icon using the channel ID
    as a key - O(1) time complexity:
    
    With an array [], you'd need to iterate through the entire array to find
    a specific channel's icon:
    */
    channelIcons: {},//store icons for each channel by id
    loading: true,
    error: null,
    nextPageToken: null,
    category:''
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(getPopularVideos.fulfilled, (state, action) => {
        state.videos = action.payload.data.items
        state.loading = false
        state.error = null;
        state.nextPageToken = action.payload.data.nextPageToken
        // state.category='All'
      })
    
      .addCase(getChannelIcon.fulfilled, (state, action) => {
        //store channel icon by id
        state.channelIcons[action.payload.id] = action.payload.snippet.thumbnails.default.url
        /*
          channelIcons[action.payload.id] ="UC123": { data: {...} },
        */
      })
    
      .addCase(getVideosByCategory.fulfilled, (state, action) => {
         state.videos = action.payload.videos;
      state.loading = false;
      state.error = null;
      state.nextPageToken = action.payload.nextPageToken;
      // state.category = action.payload.category;
      })
  }
})

export default videoSlice.reducer