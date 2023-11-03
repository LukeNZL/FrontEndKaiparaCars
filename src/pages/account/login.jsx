import React from "react";
import { Link } from "react-router-dom";
import { Register } from "./register";
import "./account.css";
export const Login = () => {
  return (
    <>
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <input
              type="text"
              placeholder="email"
              id="inputStyle"
              name="email"
            />
            <input
              type="password"
              placeholder="password"
              id="inputStyle"
              name="password"
            />
            <button type="submit" name="login" id="inputStyle">
              login
            </button>
            <p class="message">
              Not registered?{" "}
              <a href="#">
                <Link to={"/register"}>Create an account</Link>
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
