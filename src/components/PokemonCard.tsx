import { FunctionComponent, useCallback } from 'react';
import Link from 'next/link';
import { PokemonFragment } from '../queries/types/PokemonFragment';
import { SpecsCard } from './SpecsCard';
import { SpecListCard } from './SpecListCard';
import { useRouter } from 'next/dist/client/router';

interface Props {
  pokemon: PokemonFragment | null;
  prefixUrl?: string;
}

export const PokemonCard: FunctionComponent<Props> = ({ pokemon, prefixUrl = '/' }) => {
  const router = useRouter();
  const targetUrl = prefixUrl.concat(pokemon?.id || '');

  const handleClick = useCallback(() => {
    router.push(targetUrl);
  }, [targetUrl]);

  return (
    <div
      onClick={handleClick}
      className="shadow hover:shadow-lg bg-white rounded-lg cursor-pointer"
      data-testid={`pokemon-card-${pokemon?.name}`}
    >
      <figure className="h-20 md:h-32 lg:h-40 flex items-center justify-center pt-4">
        <img
          className="h-full"
          src={pokemon?.image || ''}
          alt={pokemon?.name || ''}
          data-testid="image"
        />
      </figure>
      <div className="p-4">
        <Link href={targetUrl}>
          <a>
            <h3 className="text-lg font-bold mb-0" data-testid="name">
              {pokemon?.name}
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
              minWg: pokemon?.weight?.minimum,
              maxWg: pokemon?.weight?.maximum,
              maxHP: pokemon?.maxHP,
              maxCP: pokemon?.maxCP,
            }}
          />
        </div>
      </div>
    </div>
  );
};
