/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router';

import ReturnHomeLayout from '../layouts/returnHome';
import ReturnProjectsLayout from '../layouts/returnProjects';
import ReturnIconLayout from '../layouts/returnIcon';
import NotFound from '../layouts/notfound';

const Projects = lazy(() => import("../pages/projects"));

const Wuziqi = lazy(() => import("../pages/projects/wuziqi"));
const IconList = lazy(() => import("../pages/projects/icon/list"));
const Icon = lazy(() => import("../pages/projects/icon"));

export default function ProjectsRoute() {
  return useRoutes([
    {
      element: <ReturnHomeLayout />,
      children: [
        {
          path: "",
          element: <Suspense fallback={null}><Projects /></Suspense>
        }
      ]
    },
    {
      element: <ReturnProjectsLayout />,
      children: [
        {
          path: "/wuziqi",
          element: <Suspense fallback={null}><Wuziqi /></Suspense>
        },
        {
          path: "/icon",
          element: <Suspense fallback={null}><IconList /></Suspense>
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    },
    {
      element: <ReturnIconLayout />,
      children: [
        {
          path: "/icon/:family",
          element: <Suspense fallback={null}><Icon /></Suspense>
        }
      ]
    }
  ])
}