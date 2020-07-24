import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { SpecListCard } from '../src/components/SpecListCard';

const TEST_DATA = [
  [['excepteur', 'ea', 'tempor', 'do', 'ex', 'duis', 'eiusmod']],
  [['cillum', 'eiusmod', 'irure', 'culpa', 'dolore', 'tempor', 'in']],
  [['anim', 'est', 'sit', 'ad', 'veniam', 'duis', 'elit']],
  [['non', 'aliquip', 'dolore', 'deserunt', 'incididunt', 'eiusmod', 'reprehenderit']],
  [['culpa', 'sint', 'dolore', 'exercitation', 'irure', 'veniam']],
  [['occaecat', 'voluptate', 'non', 'nostrud', 'proident']],
];

describe('SpecList Card', () => {
  test.each(TEST_DATA)('renders correctly for case %#', (list) => {
    const label = list[0].concat('-').concat(list[1]);
    render(<SpecListCard list={list} label={label} />);
    expect(screen.getByTestId(`spec-list-${label}`)).toMatchSnapshot();
    expect(
      screen.getByTestId(`spec-list-${label}`).querySelector('[data-testid="spec-list-label"]')
        ?.innerHTML
    ).toEqual(label);
    list.forEach((item) => {
      expect(screen.getByText(item).getAttribute('data-testid')).toEqual('spec-list-value');
    });
  });
});
