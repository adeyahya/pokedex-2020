/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PokemonFragment
// ====================================================

export interface PokemonFragment_weight {
  __typename: "PokemonDimension";
  /**
   * The minimum value of this dimension
   */
  minimum: string | null;
  /**
   * The maximum value of this dimension
   */
  maximum: string | null;
}

export interface PokemonFragment_height {
  __typename: "PokemonDimension";
  /**
   * The minimum value of this dimension
   */
  minimum: string | null;
  /**
   * The maximum value of this dimension
   */
  maximum: string | null;
}

export interface PokemonFragment_attacks_fast {
  __typename: "Attack";
  /**
   * The name of this Pokémon attack
   */
  name: string | null;
  /**
   * The damage of this Pokémon attack
   */
  damage: number | null;
}

export interface PokemonFragment_attacks_special {
  __typename: "Attack";
  /**
   * The name of this Pokémon attack
   */
  name: string | null;
  /**
   * The damage of this Pokémon attack
   */
  damage: number | null;
}

export interface PokemonFragment_attacks {
  __typename: "PokemonAttack";
  /**
   * The fast attacks of this Pokémon
   */
  fast: (PokemonFragment_attacks_fast | null)[] | null;
  /**
   * The special attacks of this Pokémon
   */
  special: (PokemonFragment_attacks_special | null)[] | null;
}

export interface PokemonFragment_evolutions {
  __typename: "Pokemon";
  /**
   * The name of this Pokémon
   */
  name: string | null;
  image: string | null;
}

export interface PokemonFragment_evolutionRequirements {
  __typename: "PokemonEvolutionRequirement";
  /**
   * The amount of candy to evolve
   */
  amount: number | null;
  /**
   * The name of the candy to evolve
   */
  name: string | null;
}

export interface PokemonFragment {
  __typename: "Pokemon";
  /**
   * The name of this Pokémon
   */
  id: string | null;
  /**
   * The name of this Pokémon
   */
  name: string | null;
  image: string | null;
  /**
   * The identifier of this Pokémon
   */
  number: string | null;
  /**
   * The minimum and maximum weight of this Pokémon
   */
  weight: PokemonFragment_weight | null;
  /**
   * The minimum and maximum weight of this Pokémon
   */
  height: PokemonFragment_height | null;
  /**
   * The classification of this Pokémon
   */
  classification: string | null;
  /**
   * The type(s) of this Pokémon
   */
  types: (string | null)[] | null;
  /**
   * The type(s) of Pokémons that this Pokémon is resistant to
   */
  resistant: (string | null)[] | null;
  /**
   * The attacks of this Pokémon
   */
  attacks: PokemonFragment_attacks | null;
  /**
   * The type(s) of Pokémons that this Pokémon weak to
   */
  weaknesses: (string | null)[] | null;
  fleeRate: number | null;
  /**
   * The maximum CP of this Pokémon
   */
  maxCP: number | null;
  /**
   * The maximum HP of this Pokémon
   */
  maxHP: number | null;
  /**
   * The evolutions of this Pokémon
   */
  evolutions: (PokemonFragment_evolutions | null)[] | null;
  /**
   * The evolution requirements of this Pokémon
   */
  evolutionRequirements: PokemonFragment_evolutionRequirements | null;
}
