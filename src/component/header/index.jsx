import { lazy, Suspense } from 'react';

const HeaderStyle = lazy(() => import("./style/1.jsx"));

export default function Header() {
  return  (
    <header>
      <Suspense fallback={null}><HeaderStyle /></Suspense>
    </header>
  )
}