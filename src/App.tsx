import { createBrowserRouter, RouterProvider } from 'react-router';

import { RootLayout } from './pages/RootLayout.tsx';
import { Home } from './pages/Home.tsx';
import { Login } from './pages/Login.tsx';
import { SignUp } from './pages/SignUp.tsx';
import { InstrumentShop } from './pages/InstrumentShop.tsx';
import { InstrumentDetails } from './pages/InstrumentDetails.tsx';
import { Error } from './pages/Error.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'cadastro',
        element: <SignUp />,
      },
      {
        path: 'instrumentos-de-cordas',
        element: <InstrumentShop />,
      },
      {
        path: 'instrumentos-de-cordas/:instrumentId',
        element: <InstrumentDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
