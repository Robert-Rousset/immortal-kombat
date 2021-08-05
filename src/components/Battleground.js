import { useState, useEffect } from "react";

export default function Battleground() {
  const [toggle, setToggle] = useState(false);

  const [submitButton, setSubmitButton] = useState("Login");
  const [loginOrSignup, setloginOrSignup] = useState(
    "Dont have an account yet?"
  );
  const [loginOrSignupButton, setloginOrSignupButton] = useState("Signup");

  useEffect(() => {
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

  return (
    <>
      <div className="login-container">
        <input placeholder="Email"></input>
        <input placeholder="Password" type="password"></input>
        <button className="button" id="login">
          {submitButton}
        </button>

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
