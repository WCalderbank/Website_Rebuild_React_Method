import React from "react";
import "./Body.css";

function Body() {
  return (
    <>
      <div class="circle">
        <div class="dice" id="dice">
          <img
            src={require("../images/20-sided-dice-icon-10 (1).jpg")}
            alt=""
          />
        </div>
      </div>

      <div class="row">
        <div class="info-col">
          <h5 id="race">RACE</h5>
          <p class="p1" id="p1">
            ?
          </p>
        </div>

        <div class="info-col">
          <h5 id="alignment">ALIGNMENT</h5>
          <p class="p2" id="p2">
            ?
          </p>
        </div>

        <div class="info-col">
          <h5 id="role">CLASS</h5>
          <p class="p3" id="p3">
            ?
          </p>
        </div>

        <div class="info-col">
          <h5 id="weapon">FAVOURED WEAPON</h5>
          <p class="p4" id="p4">
            ?
          </p>
        </div>

        <div class="info-col">
          <h5 id="language">FAVOURED LANGUAGE</h5>
          <p class="p5" id="p5">
            ?
          </p>
        </div>
      </div>
      <h2 id="fate">What Does FATE have in store for you?</h2>
    </>
  );
}

export default Body;
