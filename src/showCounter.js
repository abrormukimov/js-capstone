import { getMovies } from "./api.js";

const showsCounter = async (itemId) => {
  const arrShows = await getMovies(itemId);
  return arrShows.length || 0;
};

class Counter {
  countElements = (array) => array.length

  showCounter = async () => {
    const arrayOfShows = await getMovies();
    return this.countElements(arrayOfShows);
  }

}

const counter = new Counter();
export {counter,showsCounter};
