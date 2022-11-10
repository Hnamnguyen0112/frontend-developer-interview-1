import { ADMIN_CENTER_ACCESS_TOKEN } from '@utils/constants';
import { getLocalStorage, removeLocalStorage } from '@utils/localStorage';
import { fork, put, takeLatest } from 'redux-saga/effects';

import {
  appChangeLanguageSuccess,
  appGetCurrentUserFailure,
  appGetCurrentUserSuccess,
  appInitializeSuccess,
  appLogoutSuccess
} from './actions';
import {
  APP_CHANGE_LANGUAGE_REQUEST,
  APP_GET_CURRENT_USER_REQUEST,
  APP_INITIALIZE_REQUEST,
  APP_LOGOUT_REQUEST
} from './constants';

export function* appInitializeSaga() {
  const accessToken = !!getLocalStorage(ADMIN_CENTER_ACCESS_TOKEN);
  yield put(appInitializeSuccess(accessToken));
}

export function* appGetCurrentUserSaga({ payload }) {
  try {
    yield put(appGetCurrentUserSuccess(payload.account));
  } catch (e) {
    yield put(appGetCurrentUserFailure());
  }
}

export function* appLogoutRequestSaga() {
  removeLocalStorage(ADMIN_CENTER_ACCESS_TOKEN);
  yield put(appLogoutSuccess());
}

export function* appChangeLanguageRequestSaga({ payload }) {
  yield put(appChangeLanguageSuccess(payload));
}

export function* watchAppInitializeSaga() {
  yield takeLatest(APP_INITIALIZE_REQUEST, appInitializeSaga);
}

export function* watchAppGetCurrentUserSaga() {
  yield takeLatest(APP_GET_CURRENT_USER_REQUEST, appGetCurrentUserSaga);
}

export function* watchAppLogoutRequestSaga() {
  yield takeLatest(APP_LOGOUT_REQUEST, appLogoutRequestSaga);
}

export function* watchAppChangeLanguageRequestSaga() {
  yield takeLatest(APP_CHANGE_LANGUAGE_REQUEST, appChangeLanguageRequestSaga);
}

export default function* saga() {
  yield fork(watchAppInitializeSaga);
  yield fork(watchAppGetCurrentUserSaga);
  yield fork(watchAppLogoutRequestSaga);
  yield fork(watchAppChangeLanguageRequestSaga);
}
