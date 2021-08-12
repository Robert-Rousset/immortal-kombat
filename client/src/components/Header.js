function Header({ currentPage, handlePageChange }) {
  function resetGame() {
    window.go("game", 0);
    let highscoreBox = document.querySelector(".scoreboard-container");
    highscoreBox.setAttribute("class", "score-hidden");
  }
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

      <div className="scoreboard-container">
        <h2 className="game-over">GAME OVER</h2>

        <h5>Score:</h5>
        <h3 className="score">0</h3>
        <button className="button">Submit Highscore</button>

        <button className="button" onClick={resetGame}>
          Play Again
        </button>
      </div>
    </>
  );
}

export default Header;
