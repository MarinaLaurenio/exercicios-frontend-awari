/* eslint-disable react/prop-types */
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext({});

const getInitialState = () => {
  const localData = localStorage.getItem("favorites");
  if (!localData) {
    return [];
  }
  return JSON.parse(localData);
};

export const AppProvider = ({ children}) => {
  const [favorites, setFavorites] = useState(getInitialState());

  const add = useCallback(
    (data) => {
      setFavorites([...favorites, data.id]);
    },
    [favorites]
  );

  const remove = useCallback(
    (data) => {
      const filtered = favorites.filter((id) => id !== data.id);
      setFavorites(filtered);
    },
    [favorites]
  );

  const set = useCallback((data) => {
    setFavorites(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <AppContext.Provider value={{ favorites, add, remove, set }}>
      {children}
    </AppContext.Provider>
  );
};
