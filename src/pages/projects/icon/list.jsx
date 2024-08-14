import { Link } from "react-router-dom";

export default function IconList() {
  return (
    <ul>
      <li><Link to="/projects/icon/CodazonFont">CodazonFont</Link></li>
      <li><Link to="/projects/icon/FontAwesome">FontAwesome</Link></li>
      <li><Link to="/projects/icon/Linearicons">Linearicons</Link></li>
    </ul>
  )
}