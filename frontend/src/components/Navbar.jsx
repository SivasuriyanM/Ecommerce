/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../App.css";
import { UserChange } from "../Context/NavigationContext";
import Dropdown from "react-bootstrap/Dropdown";

function Navbar() {
  const { setNav } = UserChange();
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          className="nav-link active"
          aria-current="page"
          href="#"
          onClick={() => {
            setNav("home");
          }}
        >
          {" "}
          Home{" "}
        </a>
      </li>
      <li className="nav-item dropdown">
        <Dropdown>
          <Dropdown.Toggle
            style={{ all: "unset" }}
            className="nav-link"
            variant="success"
            id="dropdown-basic"
          >
            Products
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Clothes</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Grocery </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              onClick={() => {
                setNav("product");
              }}
            >
              Electronics
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#"
          onClick={() => {
            setNav("cart");
          }}
        >
          Cart
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li>
    </ul>
  );
}

export default Navbar;
