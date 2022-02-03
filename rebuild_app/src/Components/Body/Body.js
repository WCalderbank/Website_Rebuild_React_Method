import React from "react";
import Alignment from "./Alignment/Alignment";
import "./Body.css";
import Class from "./Class/Class";
import Language from "./Language/Language";
import Weapon from "./Weapon/Weapon";
import Race from "./Race/Race";
import Button from "./Button/Button";

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
        <Race />
        <Alignment />
        <Class />
        <Weapon />
        <Language />
      </div>
      <Button />
      <h2 id="fate">What Does FATE have in store for you?</h2>
    </>
  );
}

export default Body;
