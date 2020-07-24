import { FunctionComponent } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { getPokemonListQuery } from '../queries/getPokemonList.query';
import { getPokemonList, getPokemonListVariables } from '../queries/types/getPokemonList';
import { PokemonCard } from '../components/PokemonCard';

const Index: FunctionComponent = () => {
  const { data } = useQuery<getPokemonList, getPokemonListVariables>(getPokemonListQuery, {
    variables: {
      first: 12,
    },
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 px-5 my-10">
      {data?.pokemons?.items?.map((pokemon, idx) => (
        <PokemonCard prefixUrl="/pokemon/" key={pokemon?.name || idx} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Index;
