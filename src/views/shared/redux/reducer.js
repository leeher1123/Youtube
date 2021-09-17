import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'shared',
  initialState: {

  },
  reducers: {
    getVideos: (state, { payload }) => {

    },
  },
});

const { getVideos } = slice.actions;
export const actions = {
  getVideos,
};

export default slice.reducer;
