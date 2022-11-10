import { createAction } from '@reduxjs/toolkit';

import {
  APP_CHANGE_LANGUAGE_REQUEST,
  APP_CHANGE_LANGUAGE_SUCCESS,
  APP_GET_CURRENT_USER_FAILURE,
  APP_GET_CURRENT_USER_REQUEST,
  APP_GET_CURRENT_USER_SUCCESS,
  APP_INITIALIZE_REQUEST,
  APP_INITIALIZE_SUCCESS,
  APP_LOGOUT_REQUEST,
  APP_LOGOUT_SUCCESS,
  APP_SHOW_LOADING
} from './constants';

export const appShowLoading = createAction(APP_SHOW_LOADING);
export const appInitializeRequest = createAction(APP_INITIALIZE_REQUEST);
export const appInitializeSuccess = createAction(APP_INITIALIZE_SUCCESS);

export const appGetCurrentUserRequest = createAction(APP_GET_CURRENT_USER_REQUEST);
export const appGetCurrentUserSuccess = createAction(APP_GET_CURRENT_USER_SUCCESS);
export const appGetCurrentUserFailure = createAction(APP_GET_CURRENT_USER_FAILURE);

export const appLogoutRequest = createAction(APP_LOGOUT_REQUEST);
export const appLogoutSuccess = createAction(APP_LOGOUT_SUCCESS);

export const appChangeLanguageRequest = createAction(APP_CHANGE_LANGUAGE_REQUEST);
export const appChangeLanguageSuccess = createAction(APP_CHANGE_LANGUAGE_SUCCESS);
