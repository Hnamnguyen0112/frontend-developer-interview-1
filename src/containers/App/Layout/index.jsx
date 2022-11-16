import React from 'react';

import Header from './Header';

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main className="min-h-[calc(100vh-95px)] flex">{children}</main>
    </div>
  );
}
