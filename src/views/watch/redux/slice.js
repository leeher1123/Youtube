import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'watch',
  initialState: {
    comments: [],
  },
  reducers: {
    getComments: (state, { payload }) => {
      state.comments = payload;
    },
    setComments: (state, { payload }) => {
      state.comments = payload;
    },
  },
});

const { getComments, setComments } = slice.actions;

export const actions = {
  getComments,
  setComments,
};

export default slice.reducer;
