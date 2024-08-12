import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <ul>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/projects">projects</Link></li>
        <li><Link to="/hooks">hooks</Link></li>
        <li><Link to="/abouts">abouts</Link></li>
      </ul>
    </main>
  )
}