import React, { useState, useEffect } from "react";

function Race() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function adventureInfo() {
      const response = await fetch("https://www.dnd5eapi.co/api/races/");
      const data = await response.json();
      console.log(data);
      const num = Math.floor(Math.random() * 9);
      console.log(num);
      let p1 = document.querySelector("#p1");
      p1.innerHTML = `${data.results[num].name}`;
      setInfo([]);
    }
    adventureInfo();
  }, []);

  return (
    <div className="info-col">
      <h5 id="race">RACE</h5>
      <p className="p1" id="p1" info={info}>
        ?
      </p>
    </div>
  );
}

export default Race;
