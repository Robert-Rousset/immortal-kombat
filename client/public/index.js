const k = kaboom({
  global: true,
  fullscreen: true,
  clearColor: [0, 0, 0, 1],
  debug: true,
  scale: 1,
});

loadSprite("warrior", "./img/sprites/warrior.png");

loadSprite("background", "./img/battleground.jpg");

scene("game", (levelIndex) => {
  let SPEED = 200;
  layers([("background", "obj", "ui"), "obj"]);

  const background = add([sprite("background"), pos(0, -400), scale(2)]);
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
  keyPress("shift", () => {
    SPEED = SPEED * 5;
    wait(0.08, () => {
      SPEED = SPEED / 5;
    });
  });

  warrior.action(() => {
    warrior.pushOutAll();
  });
});

go("game", 0);
