import { getReservation } from "./api.js";

const reservationCounter = async (itemId) => {
  const arrayReservation = await getReservation(itemId);
  return arrayReservation.length || 0;
};

class Counter {
  countElements = (array) => array.length

  resCounter = async () => {
    const arrShows = await getReservation();
    return this.countElements(arrShows);
  }

}

const counter = new Counter();
export {counter, reservationCounter};


