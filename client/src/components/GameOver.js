export default function GameOver() {
  function resetGame() {
    window.go("game", 0);
    let highscoreBox = document.querySelector(".scoreboard-container");
    highscoreBox.setAttribute("class", "score-hidden");
  }

  return (
    <div className="score-hidden">
      <h2 className="game-over">GAME OVER</h2>

      <h5>Score:</h5>
      <h3 className="score">0</h3>
      <button className="button">Submit Highscore</button>

      <button className="button" onClick={resetGame}>
        Play Again
      </button>
    </div>
  );
}
