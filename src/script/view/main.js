import '../components/search-bar.js';
import DataSource from '../data/data-source.js';
const main =() => {
  const searchElement = document.querySelector('search-bar');
  const movieListElement = document.querySelector('#movieList');
  
  const onButtonSearchClicked = () => {
    DataSource.searchMovie(searchElement.value)
    .then(renderResult)
    .catch(fallbackResult);
  };
 
  const renderResult = results => {
    movieListElement.innerHTML = '';
    results.forEach(movie => {
      
      const {name, poster, description} = movie;
      const movieElement = document.createElement('div');
      movieElement.setAttribute('class', 'movie');

      movieElement.innerHTML = `
      <img class="poster" src="${poster}" alt="poster">
      <div class="movie-info">
        <h2>${name}</h2>
        <p>${description}</p>
      </div>
    `;
 
      movieListElement.appendChild(movieElement);
    });
  };
  
  const fallbackResult = message => {
    movieListElement.innerHTML = '';
    movieListElement.innerHTML += `<h2 class="placeholder">${message} </h2>`;
  };
 
  searchElement.clickEvent = onButtonSearchClicked ;
};

export default main;