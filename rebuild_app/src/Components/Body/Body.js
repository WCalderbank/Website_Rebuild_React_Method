import React from "react";
import Alignment from "./Alignment/Alignment";
import "./Body.css";
import Class from "./Class/Class";
import Language from "./Language/Language";
import Weapon from "./Weapon/Weapon";
import Race from "./Race/Race";
import Button from "./Button/Button";

/*let titleColor = document.querySelector("#title");
let fateQuote = document.querySelector("#fate");
let raceTitle = document.querySelector("#race");
let classTitle = document.querySelector("#role");
let alignmentTitle = document.querySelector("#alignment");
let weaponTitle = document.querySelector("#weapon");
let languageTitle = document.querySelector("#language");

function redGlow() {
  titleColor.style.color = "firebrick";
  fateQuote.style.color = "firebrick";
  raceTitle.style.color = "firebrick";
  classTitle.style.color = "firebrick";
  alignmentTitle.style.color = "firebrick";
  weaponTitle.style.color = "firebrick";
  languageTitle.style.color = "firebrick";
}
redGlow();

function returnOriginal() {
  titleColor.style.color = "lightgray";
  fateQuote.style.color = "lightgray";
  raceTitle.style.color = "black";
  classTitle.style.color = "black";
  alignmentTitle.style.color = "black";
  weaponTitle.style.color = "black";
  languageTitle.style.color = "black";
}
returnOriginal();*/

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
      <Button alignment={Alignment} />
      <h2 id="fate">What Does FATE have in store for you?</h2>
    </>
  );
}

export default Body;
