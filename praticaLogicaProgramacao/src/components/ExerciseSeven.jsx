import { useState } from "react";

export default function ExerciseSeven() {
  const [number, setNumber] = useState("");
  const [evenList, setEvenList] = useState([]);
  const [oddList, setOddList] = useState([]);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const generateList = () => {
    const parsedNumber = parseInt(number);
    const numeroPar = [];
    const numeroImpar = [];

    for (let i = 1; i <= parsedNumber; i++) {
      if (i % 2 === 0) {
        numeroPar.push(i);
      } else {
        numeroImpar.push(i);
      }
    }
    setEvenList("Pares: " + numeroPar.join(", ") + ";");
    setOddList("ímpares: " + numeroImpar.join(", ") + ";");
  };

  return (
    <>
      <p>
        Recebe um número inteiro e mostra os números pares e ímpares
        (separados), de 1 até ele:
      </p>
      <input
        type="number"
        placeholder="Digite um número inteiro"
        value={number}
        onChange={handleChange}
      />
      <button onClick={generateList}>Gerar tabuada</button>
      <pre>{evenList}</pre>
      <pre>{oddList}</pre>
    </>
  );
}
