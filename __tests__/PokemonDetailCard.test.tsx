import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import TEST_DATA from './__testdata__/PokemonCard.json';
import { PokemonFragment } from '../src/queries/types/PokemonFragment';
import { PokemonDetailCard } from '../src/components/PokemonDetailCard';

describe('Pokemon Detail Card', () => {
  test.each(TEST_DATA)('renders correctly for case %#', (pokemon) => {
    const { name, image, evolutions } = pokemon;
    render(<PokemonDetailCard pokemon={pokemon as PokemonFragment} />);
    const root = screen.getByTestId(`pokemon-detail-card`);
    const nameInNode = root.querySelector('[data-testid=name]')?.innerHTML;
    const evolutionsNode = root.querySelector('[data-testid=evolutions]');
    const imageNode = root.querySelector('[data-testid=image]')?.getAttribute('src');
    expect(root).toMatchSnapshot();
    expect(nameInNode).toContain(name);
    expect(imageNode).toEqual(image);
    if (evolutions) {
      const names = Array.from(
        evolutionsNode?.querySelectorAll('[data-testid=evolution-name]') || []
      )?.map((node) => node.innerHTML);

      evolutionsNode
        ?.querySelectorAll<HTMLImageElement>('[data-testid=evolution-image]')
        ?.forEach((node) => {
          expect(evolutions.map((evo) => evo.image)).toContain(node.src);
        });
      expect(names).toStrictEqual(evolutions.map((evo) => evo.name));
    }
  });
});
