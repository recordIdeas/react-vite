/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router';

import ReturnAboutsLayout from '../layouts/returnAbouts';
import NotFound from '../layouts/notfound';

const About = lazy(() => import("../pages/abouts/about"));
const Contact = lazy(() => import("../pages/abouts/contact"));

export default function AboutsRoute() {
  return useRoutes([
    {
      element: <ReturnAboutsLayout />,
      children: [
        {
          path: "/about",
          element: <Suspense fallback={null}><About /></Suspense>
        },
        {
          path: "/contact",
          element: <Suspense fallback={null}><Contact /></Suspense>
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
  ])
}