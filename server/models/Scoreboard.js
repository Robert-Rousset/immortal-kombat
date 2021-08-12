const { Schema, model } = require("mongoose");

const scoreboardSchema = new Schema({
  name: {
    type: String,
  },
  score: {
    type: String,
  },
});

const Scoreboard = model("Scoreboard", scoreboardSchema);

module.exports = Scoreboard;
