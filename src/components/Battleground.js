export default function Battleground() {
  function handleSingup() {}
  return (
    <>
      <div className="signin-container">
        <input placeholder="Email"></input>
        <input placeholder="Password" type="password"></input>
        <button className="button" id="signin">
          Login
        </button>

        <p>
          Dont have an account yet?{" "}
          <button className="signup" onClick={handleSingup}>
            {" "}
            Sign up
          </button>
        </p>
      </div>

      <div id="battleground"></div>
    </>
  );
}
