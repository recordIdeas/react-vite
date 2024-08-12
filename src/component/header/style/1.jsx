import { Link } from "react-router-dom";
import Mock from 'mockjs';

export default function HeaderStyle1() {
  const data = Mock.mock({
    image: "@image('140x70', '#50B347', '#FFF', ' LOGO')"
  });

  return  (
    <div className='container'>
      <Link to="/home">
        <img src={data.image} />
      </Link>
    </div>
  )
}