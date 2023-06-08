import { useState } from "react";

export default function ExerciseEight() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [number4, setNumber4] = useState("");
  const [number5, setNumber5] = useState("");
  const [media, setMedia] = useState("");

  const handleChange = (event, setNumber) => {
    setNumber(event.target.value);
  };

  const mediaIdades = () => {
    const idade1 = parseInt(number1);
    const idade2 = parseInt(number2);
    const idade3 = parseInt(number3);
    const idade4 = parseInt(number4);
    const idade5 = parseInt(number5);

    if (
      Number.isNaN(idade1) ||
      Number.isNaN(idade2) ||
      Number.isNaN(idade3) ||
      Number.isNaN(idade4) ||
      Number.isNaN(idade5)
    ) {
      setMedia("Por favor, insira apenas números válidos.");
      return;
    }

    const resultadoMedia = (idade1 + idade2 + idade3 + idade4 + idade5) / 5;

    setMedia(resultadoMedia);
  };

  return (
    <>
      <p>Recebe 5 idades, calcula e mostra a média das idades digitadas:</p>
      <input
        placeholder="Digite a primeira idade"
        type="number"
        value={number1}
        onChange={(event) => handleChange(event, setNumber1)}
      />
      <input
        placeholder="Digite a segunda idade"
        type="number"
        value={number2}
        onChange={(event) => handleChange(event, setNumber2)}
      />
      <input
        placeholder="Digite a terceira idade"
        type="number"
        value={number3}
        onChange={(event) => handleChange(event, setNumber3)}
      />
      <input
        placeholder="Digite a quarta idade"
        type="number"
        value={number4}
        onChange={(event) => handleChange(event, setNumber4)}
      />
      <input
        placeholder="Digite a quinta idade"
        type="number"
        value={number5}
        onChange={(event) => handleChange(event, setNumber5)}
      />
      <button onClick={mediaIdades}> Ver média</button>
      <span>{media}</span>
    </>
  );
}
