import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import sharedReducer from '../views/shared/redux/reducer';
import searchReducer from '../views/search/redux/reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    shared: sharedReducer,
    search: searchReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export default store;
