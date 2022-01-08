import { showsCounter } from './showCounter.js';
const array = [1,2,3,4,5]
global.fetch = jest.fn(() => Promise.resolve({
  status: 200,
  json() {
    return array;
  },
}));
describe('Show Count', () => {
  test('the number of shows', async () => {
    const result = await showsCounter('itemId');
    expect(result).toBe(5);
  });
});