import { Link, Outlet } from "react-router-dom";

export default function ReturnProjects() {
  return  (
    <>
      <div className="breadcrumbs">
        <Link to="/projects">Return Projects</Link>
      </div>

      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  )
}