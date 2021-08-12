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

function score(score) {
  let highscoreBox = document.querySelector(".score-hidden");
  highscoreBox.setAttribute("class", "scoreboard-container");
  let highscore = document.querySelector(".score");
  highscore.innerHTML = score;
}

globalThis.resolveGameStats = resolveGameStats();
