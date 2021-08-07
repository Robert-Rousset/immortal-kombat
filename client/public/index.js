const k = kaboom({
  global: true,
  fullscreen: true,
  clearColor: [0, 0, 0, 1],
  debug: true,
  scale: 1,
});
loadSprite("background", "./img/battleground.jpg");

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

// loadSprite("enemy", "./img/sprites/enemy/enemy1.png", {
//   sliceX: 9,
//   anims: {
//     walk: {
//       from: 0,
//       to: 8,
//     },
//   },
// });

// loadSprite("coopa", "./img/sprites/enemy/coopas.png", {
//   sliceX: 2,
//   sliceY: 2,
//   anims: {
//     coopa1: {
//       from: 0,
//       to: 1,
//     },
//     coopa2: {
//       from: 2,
//       to: 3,
//     },
//   },
// });

loadSprite("goblin", "./img/sprites/enemy/goblin-army.png", {
  sliceX: 12,
  sliceY: 8,
  anims: {
    goblin1: {
      from: 0,
      to: 2,
    },
  },
});

scene("game", (levelIndex) => {
  //SETUP
  origin("center");
  let ATTACK_SPEED = 250;
  let WARRIOR_SPEED = 200;
  let DASH = 4;
  let GOBLIN_SPEED = 80;
  layers([("background", "obj", "ui"), "obj"]);
  add([text("0"), pos(20, 20), layer("ui"), { value: "test" }, scale(4)]);
  add([
    sprite("background"),
    pos(width() / 2, height() / 2),
    scale(1),
    origin("center"),
  ]);

  const warrior = add([
    sprite("warriorRight"),
    pos(width() / 2, height() / 2),
    scale(0.15),
    solid(),
  ]);

  function spawnGoblin() {
    add([
      sprite("goblin", { animSpeed: 0.5, frame: 0 }),
      pos(width() / 2, height() / 2),
      scale(0.5),
      "goblin",
    ]);
    wait(1, () => {
      spawnGoblin();
    });
  }

  spawnGoblin();
  // function spawnGoblin() {
  //   add([
  //     sprite("goblin", { animSpeed: 0.5, frame: 0 }),
  //     pos(rand(0, 800), rand((0, 1000))),
  //     scale(1),
  //     "goblin",
  //   ]);
  // wait(2, () => {
  //   spawnGoblin();
  // });
  // }
  // action("goblin", (goblin) => {
  //   goblin.move(50, 50);
  // });

  // goblin.play("goblin1");

  action("goblin", (goblin) => {
    if (warrior.pos.x < goblin.pos.x && warrior.pos.y < goblin.pos.y) {
      wait(0.2, () => {
        goblin.move(rand(-GOBLIN_SPEED, 0), rand(0, -GOBLIN_SPEED));
      });
    }
    if (warrior.pos.x > goblin.pos.x && warrior.pos.y > goblin.pos.y) {
      wait(0.2, () => {
        goblin.move(rand(GOBLIN_SPEED, 0), rand(0, GOBLIN_SPEED));
      });
    }
    if (warrior.pos.y > goblin.pos.y && warrior.pos.x < goblin.pos.x) {
      wait(0.2, () => {
        goblin.move(rand(-GOBLIN_SPEED, 0), rand(0, GOBLIN_SPEED));
      });
    }
    if (warrior.pos.y < goblin.pos.y && warrior.pos.x > goblin.pos.x) {
      wait(0.2, () => {
        goblin.move(rand(GOBLIN_SPEED, 0), rand(0, -GOBLIN_SPEED));
      });
    }
  });
  // goblin.action(() => {});

  // goblin.action(() => {
  //   goblin.move(30, 30);
  // });

  // const enemy = add([
  //   sprite("enemy", { animSpeed: 0.5, frame: 0 }),
  //   pos(300, 300),
  // ]);

  // const coopa1 = add([
  //   sprite("coopa", { animSpeed: 0.5, frame: 0 }),
  //   pos(300, 300),
  // ]);
  // const coopa2 = add([
  //   sprite("coopa", { animSpeed: 0.5, frame: 4 }),
  //   pos(500, 500),
  // ]);

  // coopa1.play("coopa1");
  // coopa2.play("coopa2");
  // enemy.play("walk");

  // LEFT MOVEMENT
  keyPress("a", () => {
    warrior.changeSprite("warriorLeft", { animSpeed: 0.1, frame: 0 });
    warrior.play("walk");
    console.log(warrior.pos);
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

  mouseClick(() => {
    const warriorLocation = warrior.pos.add(-20, 0);
    const mpos = mousePos();
    const attack = add([
      sprite("attack", { animSpeed: 0.05, frame: 0 }),
      pos(warrior.pos.add(-20, 0)),
      scale(0.3),
      "attack",
      {
        dir: mpos.sub(warriorLocation).unit(),
      },
    ]);
    attack.play("attack");
    wait(0.4, () => {
      destroy(attack);
    });
  });

  action("attack", (s) => {
    s.move(s.dir.scale(ATTACK_SPEED));
  });

  warrior.action(() => {
    warrior.pushOutAll();
  });
});

go("game", 0);
