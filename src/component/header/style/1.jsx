import { Link } from "react-router-dom";
import imageUrl from '../../../assets/react.svg'

export default function HeaderStyle1() {
  return  (
    <div className='container'>
      <Link to="/home">
        <img src={imageUrl} />
      </Link>
    </div>
  )
}