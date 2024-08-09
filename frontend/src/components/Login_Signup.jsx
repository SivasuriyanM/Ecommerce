import React from "react";
import "../styles/login_signup.css";
import { UserChange } from "../Context/NavigationContext";

function Login_Signup() {
  const { setNav } = UserChange();
  const handleClick = () => {
    const mailId = document.getElementById("email");
    const password = document.getElementById("pswd");
    if (
      mailId === "msivasuriyanmohan692@gmail.com" &&
      password === "Chucklebyte"
    ) {
      setNav("home");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div className="login-signup-container">
      <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div class="signup">
          <form>
            <label for="chk" aria-hidden="true">
              Sign up
            </label>
            <input type="text" name="txt" placeholder="User name" required="" />
            <input type="email" name="email" placeholder="Email" required="" />
            <input
              type="password"
              name="pswd"
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

        <div class="login">
          <form action={handleClick}>
            <label for="chk" aria-hidden="true">
              Login
            </label>
            <input type="email" id="email" placeholder="Email" />
            <input type="password" id="pswd" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login_Signup;
