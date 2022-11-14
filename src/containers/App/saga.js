import { APPLICATION_ACCESS_TOKEN } from '@utils/constants';
import { getLocalStorage } from '@utils/localStorage';
import { fork, put, takeLatest } from 'redux-saga/effects';

import { appChangeLanguageSuccess, appInitializeSuccess } from './actions';
import { APP_CHANGE_LANGUAGE_REQUEST, APP_INITIALIZE_REQUEST } from './constants';

export function* appInitializeSaga() {
  const accessToken = !!getLocalStorage(APPLICATION_ACCESS_TOKEN);
  yield put(appInitializeSuccess(accessToken));
}

export function* appChangeLanguageRequestSaga({ payload }) {
  yield put(appChangeLanguageSuccess(payload));
}

export function* watchAppInitializeSaga() {
  yield takeLatest(APP_INITIALIZE_REQUEST, appInitializeSaga);
}

export function* watchAppChangeLanguageRequestSaga() {
  yield takeLatest(APP_CHANGE_LANGUAGE_REQUEST, appChangeLanguageRequestSaga);
}

export default function* saga() {
  yield fork(watchAppInitializeSaga);
  yield fork(watchAppChangeLanguageRequestSaga);
}
