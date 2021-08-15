export default function Scoreboard({ scores }) {
  if (!scores.length) {
    return <h3 className="scoreboard">No High Scores Yet</h3>;
  }

  return (
    <div className="scoreboard">
      <h3>High Scores</h3>
      <div className="score-definitions">
        <p>NAME </p> <p>SCORE </p>
      </div>
      <ol>
        {scores.map((score) => (
          <li key={score._id} className="scores">
            <h5 className="score-details">{score.name}</h5>
            <h5 className="actual-score"> {score.score}</h5>
          </li>
        ))}
      </ol>
    </div>
  );
}
