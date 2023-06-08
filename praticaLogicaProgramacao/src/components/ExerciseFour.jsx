import { useState } from "react";

export default function ExerciseFour() {
  const [primeNumbers, setPrimeNumbers] = useState([]);
  const isPrime = (n) => {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  const handleClick = () => {
    const result = [];
    for (let i = 1; i <= 100; i++) {
      if (isPrime(i)) {
        result.push(i);
      }
    }
    setPrimeNumbers(result);
  };

  return (
    <>
      <p>Todos os números primos de 0 a 100:</p>
      <button onClick={handleClick}>Resultado</button>
      <span> {primeNumbers.join(", ")}</span>
    </>
  );
}
