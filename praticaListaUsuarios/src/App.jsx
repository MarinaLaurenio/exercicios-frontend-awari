import "./App.css";
import List from "./components/List/List";

function App() {
  const users = [
    {
      id: 0,
      name: "Apple",
    },
    {
      id: 1,
      name: "Samsung",
    },
    {
      id: 2,
      name: "Xiaomi",
    },
  ];
  return (
    <>
      <List content={users} />
    </>
  );
}

export default App;
