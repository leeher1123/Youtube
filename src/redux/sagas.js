import { all, fork } from 'redux-saga/effects';

import sharedSaga from '../views/shared/redux/saga';
import homeSaga from '../views/home/redux/saga';
import searchSaga from '../views/search/redux/saga';

const sagas = function* () {
  yield all([
    fork(sharedSaga),
    fork(homeSaga),
    fork(searchSaga),
  ]);
};

export default sagas;
