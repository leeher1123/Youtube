import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'shared',
  initialState: {
    videos: {},
    sidebar: false,
    categories: {},
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
    getCategories: (state, { payload }) => {

    },
    setCategories: (state, { payload }) => {
      state.categories = payload;
    },
  },
});

const {
  updateState, getVideos, setVideos, getCategories, setCategories,
} = slice.actions;
export const actions = {
  updateState,
  getVideos,
  setVideos,
  getCategories,
  setCategories,
};

export default slice.reducer;
