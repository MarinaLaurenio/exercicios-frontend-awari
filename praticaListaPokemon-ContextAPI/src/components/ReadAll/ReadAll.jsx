import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./ReadAll.css";

export default function ReadAll() {
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
  }, []);

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
