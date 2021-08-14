function endRound(
  health,
  attackDamage,
  attackSpeed,
  attackRange,
  movementSpeed,
  dash,
  score,
  round
) {
  let healthStat = document.querySelector("#health");
  let damageStat = document.querySelector("#attack-damage");
  let attackSpeedStat = document.querySelector("#attack-speed");
  let attackRangeStat = document.querySelector("#attack-range");
  let movementSpeedStat = document.querySelector("#movement-speed");
  let dashStat = document.querySelector("#dash");
  let scoreStat = document.querySelector("#score");
  let roundStat = document.querySelector("#round");

  statsBox.setAttribute("class", "statflex");

  healthStat.innerHTML = ` ${health}`;
  damageStat.innerHTML = ` ${Math.round(attackDamage * 10) / 10}`;
  attackSpeedStat.innerHTML = ` ${Math.round(attackSpeed * 10) / 10}`;
  attackRangeStat.innerHTML = ` ${attackRange}`;
  movementSpeedStat.innerHTML = ` ${movementSpeed}`;
  dashStat.innerHTML = ` ${dash}`;
  scoreStat.innerHTML = ` ${score}`;
  roundStat.innerHTML = ` ${round}`;
}

function updateStats() {}

function score(score) {
  gameoverBox.setAttribute("class", "scoreboard-container");
  let highscore = document.querySelector(".score");
  highscore.innerHTML = score;
}
