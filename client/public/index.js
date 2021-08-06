const k = kaboom({
  global: true,
  fullscreen: true,
  clearColor: [0, 0, 0, 1],
  debug: true,
  scale: 1,
});

loadSprite("warrior", "./img/sprites/warrior.png");
// load only a fragment shader from URL
loadShader("outline", null, "./img/battleground.jpg", true);

scene("game", (levelIndex) => {
  let SPEED = 200;

  const warrior = add([sprite("warrior"), pos(100, 100), scale(0.1)]);

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
  const dash = {
    shift: vec2(0, 0),
  };
  keyDown(dash, () => {
    warrior.move(dash.scale(SPEED++));
  });

  warrior.action(() => {
    warrior.pushOutAll();
  });
});

go("game", 0);
