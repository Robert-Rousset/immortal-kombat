import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../utils/mutations";

export default function Profile() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [login] = useMutation(LOGIN_USER);
  const [addUser] = useMutation(ADD_USER);

  const [toggle, setToggle] = useState(false);
  const [submitButton, setSubmitButton] = useState("Login");
  const [loginOrSignup, setloginOrSignup] = useState(
    "Dont have an account yet?"
  );
  const [loginOrSignupButton, setloginOrSignupButton] = useState("Signup");
  const [userNameInput, setUserNameInput] = useState("hidden");
  const [loginError, setLoginError] = useState("hidden");
  const [signinError, setSigninError] = useState("hidden");

  useEffect(() => {
    setFormState({ name: "", email: "", password: "" });
    if (toggle) {
      setSubmitButton("Sign up");
      setloginOrSignup("Already got an accout?");
      setloginOrSignupButton("Login");
      setUserNameInput("login-input");
    }
    if (!toggle) {
      setSubmitButton("Login");
      setloginOrSignup("Dont have an account yet?");
      setloginOrSignupButton("Signup");
      setUserNameInput("hidden");
    }
  }, [toggle]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (submitButton === "Login") {
      try {
        const { data } = await login({
          variables: { ...formState },
        });

        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
        setLoginError("login-error");
        setTimeout(() => {
          setLoginError("hidden");
        }, 5000);
      }

      setFormState({
        name: "",
        email: "",
        password: "",
      });
    }
    if (submitButton === "Sign up") {
      try {
        const { data } = await addUser({
          variables: { ...formState },
        });

        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
        setSigninError("signin-error");
        setTimeout(() => {
          setSigninError("hidden");
        }, 5000);
      }
      setFormState({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  function logout() {
    Auth.logout();
  }
  return (
    <>
      <div className={Auth.loggedIn() ? "profile" : "hidden"}>
        <button className="button">Profile</button>
      </div>
      <div className={Auth.loggedIn() ? "hidden" : "login-container"}>
        <form onSubmit={handleFormSubmit}>
          <p className={loginError}>No users match those credentials</p>
          <p className={signinError}>Invalid username, email or password</p>
          <input
            placeholder="Name"
            name="name"
            type="name"
            value={formState.name}
            onChange={handleChange}
            className={userNameInput}
          ></input>

          <input
            placeholder="Email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            className="login-input"
          ></input>
          <input
            className="login-input"
            placeholder="Password"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          ></input>
          <button className="button login-button" type="submit">
            {submitButton}
          </button>
        </form>

        <p className="login-info">
          {loginOrSignup}{" "}
          <button
            className="signup"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {" "}
            {loginOrSignupButton}
          </button>
        </p>
      </div>
      <div className={Auth.loggedIn() ? "logout" : "hidden"}>
        <button className="button" onClick={logout}>
          Logout
        </button>
      </div>
    </>
  );
}
