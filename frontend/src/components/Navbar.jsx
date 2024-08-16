/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../App.css";
import { UserChange } from "../Context/NavigationContext";
import Dropdown from "react-bootstrap/Dropdown";

function Navbar() {
  const { setNav, currentUser } = UserChange();
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
            className="nav-link active"
            variant="success"
            id="dropdown-basic"
          >
            Products
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Clothes</Dropdown.Item>
            <Dropdown.Item href="#">Grocery </Dropdown.Item>
            <Dropdown.Item
              href="#"
              onClick={() => {
                setNav("product");
              }}
            >
              Electronics
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </li>
      {typeof currentUser !== "undefined" ? (
        <li className="nav-item">
          <a
            className="nav-link "
            href="#"
            onClick={() => {
              setNav("cart");
            }}
          >
            Cart
          </a>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
}

export default Navbar;
