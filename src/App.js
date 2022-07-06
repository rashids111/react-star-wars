import React, { useEffect, useState } from "react"

import './App.css';
import StarshipCard from "./components/StarShipCard"
import getAllStarships from "./services/sw-api"

function App() {
  const [starships, setStarships] = useState([])

  // If the [] argument is not used below, then multiple calls are made
  useEffect(() => {
    getAllStarships().then(response => setStarships(response))
  }, [])

  return (
    <div className="App">
      <h1>STAR WARS STARSHIPS</h1>
      <ul className="flex-container wrap">
        {starships.map((starship) => <StarshipCard key={starship.name} value={starship} />)}
      </ul>
    </div>
  );
}

export default App;
