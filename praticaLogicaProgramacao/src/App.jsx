import "./App.css";
import ExerciseFive from "./components/ExerciseFive";
import ExerciseOne from "./components/ExerciseOne";
import ExerciseTwo from "./components/ExerciseTwo";
import ExerciseThree from "./components/ExerciseThree";
import ExerciseSix from "./components/ExerciseSix";
import Card from "./layout/Card";
import ExerciseSeven from './components/ExerciseSeven';

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
      <Card title="Exercício 05">
        <ExerciseFive/>
      </Card>
      <Card title="Exercício 06">
        <ExerciseSix/>
      </Card>
      <Card title="Exercício 07">
        <ExerciseSeven/>
      </Card>
    </div>
  );
}

export default App;
