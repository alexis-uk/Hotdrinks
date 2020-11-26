import "./App.css";
import Hotdrinks from "./Components/Hotdrinks/Hotdrinks";

function App() {
  const showDetailsHandler = (drink) => {
    let msg = drink.actions.reduce((accumulator, currentValue, index) => {
      let n = index + 1;
      return accumulator + n + ". " + currentValue + "\n";
    }, "Steps:\n");
    alert(msg);
  };

  return (
    <div className="app">
      <h1 className="App-header">HOTDRINKS MACHINE</h1>
      <Hotdrinks showDetailsHandler={showDetailsHandler} />
    </div>
  );
}

export default App;
