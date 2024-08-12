/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router';

import ReturnUsersLayout from '../layouts/returnUsers';
import NotFound from '../layouts/notfound';

const NewUser = lazy(() => import("../pages/users/newUser"));
const UserList = lazy(() => import("../pages/users/userList"));
const UserDetail = lazy(() => import("../pages/users/userDetail"));

export default function ProjectsRoute() {
  return useRoutes([
    {
      element: <ReturnUsersLayout />,
      children: [
        {
          path: "/create",
          element: <Suspense fallback={null}><NewUser /></Suspense>
        },
        {
          path: "/list",
          element: <Suspense fallback={null}><UserList /></Suspense>
        },
        {
          path: "/:id",
          element: <Suspense fallback={null}><UserDetail /></Suspense>
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
  ])
}