import React, { useEffect } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import FallbackPage from '@components/FallbackPage';
import { connectAutoDispatch } from '@utils/connectAutoDispatch';

import { appInitializeRequest } from './actions';
import LanguageProvider from './LanguageProvider';

function App({ initialized, appInitializeRequest }) {
  useEffect(() => {
    appInitializeRequest();
  }, []);

  if (!initialized) {
    return <FallbackPage />;
  }

  return (
    <LanguageProvider>
      <BrowserRouter>
        <>
          <Routes></Routes>
          <ToastContainer />
        </>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default connectAutoDispatch(
  ({ appState }) => ({
    initialized: appState.initialized
  }),
  { appInitializeRequest }
)(App);
