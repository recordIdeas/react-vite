/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router';

import ReturnHomeLayout from '../layouts/returnHome';
import ReturnAboutsLayout from '../layouts/returnAbouts';
import NotFound from '../layouts/notfound';

const Abouts = lazy(() => import("../pages/abouts"));

const About = lazy(() => import("../pages/abouts/about"));
const Contact = lazy(() => import("../pages/abouts/contact"));

export default function AboutsRoute() {
  return useRoutes([
    {
      element: <ReturnHomeLayout />,
      children: [
        {
          path: "",
          element: <Suspense fallback={null}><Abouts /></Suspense>
        }
      ]
    },
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