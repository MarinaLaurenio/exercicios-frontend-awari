import "./App.css";
import ExerciseFive from "./components/ExerciseFive";
import ExerciseOne from "./components/ExerciseOne";
import ExerciseTwo from "./components/ExerciseTwo";
import ExerciseThree from "./components/ExerciseThree";
import ExerciseSix from "./components/ExerciseSix";
import Card from "./layout/Card";
import ExerciseSeven from './components/ExerciseSeven';
import ExerciseEight from "./components/ExerciseEight.jsx";
import ExerciseNine from "./components/ExerciseNine";
import ExerciseTen from "./components/ExerciseTen";
import ExerciseEleven from "./components/ExerciseEleven";
import ExerciseFour from "./components/ExerciseFour";

function App() {
  return (
    <div className="App">
      <Card title="Exercício 01">
        <ExerciseOne />
      </Card>
      <Card title="Exercício 02">
        <ExerciseTwo />
      </Card>
      <Card title="Exercício 03">
        <ExerciseThree/>
      </Card>
      <Card title="Exercício 04">
        <ExerciseFour/>
      </Card>
      <Card title="Exercício 05">
        <ExerciseFive/>
      </Card>
      <Card title="Exercício 06">
        <ExerciseSix/>
      </Card>
      <Card title="Exercício 07">
        <ExerciseSeven/>
      </Card>
      <Card title="Exercício 08">
        <ExerciseEight/>
      </Card>
      <Card title="Exercício 09">
        <ExerciseNine/>
      </Card>
      <Card title="Exercício 10">
        <ExerciseTen/>
      </Card>
      <Card title="Exercício 11">
        <ExerciseEleven/>
      </Card>
    </div>
  );
}

export default App;
