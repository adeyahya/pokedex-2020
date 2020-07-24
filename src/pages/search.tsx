import { FunctionComponent, useCallback, useState, ChangeEvent } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { debounce } from 'lodash';

import { PokemonListCard } from '../components/PokemonListCard';
import { getPokemon, getPokemonVariables } from '../queries/types/getPokemon';
import { getPokemonQuery } from '../queries/getPokemon.query';
import { usePokemonCacheFilter } from '../hooks/usePokemonCacheFilter';
import { PokemonFragment } from '../queries/types/PokemonFragment';
import { SearchIcon } from '../components/SearchIcon';
import { FourOFourIcon } from '../components/FourOFourIcon';
import Head from 'next/head';

const Index: FunctionComponent = () => {
  const [keyword, setKeyword] = useState('');
  const [delayedKeyword, setDelayedKeyword] = useState('');
  const filteredPokemonsFromCache = usePokemonCacheFilter(delayedKeyword);

  const delayedKeywordHandler = debounce((keyword) => setDelayedKeyword(keyword), 500);

  const handleKeywordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
    delayedKeywordHandler(e.currentTarget.value);
  }, []);

  const { data, loading } = useQuery<getPokemon, getPokemonVariables>(getPokemonQuery, {
    skip: filteredPokemonsFromCache.length !== 0,
    variables: {
      id: delayedKeyword,
    },
  });

  const pokemonFromNetwork = data?.pokemon;

  return (
    <div className="max-w-screen-xl mx-auto">
      <Head>
        <title>Search Pokemon | Pokedex</title>
      </Head>
      <header className="text-center mt-5 px-5">
        <input
          value={keyword}
          onChange={handleKeywordChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Keyword"
        />
      </header>
      {loading ? (
        <div className="text-center mt-10 mx-auto max-w-sm">
          <SearchIcon />
          <span className="block mt-5 text-lg">looking pokemon from network ...</span>
        </div>
      ) : filteredPokemonsFromCache.length || pokemonFromNetwork ? (
        <>
          <span
            className="text-xl block mt-5 px-5 font-bold italic text-gray-600"
            style={{ marginBottom: '-2rem' }}
          >
            {filteredPokemonsFromCache.length || '1'} pokemon found
          </span>
          <PokemonListCard
            pokemons={
              filteredPokemonsFromCache.length
                ? filteredPokemonsFromCache
                : pokemonFromNetwork
                ? [pokemonFromNetwork as PokemonFragment]
                : []
            }
          />
        </>
      ) : (
        <div className="text-center mt-10 mx-auto max-w-sm">
          <FourOFourIcon />
          <span className="block mt-5 text-lg">can&apos;t find anything from network ...</span>
        </div>
      )}
    </div>
  );
};

export default Index;
