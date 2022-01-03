import getMovies from './api.js';
import './style.css';

const section1 = document.querySelector('.section1');

document.addEventListener('DOMContentLoaded', () => {
  // e.preventDefault();
  getMovies().then((res) => {
    res.forEach((element) => {
      const card = document.createElement('div');
      card.classList.add('cards');

      const image = document.createElement('img')
      image.classList.add('homepage-image');
      image.src = element.image.medium;

      const movieTitle = document.createElement('h3');
      movieTitle.classList.add('homepage-movie-title');
      movieTitle.textContent = element.name;

      const likeButton = document.createElement('button');
      likeButton.type = 'button';
      likeButton.id = 'likes';
      likeButton.textContent = 'Like';

      const noOfLikes = document.createElement('p');
      noOfLikes.classList.add('no-of-likes');
      noOfLikes.textContent = '5 likes';

      const commentButton = document.createElement('button');
      commentButton.type = 'button';
      commentButton.id = 'comment';
      commentButton.textContent = 'Comment';

      const reserveButton = document.createElement('button');
      reserveButton.type = 'button';
      reserveButton.id = 'reserve';
      reserveButton.textContent = 'Reservation';

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
