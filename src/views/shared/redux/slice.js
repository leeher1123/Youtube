import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'shared',
  initialState: {
    videos: {},
    sidebar: false,
    categories: {},
    normalSidebar: false,
    drawerSidebar: false,
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
    handleNormalSidebar: (state, { payload }) => {
      state.normalSidebar = payload;
    },
    handleDrawerSidebar: (state, { payload }) => {
      state.drawerSidebar = payload;
    },
  },
});

const {
  updateState,
  getVideos,
  setVideos,
  getCategories,
  setCategories,
  handleNormalSidebar,
  handleDrawerSidebar,
} = slice.actions;
export const actions = {
  updateState,
  getVideos,
  setVideos,
  getCategories,
  setCategories,
  handleNormalSidebar,
  handleDrawerSidebar,
};

export default slice.reducer;
