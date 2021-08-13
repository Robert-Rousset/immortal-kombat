import { useState, useEffect } from "react";
import abilityPoint from "../img/abilitypoints/ability-points.png";
import noAbilityPoint from "../img/abilitypoints/no-ability-point.png";

export default function UpdateStats() {
  let [abilityPointsUsed, setAbilityPointsUsed] = useState(0);
  let [healthPoints, setHealthPoints] = useState(0);
  let [damagePoints, setDamagePoints] = useState(0);
  let [attackSpeedPoints, setAttackSpeedPoints] = useState(0);
  let [rangePoints, setRangePoints] = useState(0);
  let [movementPoints, setMovementPoints] = useState(0);
  let [dashPoints, setDashPoints] = useState(0);

  useEffect(() => {
    console.log(abilityPointsUsed);
  }, [
    healthPoints,
    dashPoints,
    damagePoints,
    attackSpeedPoints,
    rangePoints,
    movementPoints,
  ]);
  /////HEALTH/////
  function addHealth() {
    if (healthPoints >= 5) {
      return;
    } else {
      setHealthPoints(healthPoints + 1);
    }
    if (abilityPointsUsed >= 2) {
      return;
    } else {
      setAbilityPointsUsed(abilityPointsUsed + 1);
    }
  }
  function takeHealth() {
    if (healthPoints <= 0) {
      return;
    } else {
      setHealthPoints(healthPoints - 1);
    }
    if (abilityPointsUsed <= 0) {
      return;
    } else {
      setAbilityPointsUsed(abilityPointsUsed - 1);
    }
  }
  useEffect(() => {
    if (abilityPointsUsed <= 2) {
      renderHealthPoints();
    } else {
      return;
    }
  }, [healthPoints]);
  function renderHealthPoints() {
    if (healthPoints === 0) {
      document.getElementById("he1").src = noAbilityPoint;
      document.getElementById("he2").src = noAbilityPoint;
      document.getElementById("he3").src = noAbilityPoint;
      document.getElementById("he4").src = noAbilityPoint;
      document.getElementById("he5").src = noAbilityPoint;
    }
    if (healthPoints === 1) {
      document.getElementById("he1").src = abilityPoint;
      document.getElementById("he2").src = noAbilityPoint;
      document.getElementById("he3").src = noAbilityPoint;
      document.getElementById("he4").src = noAbilityPoint;
      document.getElementById("he5").src = noAbilityPoint;
    }
    if (healthPoints === 2) {
      document.getElementById("he1").src = abilityPoint;
      document.getElementById("he2").src = abilityPoint;
      document.getElementById("he3").src = noAbilityPoint;
      document.getElementById("he4").src = noAbilityPoint;
      document.getElementById("he5").src = noAbilityPoint;
    }
    if (healthPoints === 3) {
      document.getElementById("he1").src = abilityPoint;
      document.getElementById("he2").src = abilityPoint;
      document.getElementById("he3").src = abilityPoint;
      document.getElementById("he4").src = noAbilityPoint;
      document.getElementById("he5").src = noAbilityPoint;
    }
    if (healthPoints === 4) {
      document.getElementById("he1").src = abilityPoint;
      document.getElementById("he2").src = abilityPoint;
      document.getElementById("he3").src = abilityPoint;
      document.getElementById("he4").src = abilityPoint;
      document.getElementById("he5").src = noAbilityPoint;
    }
    if (healthPoints === 5) {
      document.getElementById("he1").src = abilityPoint;
      document.getElementById("he2").src = abilityPoint;
      document.getElementById("he3").src = abilityPoint;
      document.getElementById("he4").src = abilityPoint;
      document.getElementById("he5").src = abilityPoint;
    }
  }
  /////HEALTH/////

  /////DAMAGE/////
  function addDamage() {
    if (damagePoints >= 5) {
      return;
    } else {
      setDamagePoints(damagePoints + 1);
    }
    if (abilityPointsUsed >= 2) {
      return;
    } else {
      setAbilityPointsUsed(abilityPointsUsed + 1);
    }
  }
  function takeDamage() {
    if (damagePoints <= 0) {
      return;
    } else {
      setDamagePoints(damagePoints - 1);
    }
    if (abilityPointsUsed <= 0) {
      return;
    } else {
      setAbilityPointsUsed(abilityPointsUsed - 1);
    }
  }
  useEffect(() => {
    if (abilityPointsUsed <= 2) {
      renderDamagePoints();
    } else {
      return;
    }
  }, [damagePoints]);
  function renderDamagePoints() {
    if (damagePoints === 0) {
      document.getElementById("d1").src = noAbilityPoint;
      document.getElementById("d2").src = noAbilityPoint;
      document.getElementById("d3").src = noAbilityPoint;
      document.getElementById("d4").src = noAbilityPoint;
      document.getElementById("d5").src = noAbilityPoint;
    }
    if (damagePoints === 1) {
      document.getElementById("d1").src = abilityPoint;
      document.getElementById("d2").src = noAbilityPoint;
      document.getElementById("d3").src = noAbilityPoint;
      document.getElementById("d4").src = noAbilityPoint;
      document.getElementById("d5").src = noAbilityPoint;
    }
    if (damagePoints === 2) {
      document.getElementById("d1").src = abilityPoint;
      document.getElementById("d2").src = abilityPoint;
      document.getElementById("d3").src = noAbilityPoint;
      document.getElementById("d4").src = noAbilityPoint;
      document.getElementById("d5").src = noAbilityPoint;
    }
    if (damagePoints === 3) {
      document.getElementById("d1").src = abilityPoint;
      document.getElementById("d2").src = abilityPoint;
      document.getElementById("d3").src = abilityPoint;
      document.getElementById("d4").src = noAbilityPoint;
      document.getElementById("d5").src = noAbilityPoint;
    }
    if (damagePoints === 4) {
      document.getElementById("d1").src = abilityPoint;
      document.getElementById("d2").src = abilityPoint;
      document.getElementById("d3").src = abilityPoint;
      document.getElementById("d4").src = abilityPoint;
      document.getElementById("d5").src = noAbilityPoint;
    }
    if (damagePoints === 5) {
      document.getElementById("d1").src = abilityPoint;
      document.getElementById("d2").src = abilityPoint;
      document.getElementById("d3").src = abilityPoint;
      document.getElementById("d4").src = abilityPoint;
      document.getElementById("d5").src = abilityPoint;
    }
  }
  /////DAMAGE/////

  ///ATTACK SPEED///
  function addAttackSpeed() {
    if (attackSpeedPoints >= 5) {
      return;
    } else {
      setAttackSpeedPoints(attackSpeedPoints + 1);
    }
    if (abilityPointsUsed >= 2) {
      return;
    } else {
      setAbilityPointsUsed(abilityPointsUsed + 1);
    }
  }
  function takeAttackSpeed() {
    if (attackSpeedPoints <= 0) {
      return;
    } else {
      setAttackSpeedPoints(attackSpeedPoints - 1);
    }
    if (abilityPointsUsed <= 0) {
      return;
    } else {
      setAbilityPointsUsed(abilityPointsUsed - 1);
    }
  }
  useEffect(() => {
    if (abilityPointsUsed <= 2) {
      renderAttackSpeedPoints();
    } else {
      return;
    }
  }, [attackSpeedPoints]);
  function renderAttackSpeedPoints() {
    if (attackSpeedPoints === 0) {
      document.getElementById("as1").src = noAbilityPoint;
      document.getElementById("as2").src = noAbilityPoint;
      document.getElementById("as3").src = noAbilityPoint;
      document.getElementById("as4").src = noAbilityPoint;
      document.getElementById("as5").src = noAbilityPoint;
    }
    if (attackSpeedPoints === 1) {
      document.getElementById("as1").src = abilityPoint;
      document.getElementById("as2").src = noAbilityPoint;
      document.getElementById("as3").src = noAbilityPoint;
      document.getElementById("as4").src = noAbilityPoint;
      document.getElementById("as5").src = noAbilityPoint;
    }
    if (attackSpeedPoints === 2) {
      document.getElementById("as1").src = abilityPoint;
      document.getElementById("as2").src = abilityPoint;
      document.getElementById("as3").src = noAbilityPoint;
      document.getElementById("as4").src = noAbilityPoint;
      document.getElementById("as5").src = noAbilityPoint;
    }
    if (attackSpeedPoints === 3) {
      document.getElementById("as1").src = abilityPoint;
      document.getElementById("as2").src = abilityPoint;
      document.getElementById("as3").src = abilityPoint;
      document.getElementById("as4").src = noAbilityPoint;
      document.getElementById("as5").src = noAbilityPoint;
    }
    if (attackSpeedPoints === 4) {
      document.getElementById("as1").src = abilityPoint;
      document.getElementById("as2").src = abilityPoint;
      document.getElementById("as3").src = abilityPoint;
      document.getElementById("as4").src = abilityPoint;
      document.getElementById("as5").src = noAbilityPoint;
    }
    if (attackSpeedPoints === 5) {
      document.getElementById("as1").src = abilityPoint;
      document.getElementById("as2").src = abilityPoint;
      document.getElementById("as3").src = abilityPoint;
      document.getElementById("as4").src = abilityPoint;
      document.getElementById("as5").src = abilityPoint;
    }
  }

  ///RANGE////
  function addAttackRange() {
    if (rangePoints >= 5) {
      return;
    } else {
      setRangePoints(rangePoints + 1);
    }
    if (abilityPointsUsed >= 2) {
      return;
    } else {
      setAbilityPointsUsed(abilityPointsUsed + 1);
    }
  }
  function takeAttackRange() {
    if (rangePoints <= 0) {
      return;
    } else {
      setRangePoints(rangePoints - 1);
    }
    if (abilityPointsUsed <= 3) {
      return;
    } else {
      setAbilityPointsUsed(abilityPointsUsed - 1);
    }
  }
  useEffect(() => {
    if (abilityPointsUsed <= 2) {
      renderRangePoints();
    } else {
      return;
    }
  }, [rangePoints]);
  function renderRangePoints() {
    if (rangePoints === 0) {
      document.getElementById("ar1").src = noAbilityPoint;
      document.getElementById("ar2").src = noAbilityPoint;
      document.getElementById("ar3").src = noAbilityPoint;
      document.getElementById("ar4").src = noAbilityPoint;
      document.getElementById("ar5").src = noAbilityPoint;
    }
    if (rangePoints === 1) {
      document.getElementById("ar1").src = abilityPoint;
      document.getElementById("ar2").src = noAbilityPoint;
      document.getElementById("ar3").src = noAbilityPoint;
      document.getElementById("ar4").src = noAbilityPoint;
      document.getElementById("ar5").src = noAbilityPoint;
    }
    if (rangePoints === 2) {
      document.getElementById("ar1").src = abilityPoint;
      document.getElementById("ar2").src = abilityPoint;
      document.getElementById("ar3").src = noAbilityPoint;
      document.getElementById("ar4").src = noAbilityPoint;
      document.getElementById("ar5").src = noAbilityPoint;
    }
    if (rangePoints === 3) {
      document.getElementById("ar1").src = abilityPoint;
      document.getElementById("ar2").src = abilityPoint;
      document.getElementById("ar3").src = abilityPoint;
      document.getElementById("ar4").src = noAbilityPoint;
      document.getElementById("ar5").src = noAbilityPoint;
    }
    if (rangePoints === 4) {
      document.getElementById("ar1").src = abilityPoint;
      document.getElementById("ar2").src = abilityPoint;
      document.getElementById("ar3").src = abilityPoint;
      document.getElementById("ar4").src = abilityPoint;
      document.getElementById("ar5").src = noAbilityPoint;
    }
    if (rangePoints === 5) {
      document.getElementById("ar1").src = abilityPoint;
      document.getElementById("ar2").src = abilityPoint;
      document.getElementById("ar3").src = abilityPoint;
      document.getElementById("ar4").src = abilityPoint;
      document.getElementById("ar5").src = abilityPoint;
    }
  }

  ///MOVEMENT SPEED////
  function addWarriorSpeed() {
    if (movementPoints >= 5) {
      return;
    } else {
      setMovementPoints(movementPoints + 1);
    }
    if (abilityPointsUsed >= 2) {
      return;
    } else {
      setAbilityPointsUsed(abilityPointsUsed + 1);
    }
  }
  function takeWarriorSpeed() {
    if (movementPoints <= 0) {
      return;
    } else {
      setMovementPoints(movementPoints - 1);
    }
    if (abilityPointsUsed <= 0) {
      return;
    } else {
      setAbilityPointsUsed(abilityPointsUsed - 1);
    }
  }
  useEffect(() => {
    if (abilityPointsUsed <= 2) {
      renderMovementPoints();
    } else {
      return;
    }
  }, [movementPoints]);
  function renderMovementPoints() {
    if (movementPoints === 0) {
      document.getElementById("m1").src = noAbilityPoint;
      document.getElementById("m2").src = noAbilityPoint;
      document.getElementById("m3").src = noAbilityPoint;
      document.getElementById("m4").src = noAbilityPoint;
      document.getElementById("m5").src = noAbilityPoint;
    }
    if (movementPoints === 1) {
      document.getElementById("m1").src = abilityPoint;
      document.getElementById("m2").src = noAbilityPoint;
      document.getElementById("m3").src = noAbilityPoint;
      document.getElementById("m4").src = noAbilityPoint;
      document.getElementById("m5").src = noAbilityPoint;
    }
    if (movementPoints === 2) {
      document.getElementById("m1").src = abilityPoint;
      document.getElementById("m2").src = abilityPoint;
      document.getElementById("m3").src = noAbilityPoint;
      document.getElementById("m4").src = noAbilityPoint;
      document.getElementById("m5").src = noAbilityPoint;
    }
    if (movementPoints === 3) {
      document.getElementById("m1").src = abilityPoint;
      document.getElementById("m2").src = abilityPoint;
      document.getElementById("m3").src = abilityPoint;
      document.getElementById("m4").src = noAbilityPoint;
      document.getElementById("m5").src = noAbilityPoint;
    }
    if (movementPoints === 4) {
      document.getElementById("m1").src = abilityPoint;
      document.getElementById("m2").src = abilityPoint;
      document.getElementById("m3").src = abilityPoint;
      document.getElementById("m4").src = abilityPoint;
      document.getElementById("m5").src = noAbilityPoint;
    }
    if (movementPoints === 5) {
      document.getElementById("m1").src = abilityPoint;
      document.getElementById("m2").src = abilityPoint;
      document.getElementById("m3").src = abilityPoint;
      document.getElementById("m4").src = abilityPoint;
      document.getElementById("m5").src = abilityPoint;
    }
  }

  ////Dash///
  function addDash() {
    if (dashPoints >= 5) {
      return;
    } else {
      setDashPoints(dashPoints + 1);
    }

    if (abilityPointsUsed >= 2) {
      return;
    } else {
      setAbilityPointsUsed(abilityPointsUsed + 1);
    }
  }
  function takeDash() {
    if (dashPoints <= 0) {
      return;
    } else {
      setDashPoints(dashPoints - 1);
    }

    if (abilityPointsUsed <= 0) {
      return;
    } else {
      setAbilityPointsUsed(abilityPointsUsed - 1);
    }
  }
  useEffect(() => {
    if (abilityPointsUsed >= 2) {
      renderDashPoints();
    } else {
      return;
    }
  }, [dashPoints]);
  function renderDashPoints() {
    if (dashPoints === 0) {
      document.getElementById("da1").src = noAbilityPoint;
      document.getElementById("da2").src = noAbilityPoint;
      document.getElementById("da3").src = noAbilityPoint;
      document.getElementById("da4").src = noAbilityPoint;
      document.getElementById("da5").src = noAbilityPoint;
    }
    if (dashPoints === 1) {
      document.getElementById("da1").src = abilityPoint;
      document.getElementById("da2").src = noAbilityPoint;
      document.getElementById("da3").src = noAbilityPoint;
      document.getElementById("da4").src = noAbilityPoint;
      document.getElementById("da5").src = noAbilityPoint;
    }
    if (dashPoints === 2) {
      document.getElementById("da1").src = abilityPoint;
      document.getElementById("da2").src = abilityPoint;
      document.getElementById("da3").src = noAbilityPoint;
      document.getElementById("da4").src = noAbilityPoint;
      document.getElementById("da5").src = noAbilityPoint;
    }
    if (dashPoints === 3) {
      document.getElementById("da1").src = abilityPoint;
      document.getElementById("da2").src = abilityPoint;
      document.getElementById("da3").src = abilityPoint;
      document.getElementById("da4").src = noAbilityPoint;
      document.getElementById("da5").src = noAbilityPoint;
    }
    if (dashPoints === 4) {
      document.getElementById("da1").src = abilityPoint;
      document.getElementById("da2").src = abilityPoint;
      document.getElementById("da3").src = abilityPoint;
      document.getElementById("da4").src = abilityPoint;
      document.getElementById("da5").src = noAbilityPoint;
    }
    if (dashPoints === 5) {
      document.getElementById("da1").src = abilityPoint;
      document.getElementById("da2").src = abilityPoint;
      document.getElementById("da3").src = abilityPoint;
      document.getElementById("da4").src = abilityPoint;
      document.getElementById("da5").src = abilityPoint;
    }
  }

  useEffect(() => {
    renderAbilityPoints();
  }, [abilityPointsUsed]);

  function renderAbilityPoints() {
    if (abilityPointsUsed === 0) {
      document.getElementById("ab1").src = abilityPoint;
      document.getElementById("ab2").src = abilityPoint;
      document.getElementById("ab3").src = abilityPoint;
    }
    if (abilityPointsUsed === 1) {
      document.getElementById("ab1").src = abilityPoint;
      document.getElementById("ab2").src = abilityPoint;
      document.getElementById("ab3").src = noAbilityPoint;
    }
    if (abilityPointsUsed === 2) {
      document.getElementById("ab1").src = abilityPoint;
      document.getElementById("ab2").src = noAbilityPoint;
      document.getElementById("ab3").src = noAbilityPoint;
    }
    if (abilityPointsUsed === 3) {
      document.getElementById("ab1").src = noAbilityPoint;
      document.getElementById("ab2").src = noAbilityPoint;
      document.getElementById("ab3").src = noAbilityPoint;
    }
  }

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
                    onClick={() => {
                      window.decreaseHealth();
                      takeHealth();
                    }}
                  >
                    -
                  </button>
                  <button
                    className="upgrade-stat"
                    onClick={() => {
                      window.increaseHealth();
                      addHealth();
                    }}
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
                      takeDamage();
                    }}
                  >
                    -
                  </button>
                  <button
                    className="upgrade-stat"
                    onClick={() => {
                      window.increaseDamage();
                      addDamage();
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
                      takeAttackSpeed();
                    }}
                  >
                    -
                  </button>
                  <button
                    className="upgrade-stat"
                    onClick={() => {
                      window.increaseAttackSpeed();
                      addAttackSpeed();
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
                      takeAttackRange();
                    }}
                  >
                    -
                  </button>
                  <button
                    className="upgrade-stat"
                    onClick={() => {
                      window.increaseAttackRange();
                      addAttackRange();
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
                      takeWarriorSpeed();
                    }}
                  >
                    -
                  </button>
                  <button
                    className="upgrade-stat"
                    onClick={() => {
                      window.increaseWarriorSpeed();
                      addWarriorSpeed();
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
                    onClick={() => {
                      window.decreaseDashDistance();
                      takeDash();
                    }}
                  >
                    -
                  </button>
                  <button
                    className="upgrade-stat"
                    onClick={() => {
                      window.increaseDashDistance();
                      addDash();
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
