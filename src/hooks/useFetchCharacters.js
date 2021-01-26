import { useEffect, useState } from "react";
import { getCharacterById } from "../helpers/getCharacterById";
import { getCharacters } from "../helpers/getCharacters";

export const useFetchCharacters = (character) => {
  const [state, setState] = useState({
    info: {},
    results: [],
    loading: true,
  });

  useEffect(() => {
    setState({
      info: {},
      results: [],
      loading: true,
    });
    getCharacters(character)
      .then((response) => {
          setTimeout(() => {
            setState({
              info: response.info,
              results: response.characters,
              loading: false,
            });
          }, 1000);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición:" + error.message);
      });
  }, [character]);

  return state;
};

export const useFetchCharacterDetail = (characterId) => {
  const [state, setState] = useState({});

  useEffect(() => {
    getCharacterById(characterId)
      .then((character) => {
            setState(
              character
            );
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición:" + error.message);
      });
  }, [characterId]);

  return state;
};