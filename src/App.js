import React from "react";
import Player from "./Player";
import joueurs from "./joueurs";
import "./App.css";
import PlayersList from "./PlayersList";
function App() {
  return (
    <div className="App">
        <PlayersList /> 
      <h1>Liste des joueurs</h1>
      <div className="players-container">
        {joueurs.map((joueur, index) => (
          <Player key={index} {...joueur}/>
          ))}
        
      </div>
    </div>
    
  );
}

export default App; 





