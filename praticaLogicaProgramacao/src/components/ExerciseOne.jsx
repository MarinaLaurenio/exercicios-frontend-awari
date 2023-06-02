import { useState } from "react";

export default function ExerciseOne() {
  const [number, setnumber] = useState(0);
  const add = () => {
    if (number === 10) {
      return;
    }
    setnumber(number + 1);
  };

  return (
    <div>
      <p>Contagem de 1 a 10:</p>
      <p>{number}</p>
      <button onClick={add}>Somar</button>
    </div>
  );
}
