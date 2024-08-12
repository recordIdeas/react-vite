import { useParams } from "react-router-dom";

export default function UserDetail() {
  let params = useParams();

  return (
    <h2>Welcome to User: {params.id}</h2>
  )
}