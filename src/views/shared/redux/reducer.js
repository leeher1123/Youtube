import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'shared',
  initialState: {
    videos: {},
    sidebar: false,
  },
  reducers: {
    updateState: (state, { payload }) => {
      state.sidebar = payload;
    },
    getVideos: (state, { payload }) => {

    },
    setVideos: (state, { payload }) => {
      state.videos = payload;
    },
  },
});

const { updateState, getVideos, setVideos } = slice.actions;
export const actions = {
  updateState,
  getVideos,
  setVideos,
};

export default slice.reducer;
