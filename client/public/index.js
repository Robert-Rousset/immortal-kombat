const k = kaboom({
  global: true,
  fullscreen: true,
  clearColor: [0, 0, 0, 1],
  debug: true,
  scale: 1,
});

loadSprite("warrior", "./img/sprites/warrior.png");

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
  const warrior = add([sprite("warrior"), pos(100, 100), scale(0.1)]);

  add([text("0"), pos(20, 20), layer("ui"), { value: "test" }, scale(4)]);

  const dirs = {
    a: vec2(-1, 0),
    d: vec2(1, 0),
    w: vec2(0, -1),
    s: vec2(0, 1),
  };
  for (const dir in dirs) {
    keyDown(dir, () => {
      warrior.move(dirs[dir].scale(SPEED));
    });
  }

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

  keyPress("up", () => {});

  function spawnAttack(s) {
    const attack = add([
      sprite("attack", { animSpeed: 0.05, frame: 0 }),
      pos(s),
      scale(0.3),
      "attack",
    ]);
    attack.play("attack");
    wait(0.4, () => {
      destroy(attack);
    });
  }

  keyPress("up", () => {
    spawnAttack(warrior.pos.add(-20, 0));
  });

  action("attack", (s) => {
    s.move(0, -ATTACK_SPEED);
  });

  warrior.action(() => {
    warrior.pushOutAll();
  });
});

go("game", 0);
