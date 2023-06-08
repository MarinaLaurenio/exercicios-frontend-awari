/* eslint-disable no-undef */
import React, { useState } from "react";

export default function ExerciseFive() {
  const [table, setTable] = useState([]);

  const generateTable = () => {
    const newTable = [];

    for (let i = 1; i <= 10; i++) {
      const row = [];
      for (let j = 1; j <= 10; j++) {
        const result = i * j;
        const calculation = `${i} x ${j} = ${result}`;
        row.push(calculation);
      }
      newTable.push(row);
      setTable(newTable);
    }
  };

  return (
    <>
      <p>Tabuada dos números de 1 a 10 usando laços de repetição:</p>
      <button onClick={generateTable}>Gerar tabuada</button>
      <span>
        {table.map((row, index) => (
          <div key={index}>
            {row.map((calculation, idx) => (
              <span key={idx}>
                {calculation}
                <br />
              </span>
            ))}
            <br />
          </div>
        ))}
      </span>
    </>
  );
}
