/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router';

import ReturnHooksLayout from '../layouts/returnHooks';
import ReturnHomeLayout from '../layouts/returnHome';
import NotFound from '../layouts/notfound';

const Hooks = lazy(() => import("../pages/hooks"));

const UserLayoutEffect = lazy(() => import("../pages/hooks/userLayoutEffect"));
const UseEffect = lazy(() => import("../pages/hooks/useEffect"));
const UseTransition = lazy(() => import("../pages/hooks/useTransition"));
const UseCallback = lazy(() => import("../pages/hooks/useCallback"));
const UseContext = lazy(() => import("../pages/hooks/useContext"));
const UseReducer = lazy(() => import("../pages/hooks/useReducer"));
const UseImmerReducer = lazy(() => import("../pages/hooks/useImmerReducer"));
const UseDefferedValue = lazy(() => import("../pages/hooks/useDefferedValue"));
const UseMemo = lazy(() => import("../pages/hooks/useMemo"));

export default function HooksRoute() {
  return useRoutes([
    {
      element: <ReturnHomeLayout />,
      children: [
        {
          path: "",
          element: <Suspense fallback={null}><Hooks /></Suspense>
        }
      ]
    },
    {
      element: <ReturnHooksLayout />,
      children: [
        {
          path: "/userLayoutEffect",
          element: <Suspense fallback={null}><UserLayoutEffect /></Suspense>
        },
        {
          path: "/useEffect",
          element: <Suspense fallback={null}><UseEffect /></Suspense>
        },
        {
          path: "/useTransition",
          element: <Suspense fallback={null}><UseTransition /></Suspense>
        },
        {
          path: "/useCallback",
          element: <Suspense fallback={null}><UseCallback /></Suspense>
        },
        {
          path: "/useContext",
          element: <Suspense fallback={null}><UseContext /></Suspense>
        },
        {
          path: "/useReducer",
          element: <Suspense fallback={null}><UseReducer /></Suspense>
        },
        {
          path: "/useImmerReducer",
          element: <Suspense fallback={null}><UseImmerReducer /></Suspense>
        },
        {
          path: "/useDefferedValue",
          element: <Suspense fallback={null}><UseDefferedValue /></Suspense>
        },
        {
          path: "/useMemo",
          element: <Suspense fallback={null}><UseMemo /></Suspense>
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
  ])
}