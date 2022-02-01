import React, { useState, useEffect } from "react";

function Class() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function classInfo() {
      const response = await fetch("https://www.dnd5eapi.co/api/classes/");
      const data = await response.json();
      console.log(data);
      const num = Math.floor(Math.random() * 12);
      console.log(num);
      let p3 = document.querySelector("#p3");
      p3.innerHTML = `${data.results[num].name}`;
      setInfo([]);
    }
    classInfo();
  }, []);

  return (
    <div class="info-col">
      <h5 id="role">CLASS</h5>
      <p class="p3" id="p3" info={info}>
        ?
      </p>
    </div>
  );
}

export default Class;
