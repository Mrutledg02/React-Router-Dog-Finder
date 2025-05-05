import React from "react";
import { useParams, Navigate } from "react-router-dom";

import "./DogDetails.css";

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());

  if (!dog) return <Navigate to="/dogs" />;

  return (
    <div className="DogDetails">
      <h2>{dog.name}</h2>
      <img src={dog.src} alt={dog.name} width="300" />
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
