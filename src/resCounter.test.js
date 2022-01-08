import { reservationCounter } from './resCounter.js';

const array = [{
  username: 'Finn',
  date_start: '2022-1-1',
  date_end: '2022-2-1',
},
{
  username: 'Finnn',
  date_start: '2022-1-1',
  date_end: '2022-2-1',

},
{
  username: 'Finn',
  date_start: '2022-1-1',
  date_end: '2022-2-1',
},
{
  username: 'Finn',
  date_start: '2022-1-1',
  date_end: '2022-2-1',
},
];
global.fetch = jest.fn(() => Promise.resolve({
  status: 200,
  json() {
    return array;
  },
}));
describe('Reservation Count', () => {
  test('the number of reservations', async () => {
    const result = await reservationCounter('itemId');
    expect(result).toBe(4);
  });
});