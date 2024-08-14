import { lazy, Suspense } from 'react';

const FooterStyle = lazy(() => import("./style/1.jsx"));

export default function Footer() {
  return  (
    <footer>
      <Suspense fallback={null}><FooterStyle /></Suspense>
    </footer>
  )
}