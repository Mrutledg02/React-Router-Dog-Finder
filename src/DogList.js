import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

function DogList({ dogs }) {
  return (
    <div className="DogList">
      <h1>Meet Our Dogs!</h1>
      <div className="DogList-container">
        {dogs.map(dog => (
          <div className="DogCard" key={dog.name}>
            <h2>
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
            </h2>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>
              <img src={dog.src} alt={dog.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;