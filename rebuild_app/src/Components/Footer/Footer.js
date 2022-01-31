import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <button
        onclick="classInfo(), adventureInfo(), alignmentInfo(), weaponInfo(), languageInfo(), wordShine()"
        class="fact-button"
      >
        Why Don't We Find Out?
      </button>
    </div>
  );
}

export default Footer;
