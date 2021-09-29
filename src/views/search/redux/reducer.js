import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'search',
  initialState: {
    searchVideos: {},
  },
  reducers: {
    getRelatedVideos: (state, { payload }) => {
      state.searchVideos = payload;
    },
    setRelatedVideos: (state, { payload }) => {
      state.searchVideos = payload;
    },
  },
});

const {
  getRelatedVideos, setRelatedVideos,
} = slice.actions;
export const actions = {
  getRelatedVideos,
  setRelatedVideos,
};

export default slice.reducer;
