/* eslint-disable react/prop-types */
import ItemCard from "../ItemCard/ItemCard";
import "./Card.css"


export default function Card({ items = [] }) {
  const map = items.map((item)=> {
    return (
      <ItemCard
      key={item.id}
      item = {item}
      />
    )
  })

  return (
    <div className="card">
      {map}
    </div>
  );
}
