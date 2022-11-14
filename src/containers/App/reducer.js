import { createReducer } from '@reduxjs/toolkit';
import update from 'immutability-helper';

import {
  appChangeLanguageRequest,
  appInitializeRequest,
  appInitializeSuccess,
  appShowLoading
} from './actions';

const initialState = {
  initialized: false,
  authenticated: true,
  locale: 'en',
  loading: false,
  user: {}
};

const appReducer = createReducer(initialState, {
  [appShowLoading]: (state, action) =>
    update(state, {
      loading: {
        $set: action.payload
      }
    }),
  [appInitializeRequest]: (state) =>
    update(state, {
      loading: {
        $set: true
      }
    }),
  [appInitializeSuccess]: (state, action) =>
    update(state, {
      loading: {
        $set: false
      },
      initialized: {
        $set: true
      },
      authenticated: {
        $set: action.payload
      }
    }),
  [appChangeLanguageRequest]: (state, action) =>
    update(state, {
      locale: {
        $set: action.payload
      }
    })
});

export default appReducer;
