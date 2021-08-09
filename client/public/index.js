const k = kaboom({
  global: true,
  fullscreen: true,
  debug: true,
  scale: 1,
  crisp: true,
});
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
      from: 3,
      to: 5,
    },
    goblin3: {
      from: 6,
      to: 8,
    },
    goblin4: {
      from: 9,
      to: 11,
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

scene("game", (levelIndex) => {
  //SETUP
  origin("center");
  //
  //
  //
  // WARRIOR STATS
  let ATTACK_RANGE = 250;
  let ATTACK_SPEED = 0.5;
  let WARRIOR_SPEED = 250;
  let DASH = 4;
  let WARRIOR_HEALTH = 100;
  //
  //
  //
  //ENEMY STATS
  let GOBLIN_SPEED = 200;
  let GOBLIN_HEALTH = 1;
  let GOBLIN_DAMAGE = 1;
  let SPAWN_RATE = 0.5;

  let GOBLIN_REACTION = 0.2;

  //
  //
  //
  // GENERAL
  let healthpos = width() - 100;
  let enemyCount = 0;
  let totalEnemies = 20;
  //
  //
  //
  // LOADING IN UI/ WARRIOR SPRITE
  layers([("background", "obj", "ui"), "obj"]);
  const score = add([
    text("0"),
    pos(20, 20),
    layer("ui"),
    { value: "test" },
    scale(4),
  ]);
  const background = add([
    sprite("background"),
    pos(width() / 2, height() / 2),
    scale(2),
    origin("center"),
  ]);
  const warrior = add([
    sprite("warriorRight"),
    pos(width() / 2, height() / 2),
    scale(0.15),
    color(rgba(1, 1, 1, 1)),
    {
      health: WARRIOR_HEALTH,
    },
  ]);
  const health = add([
    sprite("health", { animSpeed: 0.2, frame: 0 }),
    pos(healthpos, 0),
    scale(0.2),
    "health",
  ]);
  health.play("pump");
  const healthnum = add([
    text(warrior.health),
    pos(width() - 250, 15),
    layer("ui"),
    scale(3),
  ]);

  //HEALTH FUNCTIONS MIGHT BE USED IF I FIGURE OUT A FIX
  //
  // function spawnHealth() {
  //   if (health0 < WARRIOR_HEALTH) {
  //     health0++;
  //     healthpos = healthpos - 65;
  //     let health = add([
  //       sprite("health", { animSpeed: 0.15, frame: 0 }),
  //       pos(healthpos, 0),
  //       scale(0.2),
  //       "health",
  //     ]);
  //     health.play("pump");
  //     spawnHealth();
  //   }
  //   if (health0 === WARRIOR_HEALTH) {
  //     healthpos = width() - 50;
  //   }
  // }
  // spawnHealth();

  //
  //

  //
  //

  //
  //
  //
  //
  //
  //PLAYER ACTIONS//

  // LEFT MOVEMENT
  keyPress("a", () => {
    warrior.changeSprite("warriorLeft", { animSpeed: 0.1, frame: 0 });
    warrior.play("walk");
  });
  keyDown("a", () => {
    warrior.move(-WARRIOR_SPEED, 0);
  });
  // keyRelease("a", () => {
  //   warrior.play("idle");
  // });

  // DOWN MOVEMENT
  keyPress("s", () => {
    warrior.changeSprite("warriorDown", { animSpeed: 0.1, frame: 0 });
    warrior.play("walk");
  });
  keyDown("s", () => {
    warrior.move(0, WARRIOR_SPEED);
  });
  // keyRelease("s", () => {
  //   warrior.play("idle");
  // });

  // RIGHT MOVEMENT
  keyPress("d", () => {
    warrior.changeSprite("warriorRight", { animSpeed: 0.1, frame: 0 });
    warrior.play("walk");
  });
  keyDown("d", () => {
    warrior.move(WARRIOR_SPEED, 0);
  });
  // keyRelease("d", () => {
  //   warrior.play("idle");
  // });

  // UP MOVEMENT
  keyPress("w", () => {
    warrior.changeSprite("warriorUp", { animSpeed: 0.1, frame: 0 });
    warrior.play("walk");
  });
  keyDown("w", () => {
    warrior.move(0, -WARRIOR_SPEED);
  });
  // keyRelease("w", () => {
  //   warrior.play("idle");
  // });

  //
  //
  //
  //
  //WARRIOR DASH

  let dashIsNotCooldown = true;
  keyPress("space", () => {
    if (dashIsNotCooldown) {
      WARRIOR_SPEED = WARRIOR_SPEED * DASH;
      dashIsNotCooldown = false;
      wait(0.08, () => {
        WARRIOR_SPEED = WARRIOR_SPEED / DASH;
        resetDashCooldown();
      });
    }
  });
  function resetDashCooldown() {
    if (dashIsNotCooldown) {
      wait(2, () => {
        dashIsNotCooldown = true;
      });
    }
    if (dashIsNotCooldown === false) {
      wait(2, () => {
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
  mouseClick(() => {
    const warriorLocation = warrior.pos.add(-20, 0);
    const mpos = mousePos();
    if (attackIsNotCooldown) {
      const attack = add([
        sprite("attack", { animSpeed: 0.05, frame: 0 }),
        pos(warrior.pos.add(-25, -20)),
        scale(0.3),
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

  //ATTACK HITS GOBLIN
  overlaps("goblin", "attack", (goblin) => {
    score.text++;
    goblin.life--;
    goblin.color = { r: 1, g: 0, b: 0, a: 1 };
    wait(1, () => {
      goblin.color = { r: 1, g: 1, b: 1, a: 1 };
    });
    if (goblin.life <= 0) {
      destroy(goblin);
      add([
        sprite("splat"),
        pos(goblin.pos.x - 10, goblin.pos.y + 10),
        scale(0.05),
        color(1, 1, 1, 0.5),
      ]);
    }
  });

  warrior.action(() => {
    warrior.pushOutAll();
  });

  //
  //
  //
  //
  //WARRIOR HEALTH
  hitanim = 0.2;
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

    healthnum.text = warrior.health;
    if (healthnum.text < 100) {
      healthnum.pos.x = width() - 215;
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
        scale(0.5),
        color(1, 1, 1, 1),
        "goblin",
        {
          life: GOBLIN_HEALTH,
        },
      ]);
      goblin1.play("goblin1");
    }

    //GOBLIN SPAWN FAR RIGHT
    if (goblinSpawn === 1) {
      const goblin2 = add([
        sprite("goblin", { animSpeed: 0.5, frame: 0 }),
        pos(width(), rand(-100, height())),
        scale(0.5),
        color(1, 1, 1, 1),
        "goblin",
        {
          life: GOBLIN_HEALTH,
        },
      ]);
      goblin2.play("goblin2");
    }

    //GOBLIN SPAWN TOP
    if (goblinSpawn === 2) {
      const goblin3 = add([
        sprite("goblin", { animSpeed: 0.5, frame: 0 }),
        pos(rand(-100, width()), -100),
        scale(0.5),
        color(1, 1, 1, 1),
        "goblin",
        {
          life: GOBLIN_HEALTH,
        },
      ]);
      goblin3.play("goblin3");
    }

    //GOBLIN SPAWN BOTTOM

    if (goblinSpawn === 3) {
      const goblin4 = add([
        sprite("goblin", { animSpeed: 0.5, frame: 0 }),
        pos(rand(-100, width()), height()),
        scale(0.5),
        color(1, 1, 1, 1),
        "goblin",
        {
          life: GOBLIN_HEALTH,
        },
      ]);
      goblin4.play("goblin4");
    }
    if (enemyCount < totalEnemies)
      wait(SPAWN_RATE, () => {
        enemyCount++;
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

  spawnGoblin();
});

go("game", 0);
