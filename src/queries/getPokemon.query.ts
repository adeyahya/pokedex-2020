import { gql } from '@apollo/react-hooks';
import { pokemonFragment } from './pokemon.fragment';

export const getPokemonQuery = gql`
  query getPokemon($id: String) {
    pokemon(name: $id) {
      ...PokemonFragment
    }
  }

  ${pokemonFragment}
`;
