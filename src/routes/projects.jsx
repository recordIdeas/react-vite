/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router';

import ReturnProjectsLayout from '../layouts/returnProjects';
import NotFound from '../layouts/notfound';

const Wuziqi = lazy(() => import("../pages/projects/wuziqi"));
const Icon = lazy(() => import("../pages/projects/icon"));

export default function ProjectsRoute() {
  return useRoutes([
    {
      element: <ReturnProjectsLayout />,
      children: [
        {
          path: "/wuziqi",
          element: <Suspense fallback={null}><Wuziqi /></Suspense>
        },
        {
          path: "/icon",
          element: <Suspense fallback={null}><Icon /></Suspense>
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
  ])
}