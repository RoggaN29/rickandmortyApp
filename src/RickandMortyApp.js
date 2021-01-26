import React, {useState} from "react";
import { CharactersList } from "./components/character/CharactersList";
import { SearchBar } from "./components/ui/SearchBar";


export const RickandMortyApp = () => {

  const [character, setCharacter] = useState('');

  return (
    <div className="main--wrapper">
      <img className="logo" src="./assets/Rick_and_Morty.svg" alt="main_image"/>
      <SearchBar setCharacter={setCharacter}/>
      <CharactersList character={character}/>
    </div>
  );
};
