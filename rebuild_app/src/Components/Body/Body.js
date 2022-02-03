import React, { useState } from "react";
import Alignment from "./Alignment/Alignment";
import "./Body.css";
import Class from "./Class/Class";
import Language from "./Language/Language";
import Weapon from "./Weapon/Weapon";
import Race from "./Race/Race";
import Button from "./Button/Button";

function Body() {
  const [cls, setCls] = useState("");
  return (
    <>
      <style>{`.firebrick {color: firebrick}`}</style>
      <div
        class="circle"
        onMouseOver={() =>
          setCls((cls) => (cls === "firebrick" ? "" : "firebrick"))
        }
        onMouseLeave={() => setCls((cls) => (cls === "" ? "" : ""))}
      >
        <div class="dice" id="dice">
          <img
            src={require("../images/20-sided-dice-icon-10 (1).jpg")}
            alt=""
          />
        </div>
      </div>
      <div class="row">
        <Race cls={cls} />
        <Alignment cls={cls} />
        <Class cls={cls} />
        <Weapon cls={cls} />
        <Language cls={cls} />
      </div>
      <Button />
      <h2 id="fate" className={cls}>
        What Does FATE have in store for you?
      </h2>
    </>
  );
}

export default Body;
