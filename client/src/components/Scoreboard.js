export default function Scoreboard({ scores }) {
  if (!scores.length) {
    return <h3 className="scoreboard">No High Scores Yet</h3>;
  }

  return (
    <div className="scoreboard">
      <h3>High Scores</h3>
      <div className="score-definitions">
        <p>RANKING </p>
        <p>NAME </p> <p>SCORE </p>
      </div>
      {scores.map((score) => (
        <div key={score._id} className="scores">
          <h4 className="score-details">{score.name}</h4>
          <h4 className="actual-score"> {score.score}</h4>
        </div>
      ))}
    </div>
  );
}
