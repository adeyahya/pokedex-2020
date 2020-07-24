import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { SpecsCard } from '../src/components/SpecsCard';

const TEST_DATA = [
  {
    lorem: 'ipsum',
    dolor: 'sit amet',
  },
  {
    balance: '$2,689.95',
    picture: 'http://placehold.it/32x32',
    age: 20,
    eyeColor: 'green',
    name: 'Judy Jordan',
    gender: 'female',
    company: 'HONOTRON',
    email: 'judyjordan@honotron.com',
    phone: '+1 (929) 599-2800',
    address: '120 Cedar Street, Cleary, South Carolina, 6010',
    about:
      'Enim quis cupidatat occaecat irure ad. Occaecat et quis deserunt cupidatat occaecat. Ut voluptate nostrud sit sit pariatur fugiat veniam sint in dolor magna. Est aliquip velit ad est.',
    registered: '2019-08-21T07:13:37 -07:00',
    latitude: -80.107205,
    longitude: -145.617824,
  },
  {
    balance: '$2,824.19',
    picture: 'http://placehold.it/32x32',
    age: 22,
    eyeColor: 'green',
    name: 'Chapman Elliott',
    gender: 'male',
    company: 'INQUALA',
    email: 'chapmanelliott@inquala.com',
    phone: '+1 (982) 584-2658',
    address: '682 Albemarle Terrace, Norfolk, Connecticut, 836',
    about:
      'Ut quis non veniam deserunt ad commodo sint ad deserunt officia. Mollit irure do mollit dolore ex ipsum. Pariatur aliqua eiusmod sint pariatur in adipisicing laborum. Nostrud adipisicing sit commodo incididunt nisi est proident proident. Veniam incididunt pariatur ea nostrud velit esse proident velit nisi ullamco enim est ipsum. Minim fugiat consectetur irure Lorem tempor culpa non incididunt consectetur nostrud duis et culpa. Occaecat ea in commodo adipisicing quis nisi eiusmod ipsum incididunt voluptate magna incididunt consequat.',
    registered: '2017-12-10T06:10:17 -07:00',
    latitude: 12.094641,
    longitude: -146.532637,
  },
  {
    balance: '$1,399.49',
    picture: 'http://placehold.it/32x32',
    age: 34,
    eyeColor: 'green',
    name: 'Payne Mcintyre',
    gender: 'male',
    company: 'VITRICOMP',
    email: 'paynemcintyre@vitricomp.com',
    phone: '+1 (895) 568-2713',
    address: '498 Adler Place, Jennings, Montana, 9912',
    about:
      'Duis sunt est veniam pariatur reprehenderit labore eiusmod Lorem anim minim magna esse est. Minim esse sunt dolore ad cupidatat sit dolor et quis. Minim culpa ea ex proident sit eu enim elit sunt ex velit enim ut exercitation. Amet irure non dolore commodo. Et excepteur occaecat tempor esse proident laborum elit voluptate. Duis esse reprehenderit incididunt incididunt. Fugiat ipsum culpa ipsum quis voluptate dolore ullamco irure ullamco duis do veniam id fugiat.',
    registered: '2020-02-07T09:25:17 -07:00',
    latitude: 38.790646,
    longitude: 138.844174,
  },
  {
    balance: '$2,330.39',
    picture: 'http://placehold.it/32x32',
    age: 37,
    eyeColor: 'blue',
    name: 'Burks Stevens',
    gender: 'male',
    company: 'POSHOME',
    email: 'burksstevens@poshome.com',
    phone: '+1 (943) 465-3521',
    address: '292 Malbone Street, Carlton, Colorado, 6591',
    about:
      'Nisi excepteur enim fugiat sit enim deserunt ex occaecat aliqua enim. Enim est enim sit aliqua mollit eiusmod quis voluptate pariatur incididunt. Occaecat velit cupidatat mollit officia. Occaecat do sit sit esse elit minim proident reprehenderit dolor veniam commodo. Reprehenderit exercitation fugiat nostrud sit ad eu.',
    registered: '2016-08-01T04:14:54 -07:00',
    latitude: 24.251819,
    longitude: -64.015765,
  },
  {
    balance: '$3,168.20',
    picture: 'http://placehold.it/32x32',
    age: 40,
    eyeColor: 'blue',
    name: 'Merritt Lucas',
    gender: 'male',
    company: 'POLARIA',
    email: 'merrittlucas@polaria.com',
    phone: '+1 (992) 436-2029',
    address: '489 Brightwater Court, Rockhill, Florida, 9295',
    about:
      'Labore nostrud nulla adipisicing reprehenderit sit. Anim cupidatat incididunt sint est velit in deserunt fugiat sunt laboris id adipisicing. Incididunt enim ad est consequat amet exercitation consequat aliqua. Nostrud culpa consequat ut officia aliquip pariatur dolor sunt cupidatat.',
    registered: '2020-01-19T02:17:47 -07:00',
    latitude: 33.595557,
    longitude: 103.094224,
  },
  {
    balance: '$2,699.97',
    picture: 'http://placehold.it/32x32',
    age: 40,
    eyeColor: 'brown',
    name: 'Lois Dyer',
    gender: 'female',
    company: 'NIKUDA',
    email: 'loisdyer@nikuda.com',
    phone: '+1 (924) 429-3954',
    address: '133 Ford Street, Lemoyne, California, 7678',
    about:
      'Qui cupidatat est irure magna nulla commodo mollit ea dolor. Ut tempor veniam duis excepteur ea qui. Exercitation incididunt laboris cillum tempor fugiat aliquip aute.',
    registered: '2016-03-02T04:10:04 -07:00',
    latitude: -31.919402,
    longitude: 120.421994,
  },
];

describe('Specs Card', () => {
  test.each(TEST_DATA)('renders correctly for case %#', (specs) => {
    render(<SpecsCard specs={specs} />);
    expect(screen).toMatchSnapshot();
    for (const key in specs) {
      expect(screen.getByText(key)).toBeInTheDocument();
      expect(screen.getByText(String((specs as any)[key] || ''))).toBeInTheDocument();
    }
  });
});
