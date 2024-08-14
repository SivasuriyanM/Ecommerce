/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../App.css";
import { UserChange } from "../Context/NavigationContext";
import Dropdown from "react-bootstrap/Dropdown";
function Header() {
  const { nav, setNav, setSearch, currentUser, setCurrentUser } = UserChange();

  const [query, setQuery] = useState("");

  function search(e) {
    e.preventDefault();
    setQuery(e.target.value);
  }
  console.log(currentUser);

  return (
    <div className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a href="# " className="navbar-brand">
          CHUCKLEBYTES
        </a>
        <div className="d-flex">
          <input
            type="search"
            className="form-control me-2"
            placeholder="Search"
            aria-label="Search"
            onChange={search}
            value={query}
          />
          <button
            className="btn btn-outline-success"
            onClick={() => {
              setSearch(query);
              setNav("search");
            }}
          >
            Search
          </button>
        </div>
        {nav === "auth" ? (
          ""
        ) : currentUser === "" ? (
          <button
            className="btn btn-outline-success"
            onClick={() => {
              setNav("auth");
            }}
          >
            Login
          </button>
        ) : (
          <>
            <Dropdown>
              <Dropdown.Toggle
                style={{ all: "unset" }}
                className="nav-link"
                variant="success"
                id="dropdown-basic"
              >
                {currentUser.name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  onClick={() => {
                    setNav("cart");
                  }}
                >
                  Cart
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  onClick={() => {
                    setNav("auth");
                    setCurrentUser("");
                  }}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
