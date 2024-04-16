import React from "react";
import Player from "./Player";
import joueurs from "./joueurs";
const PlayersList = () => {
    return (
      <div className="players-list">
        <h2>Liste des joueurs</h2>
        <div className="row">
          {joueurs.map((joueur, index) => (
            <div key={index} className="col-md-4 mb-4">
               <Player 
              nom={joueur.nom}
              equipe={joueur.equipe}
              nationalite={joueur.nationalite}
              numero_maillot={joueur.numero_maillot}
              age={joueur.age}
              image={joueur.image} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default PlayersList;