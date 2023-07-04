/* eslint-disable react/prop-types */
import "./ItemCard.css";
import Heart from "../Heart/Heart";
import { useContext } from "react";
import { AppContext } from "../../context";

export default function ItemCard({ item }) {
  const appContext = useContext(AppContext);

  if (!item || !item.sprites || !item.sprites.other) {
    return null; // Retorna null ou uma mensagem de erro, dependendo do caso.
  }

  const { name, sprites } = item;
  const sprite = sprites.other["official-artwork"].front_default;
  const isFavorite = appContext.favorites?.includes(item.id) || false;

  const handleClick = () => {
    if (isFavorite) {
      appContext.remove(item);
    } else {
      appContext.add(item);
    }
  };

  return (
    <div className="data">
      <h2>Pokémon:</h2>
      <h3>{name}</h3>
      <img className="data-img" src={sprite} alt={name} />
      <div>
        <Heart onClick={handleClick} selected={isFavorite} />
      </div>
    </div>
  );
}
