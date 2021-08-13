import abilityPoint from "../img/abilitypoints/ability-points.png";
import noAbilityPoint from "../img/abilitypoints/no-ability-point.png";

export default function UpdateStats() {
  function nextRound() {
    let thisStatsBox = document.querySelector(".statflex");
    thisStatsBox.setAttribute("class", "stats-hidden");
    window.go("game", 0);
  }
  return (
    <div className="stats-hidden">
      <div className="stats-box">
        <h2>WARRIOR STATS</h2>
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
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
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
                    onClick={window.decreaseDamage}
                  >
                    -
                  </button>
                  <button
                    className="upgrade-stat"
                    onClick={window.increaseDamage}
                  >
                    +
                  </button>
                </div>
                <div className="no-ability-point-box">
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
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
                    onClick={window.decreaseAttackSpeed}
                  >
                    -
                  </button>
                  <button
                    className="upgrade-stat"
                    onClick={window.increaseAttackSpeed}
                  >
                    +
                  </button>
                </div>
                <div className="no-ability-point-box">
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
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
                    onClick={window.decreaseAttackRange}
                  >
                    -
                  </button>
                  <button
                    className="upgrade-stat"
                    onClick={window.increaseAttackRange}
                  >
                    +
                  </button>
                </div>
                <div className="no-ability-point-box">
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
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
                    onClick={window.decreaseWarriorSpeed}
                  >
                    -
                  </button>
                  <button
                    className="upgrade-stat"
                    onClick={window.increaseWarriorSpeed}
                  >
                    +
                  </button>
                </div>
                <div className="no-ability-point-box">
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                </div>
              </div>
            </div>

            <div className="each-stat-container">
              <h4>Dash Distance </h4>
              <div className="stat">
                <div>
                  <p id="dash">0</p>
                </div>
                <div>
                  <button
                    className="upgrade-stat-neg"
                    onClick={window.decreaseDashDistance}
                  >
                    -
                  </button>
                  <button
                    className="upgrade-stat"
                    onClick={window.increaseDashDistance}
                  >
                    +
                  </button>
                </div>
                <div className="no-ability-point-box">
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
                    src={noAbilityPoint}
                    alt="No Ability Point"
                    className="no-ability-point"
                  ></img>
                  <img
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
            src={abilityPoint}
            alt="ability point"
            className="ability-point"
          ></img>
          <img
            src={abilityPoint}
            alt="ability point"
            className="ability-point"
          ></img>
          <img
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
