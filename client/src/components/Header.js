function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <header
        className={typeof currentPage === "string" ? "shrink-header" : "header"}
      >
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
      </header>
    </>
  );
}

export default Header;
