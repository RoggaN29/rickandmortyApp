import React from "react";
import { Link } from "react-router-dom";

export const CharacterCard = ({ id, name, image, gender, species, status }) => {
  return (
    <div className="card">
      <img
        src={image}
        className="animate__animated animate__zoomIn"
        alt={name}
      />
      <div className="data--character">
        <h5 className="animate__animated animate__fadeI"> {name} </h5>
        <Link className="animate__animated animate__fadeI" to={`./${id}`}>Ver más</Link>
      </div>
    </div>
  );
};
