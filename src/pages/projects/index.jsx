import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <nav>
      <ul>
        <li><Link to="/projects/icon">icon</Link></li>
        <li><Link to="/projects/wuziqi">wuziqi</Link></li>
      </ul>
    </nav>
  )
}