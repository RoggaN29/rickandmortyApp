import React from "react";
import { useFetchCharacters } from "../../hooks/useFetchCharacters";
import { CharacterCard } from "../ui/CharacterCard";

export const CharactersList = ({ character }) => {
  const { results: filteredCharacters, loading } = useFetchCharacters(
    character
  );

  // if (filteredCharacters.length === 0) {
  //   return <Redirect to='/'/>
  // }

  return (
    <>
      {loading && (
        <div className="loader--wapper">
          <div className="loader"></div>
        </div>
      )}

      <div className="cards--wrapper">
        {filteredCharacters.map((item) => {
          return (
            <CharacterCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              gender={item.gender}
              species={item.species}
              status={item.status}
            />
          );
        })}
      </div>
    </>
  );
};
