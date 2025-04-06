import { Outlet } from 'react-router';
import { Header } from '../components/header/Header.tsx';
import { Footer } from '../components/Footer.tsx';

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="relative overflow-x-clip">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
