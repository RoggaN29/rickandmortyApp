import React, {useState} from "react";
import { CharactersList } from "./components/character/CharactersList";
import { SearchBar } from "./components/ui/SearchBar";
import logo from './assets/Rick_and_Morty.svg';


export const RickandMortyApp = () => {

  const [character, setCharacter] = useState('');

  return (
    <div className="main--wrapper">
      <img className="logo" src={logo} alt="main_image"/>
      <SearchBar setCharacter={setCharacter}/>
      <CharactersList character={character}/>
    </div>
  );
};
