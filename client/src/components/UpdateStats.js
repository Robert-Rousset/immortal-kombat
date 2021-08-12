export default function UpdateStats() {
  return (
    <div className="stats-hidden">
      <h1>WARRIOR STATS</h1>
      <div>
        <h3>HEALTH:</h3>
      </div>
      <div>
        <h3>ATTACK DAMAGE:</h3>
      </div>
      <div>
        <h3>ATTACK SPEED:</h3>
      </div>
      <div>
        <h3>ATTACK RANGE:</h3>
      </div>
      <div>
        <h3>DASH:</h3>
      </div>
      <div className="button-box">
        {" "}
        <button class="button next-round">Next Round</button>
      </div>
    </div>
  );
}
