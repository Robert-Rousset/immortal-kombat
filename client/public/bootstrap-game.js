function endRound(
  health,
  attackDamage,
  attackSpeed,
  attackRange,
  movementSpeed,
  dash
) {
  let statsBox = document.querySelector(".stats-hidden");

  let healthStat = document.querySelector("#health");
  let damageStat = document.querySelector("#attack-damage");
  let attackSpeedStat = document.querySelector("#attack-speed");
  let attackRangeStat = document.querySelector("#attack-range");
  let movementSpeedStat = document.querySelector("#movement-speed");
  let dashStat = document.querySelector("#dash");

  statsBox.setAttribute("class", "statflex");

  healthStat.innerHTML = ` ${health}`;
  damageStat.innerHTML = ` ${Math.round(attackDamage * 10) / 10}`;
  attackSpeedStat.innerHTML = ` ${Math.round(attackSpeed * 10) / 10}`;
  attackRangeStat.innerHTML = ` ${attackRange}`;
  movementSpeedStat.innerHTML = ` ${movementSpeed}`;
  dashStat.innerHTML = `${dash}`;
}

function updateStats() {}

function score(score) {
  let gameoverBox = document.querySelector(".score-hidden");
  gameoverBox.setAttribute("class", "scoreboard-container");
  let highscore = document.querySelector(".score");
  highscore.innerHTML = score;
}
