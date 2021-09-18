import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'shared',
  initialState: {
    videos: {},
  },
  reducers: {
    getVideos: (state, { payload }) => {

    },
    setVideos: (state, { payload }) => {
      state.videos = payload;
    },
  },
});

const { getVideos, setVideos } = slice.actions;
export const actions = {
  getVideos,
  setVideos,
};

export default slice.reducer;
