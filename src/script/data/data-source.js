import movies from './movies.js';

class DataSource {
   static searchMovie(keyword) {
    return new Promise ((resolve, reject) =>{
    const filteredMovies = movies.filter(movie => movie.name.toUpperCase().includes(keyword.toUpperCase()));

    if (filteredMovies.length) {
      this.onSuccess(filteredMovies);
    } else {
      this.onFailed(`${keyword} is not found`);
    }
  });

  }
}
export default DataSource;
