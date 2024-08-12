import { Link, Outlet } from "react-router-dom";

export default function ReturnHooks() {
  return  (
    <>
      <div className="breadcrumbs">
        <Link to="/hooks">Return Hooks</Link>
      </div>

      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  )
}