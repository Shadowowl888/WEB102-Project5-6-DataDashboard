import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import List from "./components/List";
import "./App.css";

const App = () => {
  const [topBrewery, setTopBrewery] = useState(null);

  return (
    <div className="App">
      <Header />
      <NavBar />
      
      <div className="card-container">
        {topBrewery && (
          <div className="card-container">
            <Card info={topBrewery.name} label="Top Brewery 🍺" />
            <Card info={topBrewery.city} label="City 🏙️" />
            <Card info={topBrewery.country} label="Country &#128509;" />
          </div>
        )}
      </div>

      <List setTopBrewery={setTopBrewery} />
    </div>
  );
};

export default App;