import { FaSearch } from "react-icons/fa";
import "./Searchbar.css";

export function Searchbar() {
  return (
    <search className="searchbar-container">
      <FaSearch className="searchbar-icon" />
      <input
        className="searchbar-input"
        type="search"
        placeholder="search for an image"
      />
    </search>
  );
}
