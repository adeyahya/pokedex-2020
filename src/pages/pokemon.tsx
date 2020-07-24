/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FunctionComponent } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useQuery } from '@apollo/react-hooks';
import { getPokemonQuery } from '../queries/getPokemon.query';
import { getPokemon, getPokemonVariables } from '../queries/types/getPokemon';
import { PokemonDetailCard } from '../components/PokemonDetailCard';
import { PokemonFragment } from '../queries/types/PokemonFragment';
import { getPokemonList, getPokemonListVariables } from '../queries/types/getPokemonList';
import { getPokemonListQuery } from '../queries/getPokemonList.query';
import { PokemonListCard } from '../components/PokemonListCard';
import { usePokemonCacheFilter } from '../hooks/usePokemonCacheFilter';
import Head from 'next/head';

const PAGINATION_PAGE_SIZE = 12;

const PokemonDetailPage: FunctionComponent = () => {
  const router = useRouter();

  const id = String(router.query?.pid) || 'unknown';
  const { data } = useQuery<getPokemon, getPokemonVariables>(getPokemonQuery, {
    variables: {
      id,
    },
  });

  const othersPokemonFromCache = usePokemonCacheFilter(id, 'not');

  const { data: othersPokemonData } = useQuery<getPokemonList, getPokemonListVariables>(
    getPokemonListQuery,
    {
      skip: othersPokemonFromCache.length !== 0,
      variables: {
        first: PAGINATION_PAGE_SIZE,
        after: id,
      },
    }
  );

  const pokemon = data?.pokemon;
  const othersPokemon = othersPokemonData?.pokemons?.items || othersPokemonFromCache || [];

  return (
    <div className="px-2 max-w-screen-lg mx-auto">
      <Head>
        <title>{pokemon?.name} | Pokedex</title>
      </Head>
      <PokemonDetailCard pokemon={pokemon as PokemonFragment} />
      <h2 className="text-4xl font-bold px-5 mt-10" style={{ marginBottom: '-30px' }}>
        Others Pokemon
      </h2>
      <PokemonListCard pokemons={othersPokemon} />
    </div>
  );
};

export default PokemonDetailPage;
