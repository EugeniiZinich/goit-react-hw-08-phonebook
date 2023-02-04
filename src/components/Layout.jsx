import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { NavBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster />
    </>
  );
};
