import { Link, Outlet } from "react-router-dom";

export default function ReturnAbouts() {
  return  (
    <>
      <div className="breadcrumbs">
        <Link to="/abouts">Return Abouts</Link>
      </div>

      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  )
}