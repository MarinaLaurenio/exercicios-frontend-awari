import React, { useState } from "react";

export default function ExerciseThree() {
  const [count, setCount] = useState(""); //cria um estado para renderizar na tela

  const handleCountClick = () => {
    const numberInput = parseInt(document.getElementById("input").value);
    const newCount = []; //cria um novo array para guardar os valores

    for (let i = 1; i <= numberInput; i++) {
      newCount.push(i);
    }

    setCount(newCount.join(", "));
  };

  return (
    <>
      <p>Recebe um número inteiro e mostra a contagem de 1 até ele:</p>
      <input
        type="number"
        placeholder="Digite um número inteiro e positivo"
        id="input"
      />
      <button onClick={handleCountClick}>Contagem</button>
      <pre>{count}</pre>
    </>
  );
}
