import { useState } from "react";

export default function ExerciseNine() {
  const [ages, setAges] = useState([]);
  const [counter, setCounter] = useState("");

  const handleChange = (event) => {
    setAges(event.target.value.split(","));
  };

  const seeAges = () => {
    let amount = 0;

    for (let i = 0; i < ages.length; i++) {
      const number = parseInt(ages[i]);
      if (number >= 18) {
        amount++;
      }
    }
    setCounter(amount);
  };

  return (
    <>
      <p>
        Recebe a idade de várias pessoas e mostra a quantidade de pessoas com
        idade maior ou igual a 18 anos:
      </p>
      <input
        placeholder="Digite idades separadas por vírgula"
        type="text"
        value={ages}
        onChange={handleChange}
      />
      <button onClick={seeAges}>Resultado</button>
      <pre>{counter}</pre>
    </>
  );
}
