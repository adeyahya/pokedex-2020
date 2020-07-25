import { FunctionComponent, useRef, useEffect, memo } from 'react';
import { PokemonCard } from './PokemonCard';
import { PokemonFragment } from '../queries/types/PokemonFragment';

interface Props {
  pokemons: (PokemonFragment | null)[];
  hasMore?: boolean;
  loader?: React.ReactNode;
  onLoadMore?: () => void;
}

export const PokemonListCard: FunctionComponent<Props> = memo(
  ({ pokemons, hasMore, loader, onLoadMore }) => {
    const bottomMarkerNode = useRef<HTMLDivElement | null>(null);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
      if (bottomMarkerNode.current && hasMore && onLoadMore) {
        observer.current = new IntersectionObserver((entries) => {
          const firstEntry = entries[0];
          if (firstEntry.isIntersecting) {
            observer.current?.unobserve(bottomMarkerNode.current as Element);
            onLoadMore();
          }
        });
        observer.current.observe(bottomMarkerNode.current);
      }
    }, [hasMore, onLoadMore]);

    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5 my-10">
          {pokemons?.map((pokemon, idx) => (
            <PokemonCard key={pokemon?.name || idx} pokemon={pokemon} />
          ))}
          <div ref={bottomMarkerNode} />
        </div>
        {hasMore && loader}
      </div>
    );
  }
);
