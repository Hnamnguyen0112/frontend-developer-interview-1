import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import FallbackPage from '@components/FallbackPage';
import { connectAutoDispatch } from '@utils/connectAutoDispatch';

import { appInitializeRequest } from './actions';
import AuthWrapper from './AuthWrapper';
import LanguageProvider from './LanguageProvider';
import routes from './routes';

function renderRoute(routes) {
  return routes.map(({ path, key, component, children }) => {
    if (!children || !children.length) return <Route path={path} key={key} element={component} />;
    else {
      return (
        <Route path={path} key={key} element={component}>
          {renderRoute(children)}
        </Route>
      );
    }
  });
}

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
          <Helmet>
            <title>Frontend Mentor | Intro section with dropdown navigation</title>
          </Helmet>
          <Routes>
            {routes.map(({ path, key, component, children }) => {
              if (!children || !children.length)
                return (
                  <Route path={path} key={key} element={<AuthWrapper>{component}</AuthWrapper>} />
                );
              else {
                return (
                  <Route path={path} key={key} element={<AuthWrapper>{component}</AuthWrapper>}>
                    {renderRoute(children)}
                  </Route>
                );
              }
            })}
          </Routes>
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
