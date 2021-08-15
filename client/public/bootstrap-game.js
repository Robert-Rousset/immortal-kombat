function endRound(
  health,
  attackDamage,
  attackSpeed,
  attackRange,
  movementSpeed,
  bomb,
  score,
  round
) {
  let healthStat = document.querySelector("#health");
  let damageStat = document.querySelector("#attack-damage");
  let attackSpeedStat = document.querySelector("#attack-speed");
  let attackRangeStat = document.querySelector("#attack-range");
  let movementSpeedStat = document.querySelector("#movement-speed");
  let bombStat = document.querySelector("#bomb");
  let scoreStat = document.querySelector("#score");
  let roundStat = document.querySelector("#round");

  statsBox.setAttribute("class", "statflex");

  healthStat.innerHTML = ` ${health}`;
  damageStat.innerHTML = ` ${Math.round(attackDamage * 10) / 10}`;
  attackSpeedStat.innerHTML = ` ${Math.round(attackSpeed * 100) / 100}`;
  attackRangeStat.innerHTML = ` ${Math.round(attackRange * 10) / 10}`;
  movementSpeedStat.innerHTML = ` ${movementSpeed}`;
  bombStat.innerHTML = ` ${Math.round(bomb * 10) / 10}`;
  scoreStat.innerHTML = ` ${score}`;
  roundStat.innerHTML = ` ${round}`;
}

function score(score) {
  gameoverBox.setAttribute("class", "scoreboard-container");
  let highscore = document.querySelector(".score");
  highscore.innerHTML = score;
}
