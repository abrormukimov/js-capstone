import {
  getComments,
  getMovies,
  postComments,
  postReservations,
  getRes,
} from "./api.js";
import { display, displayRes } from "./comments.js";
import "./style.css";

const section1 = document.querySelector(".section1");
const commentSubmit = document.querySelector(".add-comment-form");
const reserveSubmit = document.querySelector(".add-reservation");

const allComms = document.querySelector(".all-comments");
const allRes = document.querySelector(".allRes");

document.addEventListener("DOMContentLoaded", () => {
  getMovies().then((res) => {
    res.forEach((element) => {
      const card = document.createElement("div");
      card.classList.add("cards");

      const image = document.createElement("img");
      image.classList.add("homepage-image");
      image.src = element.image.medium;

      const movieTitle = document.createElement("h3");
      movieTitle.classList.add("homepage-movie-title");
      movieTitle.textContent = element.name;

      const likeButton = document.createElement("button");
      likeButton.type = "button";
      likeButton.id = "likes";
      likeButton.textContent = "Like";

      const noOfLikes = document.createElement("p");
      noOfLikes.classList.add("no-of-likes");
      noOfLikes.textContent = "5 likes";

      const commentButton = document.createElement("button");
      commentButton.type = "button";
      commentButton.id = "comment";
      commentButton.textContent = "Comment";
      commentButton.setAttribute("data-key", `${element.id}`);

      const reserveButton = document.createElement("button");
      reserveButton.type = "button";
      reserveButton.id = "reserve";
      reserveButton.textContent = "Reservation";
      reserveButton.setAttribute("data-key", `${element.id}`);

      card.appendChild(image);
      card.appendChild(movieTitle);
      card.appendChild(likeButton);
      card.appendChild(noOfLikes);
      card.appendChild(commentButton);
      card.appendChild(reserveButton);
      section1.appendChild(card);
    });
  });
});

section1.addEventListener("click", async (e) => {
  if (e.target.id === "comment") {
    const dataKey = e.target.dataset.key;
    display(allComms, dataKey);
    const commentsMenu = document.querySelector(".comments-menu");
    commentsMenu.classList.add("comments-menu-poppedup");
    const image = document.querySelector(".movie-img");
    const movieTitle = document.querySelector(".movie-title");
    const rating = document.querySelector(".rating");
    const runtime = document.querySelector(".runtime");
    const premiered = document.querySelector(".premiered");
    const genres = document.querySelector(".genres");
    getMovies().then((res) => {
      res.forEach((mov) => {
        const datakey = parseInt(e.target.dataset.key, 10);
        if (mov.id === datakey) {
          image.src = mov.image.medium;
          movieTitle.textContent = mov.name;
          rating.textContent = `Rating: ${mov.rating.average}`;
          runtime.textContent = `Runtime: ${mov.runtime} minutes`;
          premiered.textContent = `Premiered on ${mov.premiered}`;
          genres.textContent = `Genres: ${mov.genres.join(", ")}`;
        }
      });
    });

    commentSubmit.addEventListener("submit", async (e) => {
      e.preventDefault();
      const user = document.querySelector(".commenter-name").value;
      const insight = document.querySelector(".commenter-insight").value;
      await postComments(dataKey, user, insight);
      await display(allComms, dataKey);
    });
  }
  if (e.target.id === "reserve") {
    const dataKey = e.target.dataset.key;
    await displayRes(allRes, dataKey);
    console.log(dataKey);
    const reservationMenu = document.querySelector(".reservation-menu");
    reservationMenu.classList.add("reserve-menu-poppedup");
    const image = document.querySelector(".movie-img");
    const movieTitle = document.querySelector(".movie-title");
    const rating = document.querySelector(".rating");
    const runtime = document.querySelector(".runtime");
    const premiered = document.querySelector(".premiered");
    const genres = document.querySelector(".genres");
    getMovies().then((res) => {
      res.forEach((mov) => {
        const datakey = parseInt(e.target.dataset.key, 10);
        if (mov.id === datakey) {
          image.src = mov.image.medium;
          movieTitle.textContent = mov.name;
          rating.textContent = `Rating: ${mov.rating.average}`;
          runtime.textContent = `Runtime: ${mov.runtime} minutes`;
          premiered.textContent = `Premiered on ${mov.premiered}`;
          genres.textContent = `Genres: ${mov.genres.join(", ")}`;
        }
      });
    });
    reserveSubmit.addEventListener("submit", async (e) => {
      e.preventDefault();
      const user = document.querySelector(".usname").value;
      const start = document.querySelector(".startDate").value;
      const end = document.querySelector(".endDate").value;
      await postComments(dataKey, user, start, end);
      await display(allRes, dataKey);
    });
  }
});
