import React, { useState } from "react";
import "./App.css";
import background from "./Components/images/Banner.webp";
import Links from "./Components/Links/Links";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";

function App() {
  const [cls, setCls] = useState("");
  return (
    <>
      <style>{`.firebrick {color: firebrick}`}</style>
      <div
        className="App"
        style={{
          backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),url(${background})`,
        }}
      >
        <Links />
        <Header cls={cls} />
        <Body cls={cls} setCls={setCls} />
      </div>
    </>
  );
}

export default App;
