import "./App.css";
import { Display } from "./components/Display";
import { Searchbar } from "./components/Searchbar";

function App() {
  return (
    <div className="container">
      <Display />
      <Searchbar />
    </div>
  );
}

export default App;
