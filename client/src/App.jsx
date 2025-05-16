import { useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { Searchbar } from "./components/Searchbar";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="container">
      <Searchbar setResults={setResults} />
      <Display results={results} />
    </div>
  );
}

export default App;
