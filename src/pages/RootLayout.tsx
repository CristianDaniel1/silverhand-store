import { Outlet } from 'react-router';
import { Footer } from '../components/Footer.tsx';
import { ScrollToTop } from '../components/ScrollToTop.tsx';

export const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};
