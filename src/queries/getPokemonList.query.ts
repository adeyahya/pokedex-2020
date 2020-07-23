import { gql } from '@apollo/react-hooks';
import { pokemonFragment } from './pokemon.fragment';

export const getPokemonListQuery = gql`
  query getPokemonList($first: Int!, $offset: Int, $after: String) {
    pokemons(first: $first, offset: $offset, after: $after) {
      items {
        ...PokemonFragment
      }
      first
      offset
    }
  }
  ${pokemonFragment}
`;
