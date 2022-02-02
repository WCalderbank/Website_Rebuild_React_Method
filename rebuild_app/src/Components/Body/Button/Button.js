import React from "react";
import "./Button.css";

let colorChange = document.querySelector("#dice");
let titleColor = document.querySelector("#title");
let fateQuote = document.querySelector("#fate");
let raceTitle = document.querySelector("#race");
let classTitle = document.querySelector("#role");
let alignmentTitle = document.querySelector("#alignment");
let weaponTitle = document.querySelector("#weapon");
let languageTitle = document.querySelector("#language");

function handleClick() {
  async function alignmentInfo() {
    const response = await fetch("https://www.dnd5eapi.co/api/alignments");
    const data = await response.json();
    console.log(data);
    const num = Math.floor(Math.random() * 9);
    console.log(num);
    let p2 = document.querySelector("#p2");
    p2.innerHTML = `${data.results[num].name}`;
  }

  async function classInfo() {
    const response = await fetch("https://www.dnd5eapi.co/api/classes/");
    const data = await response.json();
    console.log(data);
    const num = Math.floor(Math.random() * 12);
    console.log(num);
    let p3 = document.querySelector("#p3");
    p3.innerHTML = `${data.results[num].name}`;
  }

  async function adventureInfo() {
    const response = await fetch("https://www.dnd5eapi.co/api/races/");
    const data = await response.json();
    console.log(data);
    const num = Math.floor(Math.random() * 9);
    console.log(num);
    let p1 = document.querySelector("#p1");
    p1.innerHTML = `${data.results[num].name}`;
  }

  async function weaponInfo() {
    const response = await fetch(
      "https://www.dnd5eapi.co/api/equipment-categories/weapon/"
    );
    const data = await response.json();
    console.log(data);
    const num = Math.floor(Math.random() * 36);
    console.log(num);
    let p4 = document.querySelector("#p4");
    p4.innerHTML = `${data.equipment[num].name}`;
  }

  async function languageInfo() {
    const response = await fetch("https://www.dnd5eapi.co/api/languages");
    const data = await response.json();
    console.log(data);
    console.log();
    const num = Math.floor(Math.random() * 16);
    console.log(num);
    let p5 = document.querySelector("#p5");
    p5.innerHTML = `${data.results[num].name}`;
  }

  function redGlow() {
    titleColor.style.color = "firebrick";
    fateQuote.style.color = "firebrick";
    raceTitle.style.color = "firebrick";
    classTitle.style.color = "firebrick";
    alignmentTitle.style.color = "firebrick";
    weaponTitle.style.color = "firebrick";
    languageTitle.style.color = "firebrick";
  }

  colorChange.addEventListener("mouseenter", redGlow);

  function returnOriginal() {
    titleColor.style.color = "lightgray";
    fateQuote.style.color = "lightgray";
    raceTitle.style.color = "black";
    classTitle.style.color = "black";
    alignmentTitle.style.color = "black";
    weaponTitle.style.color = "black";
    languageTitle.style.color = "black";
  }

  colorChange.addEventListener("mouseleave", returnOriginal);

  function wordShine() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    let p1 = document.querySelector("#p1");
    let p2 = document.querySelector("#p2");
    let p3 = document.querySelector("#p3");
    let p4 = document.querySelector("#p4");
    let p5 = document.querySelector("#p5");
    p1.style.color = "#" + `${randomColor}`;
    p2.style.color = "#" + `${randomColor}`;
    p3.style.color = "#" + `${randomColor}`;
    p4.style.color = "#" + `${randomColor}`;
    p5.style.color = "#" + `${randomColor}`;
  }

  classInfo();
  alignmentInfo();
  adventureInfo();
  weaponInfo();
  languageInfo();
  wordShine();
}

function Button() {
  return (
    <div>
      <button class="fact-button" onClick={handleClick}>
        Why Don't We Find Out?
      </button>
    </div>
  );
}
export default Button;
