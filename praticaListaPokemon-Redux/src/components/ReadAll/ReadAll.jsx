import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { favoritesActions } from "../../store/favorites";
import Card from "../Card/Card";
import "./ReadAll.css";

export default function ReadAll() {
  const dispatch = useDispatch;
  const [items, setItems] = useState([]);

  const loadDetails = (items) => {
    const promises = items.map((item) => {
      return fetch(item.url).then((response) => response.json());
    });
    Promise.all(promises).then((data) => {
      setItems(data);
    });
  };

  useEffect(() => {
    //Inicialização
    const localData = localStorage.getItem("react-redux");
    if (localData) {
      const parsed = JSON.parse(localData);
      const { favorites } = parsed;
      dispatch(favoritesActions.init(favorites));
    }

    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { results } = data;
        loadDetails(results);
      })
      .catch(() => {
        console.error("Error");
      });
  }, [dispatch]);

  return (
    <>
      <header className="header">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="PokeApi"
        />
      </header>
      <div className="readall">
        <Card items={items} />
      </div>
    </>
  );
}
