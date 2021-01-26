import { getCharacter } from 'rickmortyapi';

export const getCharacterById = async(characterId) => {

  const {id, name, image, gender, species, status}  = await getCharacter(Number(characterId))

  return {id, name, image, gender, species, status};

}