import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { HeaderMegaMenu } from './components/Navbar';
import { Login } from './pages/Login';
import Protected from '../Protected';
import { AuthProvider } from './AuthContext';
import { Signup } from './pages/Signup';
import Portfolio from './pages/Portfolio';

const publicRoutes = [
  {
    path: '/login',
    elem: <Login />,
  },
  {
    path: '/signup',
    elem: <Signup />,
  },
];

const privateRoutes = [
  {
    path: '/',
    elem: <Home />,
  },
  {
    path: '/about',
    elem: <About />,
  },
  {
    path: '/contact',
    elem: <Contact />,
  },
  {
    path: '/portfolio',
    elem: <Portfolio />,
  },
];

const allRoutes = [
  {
    path: '/',
    elem: <Home />,
  },
  {
    path: '/about',
    elem: <About />,
  },
  {
    path: '/contact',
    elem: <Contact />,
  },
  // {
  //   path: '/login',
  //   elem: <Login />,
  // },
];

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="p-3">
          <HeaderMegaMenu />
          <Routes>
            {/* {allRoutes.map(({ path, elem }, i) => (
              <Route key={i} path={path} element={elem} />
            ))} */}

            {publicRoutes.map(({ path, elem }, i) => (
              <Route key={i} path={path} element={elem} />
            ))}

            {privateRoutes.map(({ path, elem }, i) => (
              <Route
                key={i}
                path={path}
                element={<Protected>{elem}</Protected>}
              />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
