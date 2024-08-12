import { Outlet } from "react-router-dom";

import HeaderComponent from '../component/header';

export default function Base() {
  return  (
    <>
      <HeaderComponent />

      <Outlet />
    </>
  )
}