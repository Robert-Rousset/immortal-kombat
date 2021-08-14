import abilityPoint from "../img/abilitypoints/ability-points.png";
import noAbilityPoint from "../img/abilitypoints/no-ability-point.png";

export default function UpdateStats() {
  function nextRound() {
    let thisStatsBox = document.querySelector(".statflex");
    let scorenum = Number(document.querySelector("#score").innerHTML);

    thisStatsBox.setAttribute("class", "stats-hidden");

    window.go("game", scorenum);
    window.increaseEnemies();
  }
  return (
    <div className="stats-hidden">
      <div className="stats-box">
        <h5>
          Score:<span id="score">0</span>
        </h5>
        <h2>WARRIOR STATS</h2>{" "}
        <h5>
          Round: <span id="round">0</span>
        </h5>
        <article className="container">
          <section className="column">
            <div className="each-stat-container">
              <h4>Warrior Health </h4>
              <div className="stat">
                <div>
                  <p id="health">0</p>
                </div>
                <div>
                  <button
                    className="upgrade-stat-neg"
                    onClick={window.decreaseHealth}
                  >
                    -
                  </button>
                  <button
                    className="upgrade-stat"
                    onClick={window.increaseHealth}
                  >
                    +
                  </button>
                </div>
                <div className="no-ability-point-box">
                  <img
                    id="he1"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="he2"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="he3"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="he4"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="he5"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="he6"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="he7"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="he8"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="he9"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="he10"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="he11"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="he12"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                </div>
              </div>
            </div>

            <div className="each-stat-container">
              <h4>Attack Damage </h4>
              <div className="stat">
                <div>
                  <p id="attack-damage">0</p>
                </div>
                <div>
                  <button
                    className="upgrade-stat-neg"
                    onClick={() => {
                      window.decreaseDamage();
                    }}
                  >
                    -
                  </button>
                  <button
                    className="upgrade-stat"
                    onClick={() => {
                      window.increaseDamage();
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="no-ability-point-box">
                  <img
                    id="d1"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="d2"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="d3"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="d4"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="d5"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="d6"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="d7"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="d8"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="d9"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="d10"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="d11"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="d12"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                </div>
              </div>
            </div>
          </section>

          <section className="column">
            <div className="each-stat-container">
              <h4>Attack Speed </h4>
              <div className="stat">
                <div>
                  <p id="attack-speed">0</p>
                </div>
                <div>
                  <button
                    className="upgrade-stat-neg"
                    onClick={() => {
                      window.decreaseAttackSpeed();
                    }}
                  >
                    -
                  </button>
                  <button
                    className="upgrade-stat"
                    onClick={() => {
                      window.increaseAttackSpeed();
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="no-ability-point-box">
                  <img
                    id="as1"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="as2"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="as3"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="as4"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="as5"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="as6"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="as7"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="as8"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="as9"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="as10"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="as11"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="as12"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                </div>
              </div>
            </div>

            <div className="each-stat-container">
              <h4>Attack Range </h4>
              <div className="stat">
                <div>
                  <p id="attack-range">0</p>
                </div>
                <div>
                  <button
                    className="upgrade-stat-neg"
                    onClick={() => {
                      window.decreaseAttackRange();
                    }}
                  >
                    -
                  </button>
                  <button
                    className="upgrade-stat"
                    onClick={() => {
                      window.increaseAttackRange();
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="no-ability-point-box">
                  <img
                    id="ar1"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="ar2"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="ar3"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="ar4"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="ar5"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="ar6"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="ar7"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="ar8"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="ar9"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="ar10"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="ar11"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="ar12"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                </div>
              </div>
            </div>
          </section>

          <section className="column">
            <div className="each-stat-container">
              <h4>Movement Speed </h4>
              <div className="stat">
                <div>
                  <p id="movement-speed">0</p>
                </div>
                <div>
                  <button
                    className="upgrade-stat-neg"
                    onClick={() => {
                      window.decreaseWarriorSpeed();
                    }}
                  >
                    -
                  </button>
                  <button
                    className="upgrade-stat"
                    onClick={() => {
                      window.increaseWarriorSpeed();
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="no-ability-point-box">
                  <img
                    id="m1"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="m2"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="m3"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="m4"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="m5"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="m6"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="m7"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="m8"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="m9"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="m10"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="m11"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="m12"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                </div>
              </div>
            </div>

            <div className="each-stat-container">
              <h4>Dash Speed</h4>
              <div className="stat">
                <div>
                  <p id="dash">0</p>
                </div>
                <div>
                  <button
                    className="upgrade-stat-neg"
                    onClick={() => {
                      window.decreaseDashDistance();
                    }}
                  >
                    -
                  </button>
                  <button
                    className="upgrade-stat"
                    onClick={() => {
                      window.increaseDashDistance();
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="no-ability-point-box">
                  <img
                    id="da1"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="da2"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="da3"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="da4"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="da5"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="da6"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="da7"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="da8"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="da9"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="da10"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="da11"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    id="da12"
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                </div>
              </div>
            </div>
          </section>
        </article>
        <h5>Spend up to 3 ability points</h5>
        <div className="ability-point-box">
          <img
            id="ab1"
            src={abilityPoint}
            alt="ability point"
            className="ability-point"
          ></img>
          <img
            id="ab2"
            src={abilityPoint}
            alt="ability point"
            className="ability-point"
          ></img>
          <img
            id="ab3"
            src={abilityPoint}
            alt="ability point"
            className="ability-point"
          ></img>
        </div>
        <div className="button-box">
          <button className="button next-round" onClick={nextRound}>
            Next Round
          </button>
        </div>
      </div>
    </div>
  );
}
