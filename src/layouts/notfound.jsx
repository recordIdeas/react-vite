import Mock from 'mockjs';

export default function Notfound() {
  const data = Mock.mock({
    image: "@image('400x200', '#50B347', '#FFF', 'Not Found')"
  });

  return <img src={data.image} />
}