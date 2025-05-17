import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useDebounce } from "../hook/useDebounce";
import { preloadImage } from "../utils/preloadImage";
import "./Searchbar.css";

export function Searchbar({ setResults }) {
  const [input, setInput] = useState("");
  const debouncedSearch = useDebounce(input);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (debouncedSearch.trim() == "") {
      return setResults([]);
    }

    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/pixabay?q=${debouncedSearch}&per_page=100`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "32591549-e248c23c0d9507b50877eabd8",
            },
          }
        );
        const data = await res.json();
        console.log("Fetched data:", data);
        const validResults = await Promise.all(
          data.hits.map((hit) =>
            preloadImage(hit.webformatURL, hit.userImageURL)
              .then(() => hit)
              .catch(() => null)
          )
        );
        const filteredResults = validResults.filter(Boolean);
        setResults(filteredResults);
      } catch (err) {
        const newError = new Error(err);
        setError(newError);
        console.log(error);
      }
    };
    fetchData();
  }, [debouncedSearch, setResults, error]);

  function onHandleChange(value) {
    setInput(value);
  }

  return (
    <search className="searchbar-container">
      <FaSearch className="searchbar-icon" />
      <input
        className="searchbar-input"
        type="search"
        placeholder="search for an image"
        value={input}
        onChange={(e) => {
          onHandleChange(e.target.value);
        }}
      />
    </search>
  );
}
