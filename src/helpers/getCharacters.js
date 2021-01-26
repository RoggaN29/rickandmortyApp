import { getCharacter } from 'rickmortyapi';

export const getCharacters = async(character) => {
  const {info, results} = await getCharacter({
    name: `${ encodeURI(character)}`
  })

  const characters = results.map( char => {
    return {
      id: char.id,
      name: char.name,
      image: char.image,
      gender: char.gender,
      species: char.species,
      status: char.status
    }
  })

  return {info, characters};
}