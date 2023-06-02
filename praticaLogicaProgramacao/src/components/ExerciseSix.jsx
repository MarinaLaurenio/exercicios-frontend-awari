/* eslint-disable no-undef */
import React, { useState } from "react";

export default function ExerciseSix() {
  const [number, setNumber] = useState("");
  const [table, setTable] = useState([]);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const generateTable = () => {
    const parsedNumber = parseInt(number);
    const row = [];

    for (let i = 1; i <= 10; i++) {
      const result = i * parsedNumber;
      const calculation = `${i} x ${parsedNumber} = ${result}`;
      row.push(calculation);
    }

    setTable(row);
  };

  return (
    <div>
      <p>Tabuada do número escolhido:</p>
      <input
        type="number"
        placeholder="Digite um número inteiro e positivo"
        value={number}
        onChange={handleChange}
      />
      <button onClick={generateTable}>Gerar tabuada</button>
      <br />
      {table.length > 0 && (
        <div>
          {table.map((row, index) => (
            <div key={index}>{row}</div>
          ))}
        </div>
      )}
    </div>
  );
}
