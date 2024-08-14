import { Outlet } from "react-router-dom";

import HeaderComponent from '../component/header';
import FooterComponent from '../component/footer';

export default function Base() {
  return  (
    <>
      <HeaderComponent />

      <Outlet />

      <FooterComponent />
    </>
  )
}