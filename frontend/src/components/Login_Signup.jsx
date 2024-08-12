/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React from "react";
import "../styles/login_signup.css";
import { UserChange } from "../Context/NavigationContext";
import { createUser } from "../services/UserService";

function Login_Signup() {
  const { setNav, user } = UserChange();

  console.log(user);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newUser = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    createUser(newUser)
      .then((createdUser) => {
        alert("User Registered", createdUser);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };
  const handleClick = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const currentUser = user.find(({ name }) => name === formData.get("name"));
    console.log(currentUser);
    if (
      currentUser.name === formData.get("name") &&
      currentUser.password === formData.get("password")
    ) {
      setNav("home");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div className="login-signup-container">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={handleSubmit}>
            <label for="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="User name"
              required=""
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required=""
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required=""
            />
            <input
              type="password"
              name="confpswd"
              placeholder="Confirm Password"
              required=""
            />
            <button>Sign up</button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={handleClick}>
            <label for="chk" aria-hidden="true">
              Login
            </label>
            <input type="name" name="name" id="name" placeholder="User Name" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login_Signup;
