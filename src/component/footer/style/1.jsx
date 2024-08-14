import { lazy } from 'react';

const Abouts = lazy(() => import("../../../pages/abouts"));
const Projects = lazy(() => import("../../../pages/projects"));
const Hooks = lazy(() => import("../../../pages/hooks"));
const Users = lazy(() => import("../../../pages/users"));

export default function FooterStyle1() {
  return  (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <h3>Users</h3>
          <Users />
        </div>
        <div className="col-sm-8">
          <h3>Projects</h3>
          <Projects />
        </div>
        <div className="col-sm-8">
          <h3>Hooks</h3>
          <Hooks />
        </div>
        <div className="col-sm-8">
          <h3>Abouts</h3>
          <Abouts />
        </div>
      </div>
    </div>
  )
}