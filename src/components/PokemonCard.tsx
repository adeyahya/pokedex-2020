import { FunctionComponent, useCallback } from 'react';
import Link from 'next/link';
import { PokemonFragment } from '../queries/types/PokemonFragment';
import { SpecsCard } from './SpecsCard';
import { SpecListCard } from './SpecListCard';
import { useRouter } from 'next/dist/client/router';

interface Props {
  pokemon: PokemonFragment | null;
}

export const PokemonCard: FunctionComponent<Props> = ({ pokemon }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/pokemon?pid=${pokemon?.id || ''}`, `/pokemon/${pokemon?.id || ''}`);
  }, [pokemon]);

  return (
    <div
      onClick={handleClick}
      className="shadow hover:shadow-lg bg-white rounded-lg cursor-pointer"
      data-testid={`pokemon-card-${pokemon?.name}`}
    >
      <figure className="h-40 md:h-32 lg:h-40 flex items-center justify-center pt-4">
        <img
          className="h-full"
          src={pokemon?.image || ''}
          alt={pokemon?.name || ''}
          data-testid="image"
        />
      </figure>
      <div className="p-4">
        <Link href={`/pokemon?pid=${pokemon?.id || ''}`} as={`/pokemon/${pokemon?.id || ''}`}>
          <a>
            <h3 className="text-lg font-bold mb-0" data-testid="name">
              {pokemon?.name} <span className="text-gray-500">#{pokemon?.number}</span>
            </h3>
          </a>
        </Link>
        <span className="text-sm italic mb-2 block" data-testid="classification">
          {pokemon?.classification}
        </span>
        <div className="mb-3">
          <SpecListCard list={pokemon?.types || []} label="types" />
        </div>
        <div className="mt-2">
          <SpecsCard
            specs={{
              MinWg: pokemon?.weight?.minimum,
              MaxWg: pokemon?.weight?.maximum,
              MaxHP: pokemon?.maxHP,
              MaxCP: pokemon?.maxCP,
            }}
          />
        </div>
      </div>
    </div>
  );
};
