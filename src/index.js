import {
  getLikes,
  getMovies,
  postComments,
  postLikes,
  postReservations,
} from './api.js';
import { display, displayLikes, displayRes } from './comments.js';
import './style.css';

const section1 = document.querySelector('.section1');
const commentSubmit = document.querySelector('.add-comment-form');
const reserveSubmit = document.querySelector('.add-reservation');

const allRes = document.querySelector('.allRes');

document.addEventListener('DOMContentLoaded', async () => {
  getMovies().then((res) => {
    res.forEach((element) => {
      const card = document.createElement('div');
      card.classList.add('cards');

      const image = document.createElement('img');
      image.classList.add('homepage-image');
      image.src = element.image.medium;

      const movieTitle = document.createElement('h3');
      movieTitle.classList.add('homepage-movie-title');
      movieTitle.textContent = element.name;

      const likeButton = document.createElement('button');
      likeButton.type = 'button';
      likeButton.textContent = 'Like';
      likeButton.setAttribute('data-key', `${element.id}`);
      likeButton.setAttribute('data-index-number', '20');

      const noOfLikes = document.createElement('p');
      noOfLikes.classList.add('no-of-likes');
      noOfLikes.textContent = displayLikes(noOfLikes, likeButton.dataset.key);
      if (noOfLikes.textContent === '[object Promise]') {
        noOfLikes.textContent = '0 like';
      }

      const commentButton = document.createElement('button');
      commentButton.type = 'button';
      commentButton.id = 'comment';
      commentButton.textContent = 'Comment';
      commentButton.setAttribute('data-key', `${element.id}`);

      const reserveButton = document.createElement('button');
      reserveButton.type = 'button';
      reserveButton.id = 'reserve';
      reserveButton.textContent = 'Reservation';
      reserveButton.setAttribute('data-key', `${element.id}`);

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


section1.addEventListener('click', async (e) => {
  if (e.target.id === 'comment') {
    const allComms = document.querySelector('.all-comments');
    const dataKey = e.target.dataset.key;
    display(allComms, dataKey);
    const commentsMenu = document.querySelector('.comments-menu');
    commentsMenu.classList.add('comments-menu-poppedup');
    const image = document.querySelector('.movie-img');
    const movieTitle = document.querySelector('.movie-title');
    const rating = document.querySelector('.rating');
    const runtime = document.querySelector('.runtime');
    const premiered = document.querySelector('.premiered');
    const genres = document.querySelector('.genres');
    getMovies().then((res) => {
      res.forEach((mov) => {
        const datakey = parseInt(e.target.dataset.key, 10);
        if (mov.id === datakey) {
          image.src = mov.image.medium;
          movieTitle.textContent = mov.name;
          rating.textContent = `Rating: ${mov.rating.average}`;
          runtime.textContent = `Runtime: ${mov.runtime} minutes`;
          premiered.textContent = `Premiered on ${mov.premiered}`;
          genres.textContent = `Genres: ${mov.genres.join(', ')}`;
        }
      });
    });

    commentSubmit.addEventListener('submit', async (e) => {
      e.preventDefault();
      const user = document.querySelector('.commenter-name').value;
      const insight = document.querySelector('.commenter-insight').value;
      await postComments(dataKey, user, insight);
      await display(allComms, dataKey);
    });
  }
});

section1.addEventListener('click', async (e) => {
  if (e.target.id === 'reserve') {
    const dataKey = e.target.dataset.key;
    await displayRes(allRes, dataKey);
    const reservationMenu = document.querySelector('.reservation-menu');
    reservationMenu.classList.add('reserve-menu-poppedup');
    const image = document.querySelector('.movie-image');
    const movieTitle = document.querySelector('.movie-name');
    const rating = document.querySelector('.des-rating');
    const runtime = document.querySelector('.des-runtime');
    const premiered = document.querySelector('.des-premiered');
    const genres = document.querySelector('.des-genres');
    getMovies().then((res) => {
      res.forEach((mov) => {
        const datakey = parseInt(e.target.dataset.key, 10);
        if (mov.id === datakey) {
          image.src = mov.image.medium;
          movieTitle.textContent = mov.name;
          rating.textContent = `Rating: ${mov.rating.average}`;
          runtime.textContent = `Runtime: ${mov.runtime} minutes`;
          premiered.textContent = `Premiered on ${mov.premiered}`;
          genres.textContent = `Genres: ${mov.genres.join(', ')}`;
        }
      });
    });

    reserveSubmit.addEventListener('submit', async (e) => {
      e.preventDefault();
      const user = document.querySelector('.usname').value;
      const start = document.querySelector('.startDate').value;
      const end = document.querySelector('.endDate').value;
      console.log(start);
      console.log(end);
      await postReservations(dataKey, user, start, end);
      await displayRes(allRes, dataKey);
    });
  }
});

function closeForms() {
  const close = document.querySelector('#times')
const commentsMenu = document.querySelector('.comments-menu');
close.addEventListener('click',()=>{
  commentsMenu.style.display ='none';
  location.reload();
})
}
closeForms();

function closeRes() {
const closer = document.querySelector('#time')
const reservationMenu = document.querySelector('.reservation-menu');
closer.addEventListener('click',()=>{
  reservationMenu.style.display ='none';
  location.reload();
})
}
closeRes();


section1.addEventListener('click', (e) => {
  if (e.target.dataset.indexNumber === '20') {
    const dataKey = e.target.dataset.key;
    const noOfLikes = e.target.nextSibling;
    getMovies().then((res) => {
      res.forEach((mov) => {
        const datakey = parseInt(e.target.dataset.key, 10);
        if (mov.id === datakey) {
          postLikes(dataKey);
          displayLikes(noOfLikes, dataKey);
        }
      });
    });
  }
});
