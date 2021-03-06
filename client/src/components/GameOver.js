import { useMutation, useQuery } from "@apollo/client";
import { SUBMIT_SCORE } from "../utils/mutations";
import { QUERY_HIGHSCORES } from "../utils/queries";
import Scoreboard from "./Scoreboard";
import Auth from "../utils/auth";

export default function GameOver() {
  const [submitScore] = useMutation(SUBMIT_SCORE, {
    update(cache, { data: { submitScore } }) {
      try {
        const { scores } = cache.readQuery({ query: QUERY_HIGHSCORES });
        cache.writeQuery({
          query: QUERY_HIGHSCORES,
          data: { scores: [submitScore, ...scores] },
        });
      } catch (error) {
        console.error(error);
      }
    },
  });
  const { loading, data } = useQuery(QUERY_HIGHSCORES);
  const scores = data?.scores || [];

  async function submitScoreClick() {
    let submitScoreButton = document.querySelector(".submit-score");
    let playAgainButton = document.querySelector(".play-hidden");
    submitScoreButton.setAttribute("class", "submit-hidden");
    playAgainButton.setAttribute("class", "button play-again");
    let userScoreScore = document.querySelector(".score");
    let userScore = userScoreScore.innerHTML;
    try {
      await submitScore({
        variables: { name: Auth.getUser().data.name, score: userScore },
      });
    } catch (error) {
      console.error(error);
    }
  }
  function resetGame() {
    let hiddenSubmitScoreButton = document.querySelector(".submit-hidden");
    let newPlayAgainButton = document.querySelector(".play-again");
    let highscoreBox = document.querySelector(".scoreboard-container");

    hiddenSubmitScoreButton.setAttribute("class", "button submit-score");
    newPlayAgainButton.setAttribute("class", "play-hidden");

    highscoreBox.setAttribute("class", "score-hidden");
    window.resetStats();
    window.go("game", 0);
  }

  return (
    <div className="score-hidden">
      <h2 className="game-over">GAME OVER</h2>

      <h5>Score:</h5>
      <h3 className="score">0</h3>
      <button className="button submit-score" onClick={submitScoreClick}>
        Submit Score
      </button>
      <button className="button play-hidden" onClick={resetGame}>
        Play Again
      </button>

      {loading ? <div>Loading...</div> : <Scoreboard scores={scores} />}
    </div>
  );
}
