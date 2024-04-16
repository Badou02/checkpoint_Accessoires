import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

    const Player = ({ nom, equipe, nationalite, numero_maillot, age, image }) => {
        return (
          <Card style={{ width: '18rem', height:'30rem'} } >
            <Card.Img variant="top" src={image} alt={nom}  height={'240px'} />
            <Card.Body>
              <Card.Title>{nom}</Card.Title>
              <Card.Text>
                <p>Équipe: {equipe}</p>
                <p>Nationalité: {nationalite}</p>
                <p>Numéro de maillot: {numero_maillot}</p>
                <p>Âge: {age}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      };
      
      export default Player;