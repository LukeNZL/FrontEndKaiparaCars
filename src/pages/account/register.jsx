/*
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./account.css";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const Register = () => {
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
  function sendRegistration(event) {
    console.log(email);
    console.log(username);
    console.log(password);
    event.preventDefault();
    client
      .post("/authapi/register", {
        email: email,
        username: username,
        password: password,
      })
      .then(function (res) {
        client.post("/authapi/login", {
          email: email,
          password: password,
        });
      })
      .then(function (res) {
        setCurrentUser(true);
        console.log("res", res);
        console.log("current user", currentUser);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <div class="login-page">
        <div class="form">
          <form
            class="register-form"
            onSubmit={(event) => sendRegistration(event)}
          >
            <input
              type="text"
              placeholder="name"
              className="inputStyle"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type="text"
              placeholder="email address"
              className="inputStyle"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              className="inputStyle"
              name="password1"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
 */
