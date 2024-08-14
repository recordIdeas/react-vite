import { Link, Outlet } from "react-router-dom";

export default function returnIcon() {
  return  (
    <>
      <div className="breadcrumbs">
        <Link to="/projects/icon">Return Icon</Link>
      </div>

      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  )
}