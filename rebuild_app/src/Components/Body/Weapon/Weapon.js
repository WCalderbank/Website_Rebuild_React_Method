import React, { useState, useEffect } from "react";

function Weapon() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
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
      setInfo([]);
    }
    weaponInfo();
  }, []);

  return (
    <div class="info-col">
      <h5 id="weapon">FAVOURED WEAPON</h5>
      <p class="p4" id="p4" info={info}>
        ?
      </p>
    </div>
  );
}

export default Weapon;
