import React, { useState, useEffect } from "react";

function Alignment() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function alignmentInfo() {
      const response = await fetch("https://www.dnd5eapi.co/api/alignments");
      const data = await response.json();
      console.log(data);
      const num = Math.floor(Math.random() * 9);
      console.log(num);
      let p2 = document.querySelector("#p2");
      p2.innerHTML = `${data.results[num].name}`;
      setInfo([]);
    }
    alignmentInfo();
  }, []);

  return (
    <div class="info-col">
      <h5 id="alignment">ALIGNMENT</h5>
      <p class="p2" id="p2" info={info}>
        ?
      </p>
    </div>
  );
}

export default Alignment;
