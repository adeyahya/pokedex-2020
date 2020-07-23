import { gql } from "@apollo/react-hooks";

export const pokemonFragment = gql`
  fragment PokemonFragment on Pokemon {
    id: name
    name
    image
    number
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    classification
    types
    resistant
    attacks {
      fast {
        name
        damage
      }
      special {
        name
        damage
      }
    }
    weaknesses
    fleeRate
    maxCP
    maxHP
    evolutions {
      name
      image
    }
    evolutionRequirements {
      amount
      name
    }
  }
`;
