import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Search, IconSearch } from "../styles/SearchBar";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const useOnSubmit = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      onSearch(search);
      setSearch("");
      if (location.pathname !== "/") {
        navigate("/");
      }
    } else {
      toast.error("Please enter a city name");
    }
  };

  return (
    <Search onSubmit={useOnSubmit}>
      <IconSearch />
      <input
        type="text"
        placeholder="Search City..."
        value={search}
        autoComplete="off"
        onChange={(e) => setSearch(e.target.value)}
      />
    </Search>
  );
}
