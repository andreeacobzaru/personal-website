import "./App.css";
import { Toggle } from "./Toggle";
import { Duck } from "./Duck";

function App() {
  return (
    <>
      <div className="App">
        <Toggle />
        <div className="pond">
          <Duck />
        </div>
      </div>
    </>
  );
}

export default App;
