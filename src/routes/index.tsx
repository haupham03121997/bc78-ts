// import HomePage from '../pages/HomeTemplate/HomePage';
// import AboutPage from '../pages/HomeTemplate/AboutPage';
import React, { JSX, lazy } from 'react';
import { Route } from 'react-router-dom';

type TRoute = {
  path: string;
  element: React.LazyExoticComponent<() => JSX.Element>;
  children?: TRoute[];
};

const routes: TRoute[] = [
  {
    path: '',
    element: lazy(() => import('../pages/HomeTemplate')),
    children: [
      {
        path: '',
        element: lazy(() => import('../pages/HomeTemplate/HomePage')),
      },
      {
        path: '/about',
        element: lazy(() => import('../pages/HomeTemplate/AboutPage')),
      },
    ],
  },
  // {
  //   path: '/auth',
  //   element: <Route path='/auth' element={<h1>Auth</h1>} />,
  // },
];

const renderRoutes = () => {
  return routes.map((item) => {
    if (item.children) {
      return (
        <Route key={item.path} path={item.path} element={<item.element />}>
          {item.children.map((child) => {
            return <Route key={child.path} path={child.path} element={<child.element />} />;
          })}
        </Route>
      );
    }
    return <Route key={item.path} path={item.path} element={<item.element />} />;
  });
};

export default renderRoutes;
