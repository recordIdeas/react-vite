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
const Users = lazy(() => import("../pages/users"));
const Abouts = lazy(() => import("../pages/abouts"));
const Hooks = lazy(() => import("../pages/hooks"));
const Projects = lazy(() => import("../pages/projects"));

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
        path: "/",
        element: <ReturnHomeLayout />,
        children: [
          {
            path: "/users",
            element: <Suspense fallback={null}><Users /></Suspense>
          },
          {
            path: "/abouts",
            element: <Suspense fallback={null}><Abouts /></Suspense>
          },
          {
            path: "/hooks",
            element: <Suspense fallback={null}><Hooks /></Suspense>
          },
          {
            path: "/projects",
            element: <Suspense fallback={null}><Projects /></Suspense>
          },
          {
            path: "*",
            element: <NotFound />
          }
        ]
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
      }
    ]
  }
]