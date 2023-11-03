import React from "react";
import "./account.css";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <div class="login-page">
        <div class="form">
          <form class="register-form">
            <input
              type="text"
              placeholder="name"
              id="inputStyle"
              name="username"
            />
            <input
              type="text"
              placeholder="email address"
              id="inputStyle"
              name="email"
            />
            <input
              type="password"
              placeholder="password"
              id="inputStyle"
              name="password1"
            />
            <input
              type="password"
              placeholder="password"
              id="inputStyle"
              name="password2"
            />

            <button type="submit" name="register">
              create
            </button>
            <p class="message">
              Already registered?
              <a href="#">
                <Link to={"/login"}> Login</Link>
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
