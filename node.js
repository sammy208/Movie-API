class Movie {
    constructor(title, genre, availableCopies) {
      this.title = title;
      this.genre = genre;
      this.availableCopies = availableCopies;
    }
  
    rentMovie() {
      if (this.availableCopies > 0) {
        this.availableCopies--;
        return `You have successfully rented ${this.title}. Enjoy your movie!`;
      } else {
        return `Sorry, ${this.title} is currently out of stock.`;
      }
    }
  
    returnMovie() {
      this.availableCopies++;
      return `Thank you for returning ${this.title}. We hope you enjoyed it!`;
    }
  }
  class MovieStore {
    constructor() {
      this.movies = [];
    }
  
    addMovie(movie) {
      this.movies.push(movie);
    }
  
    rentMovie(title) {
      const movie = this.findMovie(title);
  
      if (movie) {
        return movie.rentMovie();
      } else {
        return `Sorry, we don't have ${title} in our store.`;
      }
    }
  
    returnMovie(title) {
      const movie = this.findMovie(title);
  
      if (movie) {
        return movie.returnMovie();
      } else {
        return `We don't have a record of ${title} being rented from us.`;
      }
    }
  
    findMovie(title) {
      return this.movies.find(movie => movie.title === title);
      }
    }
  // Create movie instances
  const movie1 = new Movie('Inception', 'Sci-Fi', 5);
  const movie2 = new Movie('The Shawshank Redemption', 'Drama', 3);
  
  // Create a movie store
  const movieStore = new MovieStore();
  
  // Add movies to the store
  movieStore.addMovie(movie1);
  movieStore.addMovie(movie2);
  
  // Rent movies
  console.log(movieStore.rentMovie('Inception'));
  console.log(movieStore.rentMovie('The Shawshank Redemption'));
  console.log(movieStore.rentMovie('The Matrix'));
  
  // Return movies
  console.log(movieStore.returnMovie('Inception'));
  console.log(movieStore.returnMovie('The Matrix'));
  
  // movieClasses.js