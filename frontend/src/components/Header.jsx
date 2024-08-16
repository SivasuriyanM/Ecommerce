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
        <a href="#" className="navbar-brand">
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
        ) : typeof currentUser !== "undefined" ? (
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
              <Dropdown.Item href="#">Profile</Dropdown.Item>
              <Dropdown.Item
                href="#"
                onClick={() => {
                  setNav("cart");
                }}
              >
                Cart
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                onClick={() => {
                  setNav("auth");
                  setCurrentUser(undefined);
                  localStorage.setItem("currentUser", undefined);
                }}
              >
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <>
            <button
              className="btn btn-outline-success"
              onClick={() => {
                setNav("auth");
              }}
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
