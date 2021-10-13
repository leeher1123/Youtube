import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import sharedReducer from '../views/shared/redux/slice';
import searchReducer from '../views/search/redux/slice';
import watchReducer from '../views/watch/redux/slice';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    shared: sharedReducer,
    search: searchReducer,
    watch: watchReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export default store;
