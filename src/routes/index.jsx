/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

import BaseLayout from '../layouts/base';
import ReturnHomeLayout from '../layouts/returnHome';
import NotFound from '../layouts/notfound';

import UsersRoute from './users';
import AboutsRoute from './abouts';
import HooksRoute from './hooks';
import ProjectsRoute from './projects';

const Home = lazy(() => import("../pages/home"));

export default [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={null}><Home /></Suspense>
      },
      {
        path: "/home",
        element: <Navigate to="/" />
      },
      {
        path: "/users/*",
        element: <UsersRoute />
      },
      {
        path: "/abouts/*",
        element: <AboutsRoute />
      },
      {
        path: "/hooks/*",
        element: <HooksRoute />
      },
      {
        path: "/projects/*",
        element: <ProjectsRoute />
      },
      {
        element: <ReturnHomeLayout />,
        children: [
          {
            path: "*",
            element: <NotFound />
          }
        ]
      }
    ]
  }
];