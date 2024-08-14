import { Link } from "react-router-dom";


export default function Abouts() {
  return (
    <ul>
      <li><Link to="/abouts/about">about</Link></li>
      <li><Link to="/abouts/contact">contact</Link></li>
    </ul>
  )
}