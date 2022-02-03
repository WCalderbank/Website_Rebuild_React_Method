import React from "react";
import "./Header.css";

function Header() {
  return (
    <section class="header">
      <nav>
        <h1 id="h1" className="fire-glow">
          LET THE ADVENTURE BEGIN!
        </h1>
        <div className="color-switch" id="navigation-links">
          <ul id="links">
            <li>RACES</li>
            <li>CLASSES</li>
            <li>MONSTERS</li>
            <li>INVENTORY</li>
            <li>ADVENTURES</li>
            <li>LOCATIONS</li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Header;
