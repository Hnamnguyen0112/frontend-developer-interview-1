import React from 'react';

import Header from './Header';

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main>{children}</main>
    </div>
  );
}
