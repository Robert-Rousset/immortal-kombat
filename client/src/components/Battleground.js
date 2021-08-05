import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../utils/mutations";

export default function Battleground() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login] = useMutation(LOGIN_USER);
  const [addUser] = useMutation(ADD_USER);

  const [toggle, setToggle] = useState(false);
  const [submitButton, setSubmitButton] = useState("Login");
  const [loginOrSignup, setloginOrSignup] = useState(
    "Dont have an account yet?"
  );
  const [loginOrSignupButton, setloginOrSignupButton] = useState("Signup");

  useEffect(() => {
    setFormState({ email: "", password: "" });
    if (toggle) {
      setSubmitButton("Sign up");
      setloginOrSignup("Already got an accout?");
      setloginOrSignupButton("Login");
    }
    if (!toggle) {
      setSubmitButton("Login");
      setloginOrSignup("Dont have an account yet?");
      setloginOrSignupButton("Signup");
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
    console.log(submitButton);

    if (submitButton === "Login") {
      try {
        const { data } = await login({
          variables: { ...formState },
        });

        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }

      setFormState({
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
      }
      setFormState({
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <div className={Auth.loggedIn() ? "hidden" : "login-container"}>
        <form onSubmit={handleFormSubmit}>
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          ></input>
          <input
            placeholder="Password"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          ></input>
          <button className="button" type="submit">
            {submitButton}
          </button>
        </form>

        <p>
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

      <div id="battleground"></div>
    </>
  );
}
