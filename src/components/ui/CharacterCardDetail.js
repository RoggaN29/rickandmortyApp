import React from "react";

export const CharacterCardDetail = ({characterDetail}) => {

  return (
    <div className="card--detail">
        <h1>{characterDetail.name}</h1>
          <img src={characterDetail.image} className="animate__animated animate__zoomIn" alt={characterDetail.name} />
          <div className="data--character">
            <p className="animate__animated animate__fadeIn">Status: {characterDetail.status} </p>
            <p className="animate__animated animate__fadeIn">Gender: {characterDetail.gender} </p>
            <p className="animate__animated animate__fadeIn">Species: {characterDetail.species} </p>
          </div>
    </div>
  );
};
