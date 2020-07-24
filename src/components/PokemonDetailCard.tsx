/* eslint-disable @typescript-eslint/ban-ts-comment */
import Link from 'next/link';
import { FunctionComponent, memo } from 'react';
import { SpecListCard } from './SpecListCard';
import { SpecsCard } from './SpecsCard';
import { PokemonFragment } from '../queries/types/PokemonFragment';

interface Props {
  pokemon: PokemonFragment | null;
}

export const PokemonDetailCard: FunctionComponent<Props> = memo(({ pokemon }) => {
  const fastAttacks: Record<string, string> = (pokemon?.attacks?.fast || []).reduce((acc, curr) => {
    const { name = 'unknown', damage = 'unknown' } = curr || {};
    // @ts-ignore: it still syas that name can be null even after adding default value
    acc[name] = damage?.toString().concat(' Damage');
    return acc;
  }, {} as Record<string, string>);

  const specialAttacks: Record<string, string> = (pokemon?.attacks?.special || []).reduce(
    (acc, curr) => {
      const { name = 'unknown', damage = 'unknown' } = curr || {};
      // @ts-ignore: it still syas that name can be null even after adding default value
      acc[name] = damage?.toString().concat(' Damage');
      return acc;
    },
    {} as Record<string, string>
  );

  return (
    <div data-testid="pokemon-detail-card" className="bg-white rounded-lg overflow-hidden">
      <div className="px-5 grid md:grid-cols-2 gap-4 pt-5 pb-10">
        <div className="flex flex-col justify-center items-center pt-5">
          <figure className="flex flex-center justify-center">
            <img data-testid="image" src={pokemon?.image || ''} alt={pokemon?.name || ''} />
          </figure>
          <div
            data-testid="evolutions"
            className="flex flex-1 w-full flex-row items-center justify-center; md:items-start md:px-5 mt-10"
          >
            {pokemon?.evolutions?.map((evolution, idx) => (
              <Link key={evolution?.name || idx} href={`/pokemon?pid=${evolution?.name || ''}`}>
                <a className="justify-between w-1/2 px-5 md:px-0 md:justify-start md:px-auto md:mr-5">
                  <img
                    data-testid="evolution-image"
                    className="md:h-32"
                    src={evolution?.image || ''}
                    alt={evolution?.name || ''}
                  />
                  <span data-testid="evolution-name" className="text-lg font-bold block mt-2">
                    {evolution?.name}
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <section className="md:pl-5">
          <header className="mb-4">
            <h2 data-testid="name" className="text-4xl text-bold">
              {pokemon?.name} <span className="text-gray-500">#{pokemon?.number}</span>
            </h2>
            <span data-testid="classification" className="text-lg italic">
              {pokemon?.classification}
            </span>
          </header>
          <SpecListCard label="Types" list={pokemon?.types || []} />
          <div className="mb-2" />
          <SpecListCard label="Weaknesses" list={pokemon?.weaknesses || []} />
          <div className="mb-2" />
          <SpecListCard label="Resistant" list={pokemon?.resistant || []} />
          <div className="mt-4 mb-4">
            <h4 className="text-xl font-bold">Combat</h4>
            <div className="mb-2" />
            <span className="font-lg font-bold">Fast Attack</span>
            <SpecsCard specs={fastAttacks} />
            <span className="block font-lg font-bold mt-4">Special Attack</span>
            <SpecsCard specs={specialAttacks} />
          </div>
          <div>
            <h4 className="text-xl font-bold">Attributes</h4>
            <SpecsCard
              specs={{
                MaxHp: pokemon?.maxHP,
                MaxCP: pokemon?.maxCP,
                MaxWeight: pokemon?.weight?.maximum,
                MinWeight: pokemon?.weight?.minimum,
                MaxHeight: pokemon?.height?.maximum,
                MinHeight: pokemon?.height?.minimum,
                FleeRate: pokemon?.fleeRate,
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
});
