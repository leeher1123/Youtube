import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';

import { actions } from './slice';
import API from '../../../api';

const getComments = function* ({ payload }) {
  const result = yield call(API.getComments, payload);
  console.log(result.data);
  yield put(actions.setComments(result.data));
};

function* saga() {
  yield all([
    takeLatest(actions.getComments.type, getComments),
  ]);
}

export default saga;
