/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { getPokemonQuery } from '../queries/getPokemon.query';
import { PokemonFragment } from '../queries/types/PokemonFragment';

const filterArrLike = (array: string[], keyword: string) => {
  return array.filter((key) => {
    return (
      key.match(/Pokemon:\w+$/) &&
      key.toLocaleLowerCase().includes(`:${keyword.toLocaleLowerCase()}`)
    );
  });
};

const filterArrNot = (array: string[], keyword: string) => {
  return array.filter((key) => {
    return (
      key.match(/Pokemon:\w+$/) &&
      !key.toLocaleLowerCase().includes(`:${keyword.toLocaleLowerCase()}`)
    );
  });
};

export const usePokemonCacheFilter = (name: string, operator: 'not' | 'like' = 'like') => {
  const apolloClient = useApolloClient();
  const [pokemons, setPokemons] = useState<PokemonFragment[]>([]);

  useEffect(() => {
    // @ts-ignore: all negative case already handled
    const keys = Object.keys(apolloClient.cache?.data?.data || []);
    const filteredKeys = (() => {
      switch (operator) {
        case 'not':
          return filterArrNot(keys, name);
        default:
          return filterArrLike(keys, name);
      }
    })();
    const result = filteredKeys.map((key) => {
      const identifier = key.replace('Pokemon:', '');
      return (
        apolloClient.readQuery({ query: getPokemonQuery, variables: { id: identifier } })
          ?.pokemon || {}
      );
    });
    setPokemons(result);
  }, [name, operator]);

  return pokemons;
};
