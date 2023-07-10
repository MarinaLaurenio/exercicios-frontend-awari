/* eslint-disable react/prop-types */
import "./ItemCard.css";
import Heart from "../Heart/Heart";
import { useDispatch, useSelector } from "react-redux";
import { favoritesActions } from "../../store/favorites";

export default function ItemCard({ item }) {
  const favorites = useSelector(({ favorites }) => favorites);
  const dispatch = useDispatch();

  const { name, sprites } = item;
  const sprite = sprites.other["official-artwork"].front_default;
  const isFavorite = favorites.includes(item.id);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(favoritesActions.remove(item));
    } else {
      dispatch(favoritesActions.add(item));
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
