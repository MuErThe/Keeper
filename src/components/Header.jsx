import React from "react";
import DoneAllIcon from "@material-ui/icons/DoneAll";

function Header() {
  return (
    <header>
      <h1>
        <DoneAllIcon style={{ fontSize: 40 }} />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
