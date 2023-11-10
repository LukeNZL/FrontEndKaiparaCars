import React, { useState, useEffect } from "react";
import axios from "axios";
import "./account.css";
//import { Login } from "./login";
import { Link } from "react-router-dom";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const AccountPage = () => {
  const [currentUser, setCurrentUser] = useState();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    client
      .get("/authapi/user")
      .then(function (res) {
        setCurrentUser(true);
        setUserData(res.data.user);
      })
      .catch(function (error) {
        setCurrentUser(false);
      });
  }, []);

  function update_form_btn() {
    if (registrationToggle) {
      setRegistrationToggle(false);
    } else {
      setRegistrationToggle(true);
    }
  }

  function submitRegistration(e) {
    e.preventDefault();
    client
      .post("/authapi/register", {
        email: email,
        username: username,
        password: password,
      })
      .then(function (res) {
        client
          .post("/authapi/login", {
            email: email,
            password: password,
          })
          .then(function (res) {
            setCurrentUser(true);
          });
      });
  }

  function submitLogin(e) {
    e.preventDefault();
    client
      .post("/authapi/login", {
        email: email,
        password: password,
      })
      .then(function (res) {
        setCurrentUser(true);
      });
  }

  function submitLogout(e) {
    e.preventDefault();
    client
      .post("/authapi/logout", { withCredentials: true })
      .then(function (res) {
        setCurrentUser(false);
      });
  }

  if (currentUser) {
    return (
      <div className="login-page">
        <div className="form">
          <h2>hello {userData.username}</h2>
          <form onSubmit={(e) => submitLogout(e)}>
            <button type="submit" className="inputStyle">
              Log out
            </button>
          </form>
        </div>
      </div>
    );
  }
  return (
    <div>
      {registrationToggle ? (
        <>
          <div className="login-page">
            <div className="form">
              <form
                class="register-form"
                onSubmit={(event) => submitRegistration(event)}
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

                <button type="submit" name="register" className="inputStyle">
                  create
                </button>
                <p class="message">
                  Already registered?
                  <a class="message" onClick={update_form_btn}>
                    login
                  </a>
                </p>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <div class="login-page">
            <div class="form">
              <form class="login-form" onSubmit={(event) => submitLogin(event)}>
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
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit" name="login" className="inputStyle">
                  login
                </button>
                <p class="message">
                  Not registered?{" "}
                  <a class="message" onClick={update_form_btn}>
                    register
                  </a>
                </p>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
