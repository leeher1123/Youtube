import { takeLatest, call, put } from 'redux-saga/effects';

import { actions } from './reducer';
import API from '../../../api';

const getVideos = function* ({ payload }) {
  const result = yield call(API.getVideos, payload);
  yield put(actions.setVideos(result.data));
};

const saga = function* () {
  yield takeLatest(actions.getVideos.type, getVideos);
};

export default saga;
