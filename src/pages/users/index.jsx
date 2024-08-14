import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <ul>
      <li><Link to="/users/list">User list</Link></li>
      <li><Link to="/users/create">create User</Link></li>
    </ul>
  )
}