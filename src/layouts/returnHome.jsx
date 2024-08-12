import { Link, Outlet } from "react-router-dom";

export default function ReturnHome() {
  return  (
    <>
      <div className="breadcrumbs">
        <Link to="/home">Return Home</Link>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  )
}