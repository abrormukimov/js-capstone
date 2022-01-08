import { getLikes, getComments } from './api.js';

const commentCounter = async (itemId) => {
  const arrComments = await getComments(itemId);
  return arrComments.length || 0;
};

class Counter {
  countElements = (array) => array.length

  commentsCounter = async () => {
    const myArray = await getLikes();
    return this.countElements(myArray);
  }
}

const counter = new Counter();
export { counter, commentCounter };
