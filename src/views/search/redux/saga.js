import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';

import { actions } from './slice';
import API from '../../../api';

const getRelatedVideos = function* ({ payload }) {
  const result = yield call(API.getRelatedVideos, payload);
  yield put(actions.setRelatedVideos(result.data));
};

function* saga() {
  yield all([
    takeLatest(actions.getRelatedVideos.type, getRelatedVideos),
  ]);
}

export default saga;
