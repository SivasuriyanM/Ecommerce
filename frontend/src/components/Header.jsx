import React, { useState } from "react";
import "../App.css";
import { UserChange } from "../Context/NavigationContext";
function Header() {
  const { setNav, setSearch, user } = UserChange();

  const [query, setQuery] = useState("");

  function search(e) {
    e.preventDefault();
    setQuery(e.target.value);
  }
  console.log(user);

  return (
    <div className="App-header">
      <h1>CHUCKLEBYTES </h1>
      <input
        type="text"
        className="w-full placeholder-gray-400 text-gray-900 p-4"
        placeholder="Search"
        onChange={search}
        value={query}
      />
      <button
        onClick={() => {
          setSearch(query);
          setNav("search");
        }}
      >
        🔍
      </button>
      <button
        onClick={() => {
          setNav("auth");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Header;
