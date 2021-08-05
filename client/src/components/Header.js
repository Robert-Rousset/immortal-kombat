import Auth from "../utils/auth";

function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <header
        className={typeof currentPage === "string" ? "shrink-header" : "header"}
      >
        <div className={Auth.loggedIn() ? "profile" : "hidden"}>
          <button className="button">Profile</button>
        </div>
        <h1 className={typeof currentPage === "string" ? "shrink-h1" : ""}>
          Immortal Kombat
        </h1>

        <a href="#PlayGame" onClick={() => handlePageChange("PlayGame")}>
          <button
            className="button"
            id={currentPage === "PlayGame" ? "active" : ""}
          >
            Enter The Battle
          </button>
        </a>
        <div className={Auth.loggedIn() ? "logout" : "hidden"}>
          <button className="button">Logout</button>
        </div>
      </header>
    </>
  );
}

export default Header;
