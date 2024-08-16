import { lazy } from 'react';
import '../../../assets/label/toggle.css';

const Abouts = lazy(() => import("../../../pages/abouts"));
const Projects = lazy(() => import("../../../pages/projects"));
const Hooks = lazy(() => import("../../../pages/hooks"));
const Users = lazy(() => import("../../../pages/users"));

export default function FooterStyle1() {
  return  (
    <div className="container">
      <div className="row">
      <div className="col-sm-6">
          <input type="checkbox" name="mobile-toggle" id="footer-1" hidden />
          <label htmlFor="footer-1">
            <h3>Users</h3>
          </label>
          <Users />
        </div>
        <div className="col-sm-6">
          <input type="checkbox" name="mobile-toggle" id="footer-2" hidden />
          <label htmlFor="footer-2">
            <h3>Projects</h3>
          </label>
          <Projects />
        </div>
        <div className="col-sm-6">
          <input type="checkbox" name="mobile-toggle" id="footer-3" hidden />
          <label htmlFor="footer-3">
            <h3>Hooks</h3>
          </label>
          <Hooks />
        </div>
        <div className="col-sm-6">
          <input type="checkbox" name="mobile-toggle" id="footer-4" hidden />
          <label htmlFor="footer-4">
            <h3>Abouts</h3>
          </label>
          <Abouts />
        </div>
      </div>
    </div>
  )
}