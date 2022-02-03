import React from "react";

function Class({ cls }) {
  return (
    <div class="info-col">
      <h5 id="role" className={cls}>
        CLASS
      </h5>
      <p class="p3" id="p3">
        ?
      </p>
    </div>
  );
}

export default Class;
