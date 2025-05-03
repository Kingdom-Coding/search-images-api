import { FaSearch } from "react-icons/fa";

export function Searchbar() {
  return (
    <search>
      <FaSearch />
      <input type="search" placeholder="search for an image" />
    </search>
  );
}
