class GameStats {
  constructor(damage = 1, hitpoints = 100, attackspeed = 1) {
    this.damage = damage;
    this.hitpoints = hitpoints;
    this.attackspeed = attackspeed;
  }
}

function resolveGameStats() {
  if (globalThis.gameStats === undefined) {
    globalThis.gameStats = new GameStats();
    return globalThis.gameStats;
  } else {
    return globalThis.gameStats;
  }
}

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
  damageStat.innerHTML = ` ${attackDamage}`;
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

globalThis.resolveGameStats = resolveGameStats();
