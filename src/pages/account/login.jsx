/* 

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Register } from "./register";
import { AccountPage } from "./accountpage";
import axios from "axios";
import "./account.css";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const Login = () => {
  const [currentUser, setCurrentUser] = useState();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    client
      .get("/authapi/user")
      .then(function (res) {
        setCurrentUser(true);
      })
      .catch(function (error) {
        setCurrentUser(false);
      });
  }, []);
  function sendLogin(event) {
    event.preventDefault();
    client
      .post("/authapi/login", {
        email: email,
        password: password,
      })
      .then(function (res) {
        setCurrentUser(true);
      });
  }
  return (
    <>
      <div class="login-page">
        <div class="form">
          <form class="login-form" onSubmit={(event) => sendLogin(event)}>
            <input
              type="text"
              placeholder="email"
              className="inputStyle"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              className="inputStyle"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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


*/
