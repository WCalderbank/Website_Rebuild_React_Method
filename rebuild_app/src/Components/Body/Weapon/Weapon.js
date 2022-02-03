import React from "react";

function Weapon({ cls }) {
  return (
    <div class="info-col">
      <h5 id="weapon" className={cls}>
        FAVOURED WEAPON
      </h5>
      <p class="p4" id="p4">
        ?
      </p>
    </div>
  );
}

export default Weapon;
