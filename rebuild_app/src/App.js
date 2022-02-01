import "./App.css";
import background from "./Components/images/Banner.webp";
import Links from "./Components/Links/Links";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";

import adventureInfo from "./Components/Body/Race/Race";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),url(${background})`,
      }}
    >
      <Links />
      <Header />
      <Body />
      <Footer adventureInfo={adventureInfo} />;
    </div>
  );
}

export default App;
