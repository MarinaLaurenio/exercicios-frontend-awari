import { useState } from "react";

export default function ExerciseTwo() {
  const [number, setnumber] = useState(10);
  const sub = () => {
    if (number === 0) {
      return;
    }
    setnumber(number - 1);
  };

  return (
    <>
      <p>Contagem de 10 a 1:</p>
      <span>{number}</span>
      <button onClick={sub}>Subtrair</button>
    </>
  );
}
