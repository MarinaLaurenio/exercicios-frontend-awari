import { useState } from "react";

export default function ExerciseTen() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const calculateSquare = () => {
    const n = parseInt(number);
    let square = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        square += "*";
      }
      square += "\n"; // Adiciona uma quebra de linha após cada linha do quadrado
    }
    setResult(square);
  };

  return (
    <>
      <p>
        Digite um número para imprimir um quadrado com asteriscos do tamanho do
        valor digitado:
      </p>
      <input
        placeholder="Digite um número inteiro"
        type="number"
        value={number}
        onChange={handleChange}
      />
      <button onClick={calculateSquare}>Calcular quadrado</button>
      <pre>{result}</pre>
    </>
  );
}
