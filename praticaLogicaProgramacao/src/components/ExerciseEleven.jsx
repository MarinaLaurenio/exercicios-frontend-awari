import { useState } from "react";

export default function ExerciseEleven() {
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    setHeight(event.target.value);
  };

  const calculateTriangle = () => {
    const n = parseInt(height);
    let triangle = "";
    for (let i = 1; i <= n; i++) {
      triangle += "*".repeat(i) + "\n";
    }
    setResult(triangle);
  };

  return (
    <>
      <p>
        Digite um número para imprimir a altura de um triangulo utilizando
        asteristicos:
      </p>
      <input
        placeholder="Digite um número inteiro"
        type="number"
        value={height}
        onChange={handleChange}
      />
      <button onClick={calculateTriangle}>Resultado</button>
      <pre>{result}</pre>
    </>
  );
}
