import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';

import { actions } from './reducer';
import API from '../../../api';

const getVideos = function* ({ payload }) {
  const result = yield call(API.getVideos, payload);
  yield put(actions.setVideos(result.data));
};

const getCategories = function* ({ payload }) {
  const result = yield call(API.getCategories, payload);
  yield put(actions.setCategories(result.data));
};

function* saga() {
  yield all([
    takeLatest(actions.getVideos.type, getVideos),
    takeLatest(actions.getCategories.type, getCategories),
  ]);
}

export default saga;
