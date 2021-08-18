const k = kaboom({
  global: true,
  fullscreen: true,
  debug: true,
  scale: 1,
  crisp: true,
  clearColor: [0, 0, 0, 1],
});
add([
  text("Login or Signup! Then press Space to begin!"),
  pos(width() / 2, height() / 2 - 300),
  origin("center"),
]);
add([
  text("Move: w,a,s,d \n\n Dash: Space \n\n Bomb: Shift\n\n Fire: Mouse"),
  pos(width() / 2, height() - 200),
  origin("center"),
]);
loadSprite("background", "./img/battleground.jpg");

//
// LOAD WARRIOR SPRITE IN 4 DIRECTIONS
loadSprite("warriorDown", "./img/sprites/warrior-dude/walking-down.png", {
  sliceX: 4,
  anims: {
    idle: {
      from: 0,
      to: 0,
    },
    walk: {
      from: 0,
      to: 3,
    },
  },
});
loadSprite("warriorUp", "./img/sprites/warrior-dude/walking-up.png", {
  sliceX: 4,
  anims: {
    idle: {
      from: 0,
      to: 0,
    },
    walk: {
      from: 0,
      to: 3,
    },
  },
});
loadSprite("warriorLeft", "./img/sprites/warrior-dude/walking-left.png", {
  sliceX: 4,
  anims: {
    idle: {
      from: 0,
      to: 0,
    },
    walk: {
      from: 0,
      to: 3,
    },
  },
});
loadSprite("warriorRight", "./img/sprites/warrior-dude/walking-right.png", {
  sliceX: 4,
  anims: {
    idle: {
      from: 0,
      to: 0,
    },
    walk: {
      from: 0,
      to: 3,
    },
  },
});
// WARRIORS ATTACK
loadSprite("attack", "./img/attack/attackanim.png", {
  sliceX: 4,
  sliceY: 2,
  anims: {
    attack: {
      from: 0,
      to: 7,
    },
  },
});
loadSprite("explosion", "./img/attack/explosionanim.png", {
  sliceX: 4,
  sliceY: 2,
  anims: {
    bomb: {
      from: 0,
      to: 7,
    },
  },
});
// WARRIORS HEALTH
loadSprite("health", "./img/health/heart.png", {
  sliceX: 4,
  anims: {
    pump: {
      from: 0,
      to: 3,
    },
  },
});
loadSprite("nohealth", "./img/health/noheart.png");
loadSprite("bomb", "./img/bomb/bomb.png", {
  sliceX: 5,

  anims: {
    bomba: {
      from: 0,
      to: 4,
    },
  },
});

//
//
//
//
//ENEMY SPRITES GOBLIN ARMY
loadSprite("goblin", "./img/sprites/enemy/goblin-army.png", {
  sliceX: 12,
  sliceY: 8,
  anims: {
    goblin1: {
      from: 0,
      to: 2,
    },
    goblin2: {
      from: 48,
      to: 50,
    },
    goblin3: {
      from: 57,
      to: 59,
    },
    goblin4: {
      from: 9,
      to: 11,
    },
    goblinright: {
      from: 6,
      to: 8,
    },
    goblinleft: {
      from: 51,
      to: 53,
    },
    goblinup: {
      from: 6,
      to: 8,
    },
    goblindown: {
      from: 51,
      to: 53,
    },
  },
});

//
//
//
//
//
//
//
loadSprite("splat", "./img/blood-splatter.png");
loadSprite("crater", "./img/crater.png");
let abilityPoints = 0;
let healthPoints = 0;
let damagePoints = 0;
let speedPoints = 0;
let rangePoints = 0;
let movementPoints = 0;
let bombPoints = 0;
let roundNumber = 1;

// WARRIOR STATS
let WARRIOR_HEALTH = 10;
let ATTACK_DAMAGE = 6;
let ATTACK_SPEED = 1;
let ATTACK_RANGE = 200;
let WARRIOR_SPEED = 160;
let DASH_DISTANCE = 4;
let DASH_COOLDOWN = 2.5;
let BOMB_COUNT = 1;
let MAX_BOMBS = 1;
let BOMB_RANGE = 0.7;
let BOMB_DURATION = 0.5;
let BOMB_STAT = 1;
function resetStats() {
  WARRIOR_HEALTH = 10;
  ATTACK_DAMAGE = 6;
  ATTACK_SPEED = 1;
  ATTACK_RANGE = 200;
  WARRIOR_SPEED = 160;
  DASH_DISTANCE = 4;
  DASH_COOLDOWN = 2.5;
  BOMB_COUNT = 1;
  MAX_BOMBS = 1;
  BOMB_RANGE = 0.7;
  BOMB_DURATION = 0.5;
  BOMB_STAT = 1;
  abilityPoints = 0;
  healthPoints = 0;
  damagePoints = 0;
  speedPoints = 0;
  rangePoints = 0;
  movementPoints = 0;
  bombPoints = 0;
  roundNumber = 1;
  GOBLIN_SPEED = 170;
  GOBLIN_HEALTH = 3;
  GOBLIN_DAMAGE = 0.2;
  SPAWN_RATE = 0.5;
  GOBLIN_REACTION = 0.2;
  enemyCount = 19;
  scoreNumber = 0;
  renderAbilities(healthPoints, "he");
  renderAbilities(damagePoints, "d");
  renderAbilities(speedPoints, "as");
  renderAbilities(rangePoints, "ar");
  renderAbilities(movementPoints, "m");
  renderAbilities(bombPoints, "da");
}

//HEALTH INCREASES
function increaseHealth() {
  if (WARRIOR_HEALTH >= 130 || abilityPoints >= 3) {
    return;
  } else {
    let healthStat = document.querySelector("#health");
    WARRIOR_HEALTH = WARRIOR_HEALTH + 10;
    healthStat.innerHTML = ` ${WARRIOR_HEALTH}`;
    abilityPoints++;
    healthPoints++;
    console.log(healthPoints);
    renderAbilities(healthPoints, "he");
    renderAbilityPoints(abilityPoints);
  }
}
function decreaseHealth() {
  if (WARRIOR_HEALTH <= 10 || abilityPoints <= 0) {
    return;
  } else {
    let healthStat = document.querySelector("#health");
    WARRIOR_HEALTH = WARRIOR_HEALTH - 10;
    healthStat.innerHTML = ` ${WARRIOR_HEALTH}`;
    abilityPoints--;
    healthPoints--;
    renderAbilities(healthPoints, "he");
    renderAbilityPoints(abilityPoints);
  }
}

//DAMAGE INCREASES
function increaseDamage() {
  if (ATTACK_DAMAGE >= 100000 || abilityPoints >= 3) {
    return;
  } else {
    let damageStat = document.querySelector("#attack-damage");
    ATTACK_DAMAGE = ATTACK_DAMAGE * 1.15;
    damageStat.innerHTML = ` ${Math.round(ATTACK_DAMAGE * 10) / 10}`;
    abilityPoints++;
    damagePoints++;
    renderAbilities(damagePoints, "d");
    renderAbilityPoints(abilityPoints);
  }
}
function decreaseDamage() {
  if (ATTACK_DAMAGE <= 5 || abilityPoints <= 0) {
    return;
  } else {
    let damageStat = document.querySelector("#attack-damage");
    ATTACK_DAMAGE = ATTACK_DAMAGE / 1.15;
    damageStat.innerHTML = ` ${Math.round(ATTACK_DAMAGE * 10) / 10}`;
    abilityPoints--;
    damagePoints--;
    renderAbilities(damagePoints, "d");
    renderAbilityPoints(abilityPoints);
  }
}

//ATTACK SPEED INCREASES
function increaseAttackSpeed() {
  if (ATTACK_SPEED <= 0.17 || abilityPoints >= 3) {
    return;
  } else {
    let attackSpeedStat = document.querySelector("#attack-speed");
    ATTACK_SPEED = ATTACK_SPEED - 0.07;
    attackSpeedStat.innerHTML = ` ${Math.round(ATTACK_SPEED * 100) / 100}`;
    abilityPoints++;
    speedPoints++;
    renderAbilities(speedPoints, "as");
    renderAbilityPoints(abilityPoints);
  }
}
function decreaseAttackSpeed() {
  if (ATTACK_SPEED >= 1 || abilityPoints <= 0) {
    return;
  } else {
    let attackSpeedStat = document.querySelector("#attack-speed");
    ATTACK_SPEED = ATTACK_SPEED + 0.07;
    attackSpeedStat.innerHTML = ` ${Math.round(ATTACK_SPEED * 100) / 100}`;
    abilityPoints--;
    speedPoints--;
    renderAbilities(speedPoints, "as");
    renderAbilityPoints(abilityPoints);
  }
}

//ATTACK RANGE INCREASES
function increaseAttackRange() {
  if (ATTACK_RANGE >= 2500 || abilityPoints >= 3) {
    return;
  } else {
    let attackRangeStat = document.querySelector("#attack-range");
    ATTACK_RANGE = ATTACK_RANGE * 1.25;
    attackRangeStat.innerHTML = ` ${Math.round(ATTACK_RANGE * 10) / 10}`;
    abilityPoints++;
    rangePoints++;
    renderAbilities(rangePoints, "ar");
    renderAbilityPoints(abilityPoints);
  }
}
function decreaseAttackRange() {
  if (ATTACK_RANGE <= 200 || abilityPoints <= 0) {
    return;
  } else {
    let attackRangeStat = document.querySelector("#attack-range");
    ATTACK_RANGE = ATTACK_RANGE / 1.25;
    attackRangeStat.innerHTML = ` ${Math.round(ATTACK_RANGE * 10) / 10}`;
    abilityPoints--;
    rangePoints--;
    renderAbilities(rangePoints, "ar");
    renderAbilityPoints(abilityPoints);
  }
}

// INCREASE WARRIOR SPEED
function increaseWarriorSpeed() {
  if (WARRIOR_SPEED >= 440 || abilityPoints >= 3) {
    return;
  } else {
    let movementSpeedStat = document.querySelector("#movement-speed");
    WARRIOR_SPEED = WARRIOR_SPEED + 20;
    movementSpeedStat.innerHTML = ` ${WARRIOR_SPEED}`;
    DASH_DISTANCE = DASH_DISTANCE + 0.05;
    DASH_COOLDOWN = DASH_COOLDOWN - 0.2;
    abilityPoints++;
    movementPoints++;
    renderAbilities(movementPoints, "m");
    renderAbilityPoints(abilityPoints);
  }
}
function decreaseWarriorSpeed() {
  if (WARRIOR_SPEED <= 160 || abilityPoints <= 0) {
    return;
  } else {
    let movementSpeedStat = document.querySelector("#movement-speed");
    WARRIOR_SPEED = WARRIOR_SPEED - 20;
    movementSpeedStat.innerHTML = ` ${WARRIOR_SPEED}`;
    DASH_DISTANCE = DASH_DISTANCE - 0.05;
    DASH_COOLDOWN = DASH_COOLDOWN + 0.2;
    abilityPoints--;
    movementPoints--;
    renderAbilities(movementPoints, "m");
    renderAbilityPoints(abilityPoints);
  }
}

//INCREASE DASH DISTANCE
// function increaseDashDistance() {
//   if (DASH_DISTANCE >= 20 || abilityPoints >= 3) {
//     return;
//   } else {
//     let dashStat = document.querySelector("#dash");
//     DASH_DISTANCE = DASH_DISTANCE + 0.05;
//     DASH_COOLDOWN = DASH_COOLDOWN - 0.2;
//     dashStat.innerHTML = `${Math.round(DASH_DISTANCE * 10) / 10}`;

//   }
// }
// function decreaseDashDistance() {
//   if (DASH_DISTANCE <= 4 || abilityPoints <= 0) {
//     return;
//   } else {
//     let dashStat = document.querySelector("#dash");
//     DASH_DISTANCE = DASH_DISTANCE - 0.05;
//     DASH_COOLDOWN = DASH_COOLDOWN + 0.2;
//     dashStat.innerHTML = `${Math.round(DASH_DISTANCE * 10) / 10}`;

//   }
// }

function increaseBomb() {
  if (BOMB_STAT >= 13 || abilityPoints >= 3) {
    return;
  } else {
    let bombStat = document.querySelector("#bomb");
    MAX_BOMBS = MAX_BOMBS * 1.15;
    BOMB_RANGE = BOMB_RANGE * 1.15;
    BOMB_DURATION = BOMB_DURATION + 0.06;
    BOMB_STAT = BOMB_STAT + 1;
    bombStat.innerHTML = `${BOMB_STAT}`;
    abilityPoints++;
    bombPoints++;
    renderAbilities(bombPoints, "da");
    renderAbilityPoints(abilityPoints);
  }
}
function decreaseBomb() {
  if (BOMB_STAT <= 1 || abilityPoints <= 0) {
    return;
  }
  let bombStat = document.querySelector("#bomb");
  MAX_BOMBS = MAX_BOMBS / 1.15;
  BOMB_RANGE = BOMB_RANGE / 1.15;
  BOMB_DURATION = BOMB_DURATION - 0.06;
  BOMB_STAT = BOMB_STAT - 1;
  bombStat.innerHTML = `${BOMB_STAT}`;

  abilityPoints--;
  bombPoints--;
  renderAbilities(bombPoints, "da");
  renderAbilityPoints(abilityPoints);
}

//
//
//
//ENEMY STATS
let GOBLIN_SPEED = 170;
let GOBLIN_HEALTH = 3;
let GOBLIN_DAMAGE = 0.2;
let SPAWN_RATE = 0.5;
let GOBLIN_REACTION = 0.2;

// let BIGGER_GOBLIN_SPEED = 100;
// let BIGGER_GOBLIN_HEALTH = 5;
// let BIGGER_GOBLIN_DAMAGE = 1;
// let BIGGER_GOBLIN_SPAWN_RATE = 1;
// let BIGGER_GOBLIN_REACTION = 2;

//
//
//
// GENERAL

let enemyCount = 19;

function increaseEnemies() {
  enemyCount = Math.round(enemyCount * 1.05);
  roundNumber++;
}

scene("game", (scoreNumber) => {
  GOBLIN_SPEED = GOBLIN_SPEED + 14;
  GOBLIN_HEALTH = GOBLIN_HEALTH * 1.45;
  GOBLIN_DAMAGE = GOBLIN_DAMAGE + 0.8;
  SPAWN_RATE = SPAWN_RATE - 0.007;
  // BIGGER_GOBLIN_SPEED = BIGGER_GOBLIN_SPEED + 6;
  // BIGGER_GOBLIN_HEALTH = BIGGER_GOBLIN_HEALTH * 1.4;
  // BIGGER_GOBLIN_DAMAGE = BIGGER_GOBLIN_DAMAGE + 1;
  // BIGGER_GOBLIN_SPAWN_RATE = BIGGER_GOBLIN_SPAWN_RATE - 0.005;
  let movementAllowed = true;
  abilityPoints = 0;
  renderAbilityPoints(abilityPoints);

  let killCount = -1;
  let totalEnemies = 1;
  //SETUP
  origin("center");
  layers([("background", "obj", "ui"), "obj"]);

  const scoretext = add([
    text("kills"),
    pos(50, 60),
    layer("ui"),
    scale(1),
    origin("center"),
  ]);

  const score = add([
    text(scoreNumber),
    pos(150, 60),
    layer("ui"),
    scale(3),
    origin("center"),
  ]);

  const background = add([
    sprite("background"),
    pos(width() / 2, height() / 2),
    scale(2),
    origin("center"),
    layer("background"),
  ]);
  const warrior = add([
    sprite("warriorDown"),
    area(vec2(6), vec2(24)),
    pos(width() / 2 - 20, height() / 2 - 20),
    scale(0.15),
    color(rgba(1, 1, 1, 1)),
    layer("obj"),
    {
      health: WARRIOR_HEALTH,
      damage: ATTACK_DAMAGE,
    },
  ]);

  const health = add([
    sprite("health", { animSpeed: 0.2, frame: 0 }),
    pos(width() - 320, 30),
    scale(0.2),
    "health",
  ]);
  const bombSprite = add([
    sprite("bomb", { animSpeed: 0.1, frame: 0 }),
    pos(width() - 530, 5),
    layer("ui"),
    scale(0.3),
  ]);
  bombSprite.play("bomba");
  health.play("pump");
  const healthnum = add([
    text(warrior.health),
    pos(width() - 250, 45),
    layer("ui"),
    scale(3),
  ]);
  if (MAX_BOMBS > BOMB_COUNT) {
    BOMB_COUNT++;
    if (BOMB_STAT < 5) {
      let extraBomb = add([
        text("+1 bomb!"),
        pos(width() - 580, 100),
        scale(2),
      ]);
      wait(2, () => {
        destroy(extraBomb);
      });
    }
    if (BOMB_STAT >= 5) {
      BOMB_COUNT++;
      let extraBomb = add([
        text("+2 bombs!"),
        pos(width() - 580, 100),
        scale(2),
      ]);
      wait(2, () => {
        destroy(extraBomb);
      });
    }
  }
  const slash = add([
    text("/" + Math.ceil(MAX_BOMBS)),
    pos(width() - 400, 60),
    layer("ui"),
    scale(1.5),
  ]);
  const bombnum = add([
    text(BOMB_COUNT),
    pos(width() - 450, 45),
    layer("ui"),
    scale(3),
  ]);

  const controlls = add([
    text("Move: w,a,s,d \n\n Dash: Space \n\n Bomb: Shift\n\n Fire: Mouse"),
    pos(width() / 2, height() / 2 + 200),
    origin("center"),
  ]);
  wait(0.5, () => {
    const round = add([
      text(`Round ${roundNumber}`),
      pos(width() / 2, height() / 2 - 100),
      scale(2),
      origin("center"),
      layer("ui"),
    ]);
    wait(1.5, () => {
      destroy(round);
      const fight = add([
        text(`FIGHT`),
        pos(width() / 2, height() / 2 - 100),
        scale(2),
        origin("center"),
        layer("ui"),
      ]);
      wait(1, () => {
        destroy(fight);
        destroy(controlls);

        // EXTRA UI I MAY USE LATER//
        //
        // const damagenum = add([
        //   text(ATTACK_DAMAGE),
        //   pos(width() - 250, 95),
        //   layer("ui"),
        //   scale(3),
        // ]);
        // const attackspeednum = add([
        //   text(ATTACK_SPEED),
        //   pos(width() - 250, 145),
        //   layer("ui"),
        //   scale(3),
        // ]);
        // const attackrangenum = add([
        //   text(ATTACK_RANGE),
        //   pos(width() - 250, 195),
        //   layer("ui"),
        //   scale(3),
        // ]);
        // const movementspeednum = add([
        //   text(WARRIOR_SPEED),
        //   pos(width() - 250, 245),
        //   layer("ui"),
        //   scale(3),
        // ]);
        // const dashnum = add([
        //   text(DASH_DISTANCE),
        //   pos(width() - 250, 295),
        //   layer("ui"),
        //   scale(3),
        // ]);

        //PLAYER ACTIONS//

        // LEFT MOVEMENT

        if (movementAllowed === true) {
          keyPress("a", () => {
            warrior.changeSprite("warriorLeft", { animSpeed: 0.1, frame: 0 });
            warrior.play("walk");
          });
          if (movementAllowed) {
            keyDown("a", () => {
              warrior.move(-WARRIOR_SPEED, 0);
            });
          }
          // keyRelease("a", () => {
          //   warrior.play("idle");
          //   warrior.move(0, 0);
          // });

          // DOWN MOVEMENT

          keyPress("s", () => {
            warrior.changeSprite("warriorDown", { animSpeed: 0.1, frame: 0 });
            warrior.play("walk");
          });
          if (movementAllowed) {
            keyDown("s", () => {
              warrior.move(0, WARRIOR_SPEED);
            });
          }
          // keyRelease("s", () => {
          //   warrior.play("idle");
          //   warrior.move(0, 0);
          // });

          // RIGHT MOVEMENT
          keyPress("d", () => {
            warrior.changeSprite("warriorRight", {
              animSpeed: 0.1,
              frame: 0,
            });
            warrior.play("walk");
          });
          if (movementAllowed) {
            keyDown("d", () => {
              warrior.move(WARRIOR_SPEED, 0);
            });
          }
          // keyRelease("d", () => {
          //   warrior.play("idle");
          //   warrior.move(0, 0);
          // });

          // UP MOVEMENT
          keyPress("w", () => {
            warrior.changeSprite("warriorUp", { animSpeed: 0.1, frame: 0 });
            warrior.play("walk");
          });
          if (movementAllowed) {
            keyDown("w", () => {
              warrior.move(0, -WARRIOR_SPEED);
            });
          }
          // keyRelease("w", () => {
          //   warrior.play("idle");
          //   warrior.move(0, 0);
          // });
        } else {
          return;
        }

        keyPress("shift", () => {
          if (BOMB_COUNT > 0) {
            const bomb = add([
              sprite("explosion", { animSpeed: 0.1, frame: 0 }),
              pos(warrior.pos.x + 50, warrior.pos.y + 100),
              scale(BOMB_RANGE),
              layer("obj"),
              origin("center"),
              "bomb",
            ]);
            bomb.play("bomb");
            camShake(12);
            wait(BOMB_DURATION, () => {
              destroy(bomb);
            });

            BOMB_COUNT--;
            bombnum.text = BOMB_COUNT;
          }
        });

        //
        //
        //
        //
        //WARRIOR DASH

        let dashIsNotCooldown = true;
        keyPress("space", () => {
          if (dashIsNotCooldown) {
            WARRIOR_SPEED = WARRIOR_SPEED * DASH_DISTANCE;
            dashIsNotCooldown = false;
            wait(0.07, () => {
              WARRIOR_SPEED = WARRIOR_SPEED / DASH_DISTANCE;
              resetDashCooldown();
            });
          }
        });
        function resetDashCooldown() {
          if (dashIsNotCooldown) {
            wait(DASH_COOLDOWN, () => {
              dashIsNotCooldown = true;
            });
          }
          if (dashIsNotCooldown === false) {
            wait(DASH_COOLDOWN, () => {
              dashIsNotCooldown = true;
            });
          }
        }

        //
        //
        //
        //
        //WARRIOR ATTACK
        let attackIsNotCooldown = true;
        warrior.on("update", () => {
          if (killCount >= enemyCount) {
            add([
              text("ROUND COMPLETE!"),
              pos(width() / 2, height() / 2),
              origin("center"),
            ]);
            let scoreNum = score.text;
            movementAllowed = false;
            wait(2, () => {
              endRound(
                WARRIOR_HEALTH,
                ATTACK_DAMAGE,
                ATTACK_SPEED,
                ATTACK_RANGE,
                WARRIOR_SPEED,
                BOMB_STAT,
                scoreNum,
                roundNumber
              );
              go("pauseGame");
            });
          }
          const warriorLocation = warrior.pos.add(-20, 0);
          const mpos = mousePos();
          if (attackIsNotCooldown) {
            const attack = add([
              sprite("attack", { animSpeed: 0.05, frame: 0 }),
              pos(warrior.pos.add(-25, -20)),
              scale(0.3),
              layer("obj"),
              "attack",
              {
                dir: mpos.sub(warriorLocation).unit(),
              },
            ]);
            attackIsNotCooldown = false;
            attack.play("attack");
            wait(0.4, () => {
              destroy(attack);
            });
            resetAttackCooldown();
          }
        });

        function resetAttackCooldown() {
          if (attackIsNotCooldown) {
            wait(ATTACK_SPEED, () => {
              attackIsNotCooldown = true;
            });
          }
          if (attackIsNotCooldown === false) {
            wait(ATTACK_SPEED, () => {
              attackIsNotCooldown = true;
            });
          }
        }

        action("attack", (s) => {
          s.move(s.dir.scale(ATTACK_RANGE));
        });

        overlaps("goblin", "bomb", (goblin) => {
          const hitMarker = add([
            text(Math.round(rand(1000, 1500))),
            pos(goblin.pos.x + 20, goblin.pos.y + 20),
          ]);
          hitMarker.on("update", () => {
            hitMarker.move(rand(-250, 250), rand(-250, 250));
            hitMarker.color = rand(rgb(2, 1, 0), rgb(1, 0, 0));
          });
          wait(1, () => {
            destroy(hitMarker);
          });

          camShake(10);
          score.text++;
          destroy(goblin);
          add([
            sprite("splat"),
            pos(goblin.pos.x - 10, goblin.pos.y + 10),
            scale(0.05),
            color(1, 1, 1, 0.5),
            layer("background"),
          ]);
          add([
            sprite("crater"),
            pos(goblin.pos.x - 10, goblin.pos.y + 10),
            scale(0.05),
            color(1, 1, 1, 0.5),
            layer("background"),
          ]);
          killCount++;
        });

        //ATTACK HITS GOBLIN
        overlaps("goblin", "attack", (goblin) => {
          goblin.health = goblin.health - warrior.damage;
          const hitMarker = add([
            text(Math.round(warrior.damage)),
            pos(goblin.pos.x + 20, goblin.pos.y + 20),
          ]);
          hitMarker.on("update", () => {
            hitMarker.move(rand(-30, 30), rand(-10, -40));
          });

          goblin.color = { r: 1, g: 0, b: 0, a: 1 };
          wait(1, () => {
            goblin.color = { r: 1, g: 1, b: 1, a: 1 };
            destroy(hitMarker);
          });
          if (goblin.health <= 0) {
            camShake(2);
            score.text++;
            destroy(goblin);
            add([
              sprite("splat"),
              pos(goblin.pos.x - 10, goblin.pos.y + 10),
              scale(0.05),
              color(1, 1, 1, 0.5),
              layer("background"),
            ]);
            killCount++;
          }
        });
        // overlaps("biggerGoblin", "bomb", (goblin) => {
        //   goblin.health = goblin.health - rand(1000, 1500);
        //   const hitMarker = add([
        //     text(Math.round(rand(1000, 1500))),
        //     pos(goblin.pos.x + 20, goblin.pos.y + 20),
        //   ]);
        //   hitMarker.on("update", () => {
        //     hitMarker.move(50, 50);
        //   });
        //   wait(1, () => {
        //     destroy(hitMarker);
        //   });
        //   if (goblin.health <= 0) {
        //     camShake(12);
        //     score.text++;
        //     destroy(goblin);
        //     add([
        //       sprite("splat"),
        //       pos(goblin.pos.x - 10, goblin.pos.y + 10),
        //       scale(0.05),
        //       color(1, 1, 1, 0.5),
        //       layer("background"),
        //     ]);
        //     add([
        //       sprite("crater"),
        //       pos(goblin.pos.x - 10, goblin.pos.y + 10),
        //       scale(0.05),
        //       color(1, 1, 1, 0.5),
        //       layer("background"),
        //     ]);
        //     killCount++;
        //   }
        // });

        // //ATTACK HITS GOBLIN
        // overlaps("biggerGoblin", "attack", (goblin) => {
        //   goblin.health = goblin.health - warrior.damage;
        //   const hitMarker = add([
        //     text(Math.round(warrior.damage)),
        //     pos(goblin.pos.x + 20, goblin.pos.y + 20),
        //   ]);
        //   hitMarker.on("update", () => {
        //     hitMarker.move(-10, -10);
        //   });

        //   goblin.color = { r: 1, g: 0, b: 0, a: 1 };
        //   wait(1, () => {
        //     goblin.color = { r: 1, g: 1, b: 1, a: 1 };
        //     destroy(hitMarker);
        //   });
        //   if (goblin.health <= 0) {
        //     camShake(10);
        //     score.text++;
        //     destroy(goblin);
        //     add([
        //       sprite("splat"),
        //       pos(goblin.pos.x - 10, goblin.pos.y + 10),
        //       scale(0.05),
        //       color(1, 1, 1, 0.5),
        //       layer("background"),
        //     ]);
        //     killCount++;
        //   }
        // });
        //
        //
        //
        //
        //WARRIOR HEALTH
        hitanim = 0.3;
        warrior.overlaps("goblin", () => {
          warrior.health = warrior.health - GOBLIN_DAMAGE;
          warrior.color = { r: 1, g: 0, b: 0, a: 1 };
          wait(hitanim, () => {
            warrior.color = { r: 1, g: 1, b: 1, a: 0.8 };
            wait(hitanim, () => {
              warrior.color = { r: 1, g: 0, b: 0, a: 1 };
              wait(hitanim, () => {
                warrior.color = { r: 1, g: 1, b: 1, a: 0.8 };
                wait(hitanim, () => {
                  warrior.color = { r: 1, g: 0, b: 0, a: 1 };
                  wait(hitanim, () => {
                    warrior.color = { r: 1, g: 1, b: 1, a: 0.8 };
                    wait(hitanim, () => {
                      warrior.color = { r: 1, g: 0, b: 0, a: 1 };
                      wait(hitanim, () => {
                        warrior.color = { r: 1, g: 1, b: 1, a: 0.8 };
                        wait(hitanim, () => {
                          warrior.color = { r: 1, g: 0, b: 0, a: 1 };
                          wait(hitanim, () => {
                            warrior.color = { r: 1, g: 1, b: 1, a: 1 };
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });

          healthnum.text = Math.round(warrior.health * 10) / 10;
          if (healthnum.text <= 0) {
            destroy(warrior);
            window.score(score.text);
          }
        });

        //
        //
        //
        //
        //ENEMY ACTIONS

        function spawnGoblin() {
          let goblinSpawn = Math.round(rand(0, 3));
          //GOBLIN SPAWN FAR LEFT
          if (goblinSpawn === 0) {
            const goblin1 = add([
              sprite("goblin", { animSpeed: 0.5, frame: 0 }),
              pos(-100, rand(-100, height())),
              scale(rand(0.4, 0.6)),
              color(1, 1, 1, 1),
              layer("obj"),
              "goblin",
              {
                health: GOBLIN_HEALTH,
              },
            ]);
            goblin1.play("goblin1");
          }

          //GOBLIN SPAWN FAR RIGHT
          if (goblinSpawn === 1) {
            const goblin2 = add([
              sprite("goblin", { animSpeed: 0.5, frame: 0 }),
              pos(width(), rand(-100, height())),
              scale(rand(0.4, 0.6)),
              color(1, 1, 1, 1),
              layer("obj"),
              "goblin",
              {
                health: GOBLIN_HEALTH,
              },
            ]);
            goblin2.play("goblin2");
          }

          //GOBLIN SPAWN TOP
          if (goblinSpawn === 2) {
            const goblin3 = add([
              sprite("goblin", { animSpeed: 0.5, frame: 0 }),
              pos(rand(-100, width()), -100),
              scale(rand(0.4, 0.6)),
              color(1, 1, 1, 1),
              layer("obj"),
              "goblin",
              {
                health: GOBLIN_HEALTH,
              },
            ]);
            goblin3.play("goblin3");
          }

          //GOBLIN SPAWN BOTTOM

          if (goblinSpawn === 3) {
            const goblin4 = add([
              sprite("goblin", { animSpeed: 0.5, frame: 0 }),
              pos(rand(-100, width()), height()),
              scale(rand(0.4, 0.6)),
              color(1, 1, 1, 1),
              layer("obj"),
              "goblin",
              {
                health: GOBLIN_HEALTH,
              },
            ]);
            goblin4.play("goblin4");
          }
          if (enemyCount >= totalEnemies)
            wait(SPAWN_RATE, () => {
              totalEnemies++;
              spawnGoblin();
            });
        }

        action("goblin", (goblin) => {
          if (warrior.pos.x < goblin.pos.x && warrior.pos.y < goblin.pos.y) {
            wait(GOBLIN_REACTION, () => {
              goblin.move(
                rand(-GOBLIN_SPEED, -GOBLIN_SPEED / 10),
                rand(-GOBLIN_SPEED / 10, -GOBLIN_SPEED)
              );
            });
          }
          if (warrior.pos.x > goblin.pos.x && warrior.pos.y > goblin.pos.y) {
            wait(GOBLIN_REACTION, () => {
              goblin.move(
                rand(GOBLIN_SPEED, GOBLIN_SPEED / 10),
                rand(GOBLIN_SPEED / 10, GOBLIN_SPEED)
              );
            });
          }
          if (warrior.pos.y > goblin.pos.y && warrior.pos.x < goblin.pos.x) {
            wait(GOBLIN_REACTION, () => {
              goblin.move(
                rand(-GOBLIN_SPEED, -GOBLIN_SPEED / 10),
                rand(GOBLIN_SPEED / 10, GOBLIN_SPEED)
              );
            });
          }
          if (warrior.pos.y < goblin.pos.y && warrior.pos.x > goblin.pos.x) {
            wait(GOBLIN_REACTION, () => {
              goblin.move(
                rand(GOBLIN_SPEED, GOBLIN_SPEED / 10),
                rand(-GOBLIN_SPEED / 10, -GOBLIN_SPEED)
              );
            });
          }
        });

        // console.log(roundNumber);
        // function spawnBiggerGoblin() {
        //   // if (roundNumber % 2 === 0) {
        //   let goblinSpawn = Math.round(rand(0, 3));

        //   //GOBLIN SPAWN FAR LEFT
        //   if (goblinSpawn === 0) {
        //     const goblinright = add([
        //       sprite("goblin", { animSpeed: 0.5, frame: 0 }),
        //       pos(-100, rand(-100, height())),
        //       scale(rand(0.8, 1.2)),
        //       color(1, 1, 1, 1),
        //       layer("obj"),
        //       "biggerGoblin",
        //       {
        //         facing: "right",
        //         health: BIGGER_GOBLIN_HEALTH,
        //       },
        //     ]);
        //     goblinright.play("goblinright");
        //   }

        //   //GOBLIN SPAWN FAR RIGHT
        //   if (goblinSpawn === 1) {
        //     const goblinleft = add([
        //       sprite("goblin", { animSpeed: 0.5, frame: 0 }),
        //       pos(width(), rand(-100, height())),
        //       scale(rand(0.8, 1.2)),
        //       color(1, 1, 1, 1),
        //       layer("obj"),
        //       "biggerGoblin",
        //       {
        //         facing: "left",
        //         health: BIGGER_GOBLIN_HEALTH,
        //       },
        //     ]);
        //     goblinleft.play("goblinleft");
        //   }

        //   //GOBLIN SPAWN TOP
        //   if (goblinSpawn === 2) {
        //     const goblindown = add([
        //       sprite("goblin", { animSpeed: 0.5, frame: 0 }),
        //       pos(rand(-100, width()), -100),
        //       scale(rand(0.8, 1.2)),
        //       color(1, 1, 1, 1),
        //       layer("obj"),
        //       "biggerGoblin",
        //       {
        //         facing: "down",
        //         health: BIGGER_GOBLIN_HEALTH,
        //       },
        //     ]);
        //     goblindown.play("goblindown");
        //   }

        //   //GOBLIN SPAWN BOTTOM

        //   if (goblinSpawn === 3) {
        //     const goblinup = add([
        //       sprite("goblin", { animSpeed: 0.5, frame: 0 }),
        //       pos(rand(-100, width()), height()),
        //       scale(rand(0.8, 1.2)),
        //       color(1, 1, 1, 1),
        //       layer("obj"),
        //       "biggerGoblin",
        //       {
        //         facing: "up",
        //         health: BIGGER_GOBLIN_HEALTH,
        //       },
        //     ]);
        //     goblinup.play("goblinup");
        //   }

        //   if (enemyCount >= totalEnemies)
        //     wait(BIGGER_GOBLIN_SPAWN_RATE, () => {
        //       spawnBiggerGoblin();
        //       totalEnemies++;
        //     });

        //   // }
        // }
        // action("biggerGoblin", (goblin) => {
        //   if (warrior.pos.x < goblin.pos.x && warrior.pos.y < goblin.pos.y) {
        //     wait(BIGGER_GOBLIN_REACTION, () => {
        //       goblin.move(
        //         rand(-BIGGER_GOBLIN_SPEED, -BIGGER_GOBLIN_SPEED / 10),
        //         rand(-BIGGER_GOBLIN_SPEED / 10, -BIGGER_GOBLIN_SPEED)
        //       );
        //     });
        //   }
        //   if (warrior.pos.x > goblin.pos.x && warrior.pos.y > goblin.pos.y) {
        //     wait(BIGGER_GOBLIN_REACTION, () => {
        //       goblin.move(
        //         rand(BIGGER_GOBLIN_SPEED, BIGGER_GOBLIN_SPEED / 10),
        //         rand(BIGGER_GOBLIN_SPEED / 10, BIGGER_GOBLIN_SPEED)
        //       );
        //     });
        //   }
        //   if (warrior.pos.y > goblin.pos.y && warrior.pos.x < goblin.pos.x) {
        //     wait(BIGGER_GOBLIN_REACTION, () => {
        //       goblin.move(
        //         rand(-BIGGER_GOBLIN_SPEED, -BIGGER_GOBLIN_SPEED / 10),
        //         rand(BIGGER_GOBLIN_SPEED / 10, BIGGER_GOBLIN_SPEED)
        //       );
        //     });
        //   }
        //   if (warrior.pos.y < goblin.pos.y && warrior.pos.x > goblin.pos.x) {
        //     wait(BIGGER_GOBLIN_REACTION, () => {
        //       goblin.move(
        //         rand(BIGGER_GOBLIN_SPEED, BIGGER_GOBLIN_SPEED / 10),
        //         rand(-BIGGER_GOBLIN_SPEED / 10, -BIGGER_GOBLIN_SPEED)
        //       );
        //     });
        //   }
        // });

        // spawnBiggerGoblin();
        spawnGoblin();
      });
    });
  });
});
scene("pauseGame", () => {
  const background = add([
    sprite("background"),
    pos(width() / 2, height() / 2),
    scale(2),
    origin("center"),
    layer("background"),
  ]);
});

keyPress("space", () => {
  go("game", 0);
});
