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

function submitHighscore(score) {
  return score;
}

function gameHasEnded(dead) {
  return dead;
}

globalThis.resolveGameStats = resolveGameStats();
globalThis.submitHighscore = submitHighscore(score);
globalThis.gameHasEnded = gameHasEnded(dead);
