import React from 'react';
import { connectAutoDispatch } from '@utils/connectAutoDispatch';

import AppLayout from '../Layout';

const AuthWrapper = ({ children }) => {
  return <AppLayout>{children}</AppLayout>;
};

export default connectAutoDispatch(
  ({ appState }) => ({
    authenticated: appState.authenticated
  }),
  {}
)(AuthWrapper);
