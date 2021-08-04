import warriorSprite from "../img/sprites/warrior.png";

export default function Player() {
  return (
    <>
      <div id="player">
        <img src={warriorSprite} alt="warrior" className="playerImg"></img>
      </div>
    </>
  );
}
