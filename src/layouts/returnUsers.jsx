import { Link, Outlet } from "react-router-dom";

export default function ReturnUsers() {
  return (
    <>
      <div className="breadcrumbs">
        <Link to="/users">Return Users</Link>
      </div>

      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  )
}