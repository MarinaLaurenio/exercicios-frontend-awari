/* eslint-disable react/prop-types */
import "./Data.css";
export default function Data({ data }) {
  if (!data || !data.sprites || !data.sprites.other) {
    return null; // Retorna null ou uma mensagem de erro, dependendo do caso.
  }
  const { name, sprites } = data;
  const sprite = sprites.other["official-artwork"].front_default;
  return (
    <div className="data">
      <h2>Pokémon:</h2>
      <h3>{name}</h3>
      <img className="data-img" src={sprite} alt={name} />
    </div>
  );
}
