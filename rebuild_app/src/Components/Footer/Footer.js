import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <button
        class="fact-button"
        onClick={() => {
          console.log("CLICKED");
        }}
      >
        Why Don't We Find Out?
      </button>
    </div>
  );
}

export default Footer;
