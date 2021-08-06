const k = kaboom({
  global: true,
  fullscreen: true,
  clearColor: [0, 0, 0, 1],
  debug: true,
  scale: 1,
});

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

loadSprite("background", "./img/battleground.jpg");

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

scene("game", (levelIndex) => {
  origin("center");
  let ATTACK_SPEED = 250;
  let SPEED = 200;
  let DASH = 4;
  layers([("background", "obj", "ui"), "obj"]);

  add([
    sprite("background"),
    pos(width() / 2, height() / 2),
    scale(1),
    origin("center"),
  ]);
  const warrior = add([sprite("warriorRight"), pos(100, 100), scale(0.2)]);

  add([text("0"), pos(20, 20), layer("ui"), { value: "test" }, scale(4)]);

  // const dirs = {
  //   a: vec2(-1, 0),
  //   d: vec2(1, 0),
  //   w: vec2(0, -1),
  //   s: vec2(0, 1),
  // };
  // for (const dir in dirs) {
  //   keyDown(dir, () => {
  //     warrior.move(dirs[dir].scale(SPEED));
  //   });
  // }

  keyPress("a", () => {
    warrior.changeSprite("warriorLeft", { animSpeed: 3, frame: 0 });
    warrior.play("walk");
  });
  keyDown("a", () => {
    warrior.move(-SPEED, 0);
  });
  keyRelease("a", () => {
    warrior.play("idle");
  });

  keyPress("s", () => {
    warrior.changeSprite("warriorDown", { animSpeed: 3, frame: 0 });
    warrior.play("walk");
  });
  keyDown("s", () => {
    warrior.move(0, SPEED);
  });
  keyRelease("s", () => {
    warrior.play("idle");
  });

  keyPress("d", () => {
    warrior.changeSprite("warriorRight", { animSpeed: 3, frame: 0 });
    warrior.play("walk");
  });
  keyDown("d", () => {
    warrior.move(SPEED, 0);
  });
  keyRelease("d", () => {
    warrior.play("idle");
  });

  keyPress("w", () => {
    warrior.changeSprite("warriorUp", { animSpeed: 3, frame: 0 });
    warrior.play("walk");
  });
  keyDown("w", () => {
    warrior.move(0, -SPEED);
  });
  keyRelease("w", () => {
    warrior.play("idle");
  });

  let dashIsNotCooldown = true;
  keyPress("space", () => {
    if (dashIsNotCooldown) {
      SPEED = SPEED * DASH;
      dashIsNotCooldown = false;
      wait(0.08, () => {
        SPEED = SPEED / DASH;
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
