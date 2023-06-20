import { useNavigate } from "react-router-dom";
import List from "./../../components/List/List";
import { users } from "./../../data.js";

export default function HomePage() {
  const navigate = useNavigate();

  const handleClick = (item) => {
    const { id } = item;
    navigate(`/details/${id}`);
    console.log("detalhe item");
  };

  return (
    <div>
      <h1>HOME</h1>
      <List content={users} onItemClick={handleClick} />
    </div>
  );
}
