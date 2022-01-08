import { commentCounter } from './commentCounter.js';

const array = [{
  creation_date: '21-12-2021',
  username: 'Mikes',
  comment: 'Hi there',
},
{
  creation_date: '21-12-2021',
  username: 'Mike',
  comment: 'Hi there',
},
{
  creation_date: '21-12-2021',
  username: 'Mike',
  comment: 'Hi there',
},
];
global.fetch = jest.fn(() => Promise.resolve({
  status: 200,
  json() {
    return array;
  },
}));

describe('Comments Count', () => {
  test('the number of comments', async () => {
    const result = await commentCounter('itemId');
    expect(result).toBe(3);
  });
});