import React, { useState, useEffect } from "react";

function Language() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function languageInfo() {
      const response = await fetch("https://www.dnd5eapi.co/api/languages");
      const data = await response.json();
      console.log(data);
      console.log();
      const num = Math.floor(Math.random() * 16);
      console.log(num);
      let p5 = document.querySelector("#p5");
      p5.innerHTML = `${data.results[num].name}`;
      setInfo([]);
    }
    languageInfo();
  }, []);

  return (
    <div class="info-col">
      <h5 id="language">FAVOURED LANGUAGE</h5>
      <p class="p5" id="p5" info={info}>
        ?
      </p>
    </div>
  );
}

export default Language;
