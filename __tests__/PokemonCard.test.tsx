import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { PokemonCard } from '../src/components/PokemonCard';
import TEST_DATA from './__testdata__/PokemonCard.json';
import { PokemonFragment } from '../src/queries/types/PokemonFragment';

describe('Pokemon Card', () => {
  test.each(TEST_DATA)('renders correctly for case %#', (pokemon) => {
    const { name, image } = pokemon;
    render(<PokemonCard pokemon={pokemon as PokemonFragment} />);
    const root = screen.getByTestId(`pokemon-card-${name}`);
    const nameInNode = root.querySelector('[data-testid=name]')?.innerHTML;
    const anchorNode = root.querySelector('a')?.getAttribute('href');
    const imageNode = root.querySelector('[data-testid=image]')?.getAttribute('src');
    expect(root).toMatchSnapshot();
    expect(nameInNode).toEqual(name);
    expect(anchorNode).toEqual(`/${name}`);
    expect(imageNode).toEqual(image);
  });
});
