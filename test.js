// "use-strict"
// const prompt = require("prompt-sync")()


// // // Creating a variable for the sports store products
// // var sportsStoreProducts = [
// //     { product: "Nike Shoes", price: 99.99 },
// //     { product: "Anther Jersey", price: 49.99 },
// //     { product: "Basketball Shoes", price: 79.99 }
// // ];

// // //Acessing elements in the array of objects
// // console.log("Product 1: " + sportsStoreProducts[0].product+ ", Price: $" + sportsStoreProducts[0].price);
// // console.log("Product 2: " + sportsStoreProducts[1].product + ", Price: $" + sportsStoreProducts[1].price);
// // console.log("Product 3: " + sportsStoreProducts[2].product + ", Price: $" + sportsStoreProducts[2].price);


// // // User input
// // var userInput = prompt("Enter a product:");

// // // Check if the entered product exists
// // var productExists = false;

// // for (var i = 0; i < sportsStoreProducts.length; i++) {
// //     if (userInput.toLowerCase() === sportsStoreProducts[i].product.toLowerCase()) {
// //         productExists = true;
// //         console.log(`${sportsStoreProducts[i].product}: $${sportsStoreProducts[i].price}`);
// //         break; // Exit the loop since the product is found
// //     }
// // }

// // // Display message based on whether the product exists or not
// // if (productExists) {
// //     console.log("Product found!");
// // } else {
// //     console.log("This product does not exist in the sports store. Please come back Later");
// // }

// // // Creating a variable for the sports store products
// // var sportsStoreProducts = [
// //   { product: "Nike Shoes", price: 99.99 },
// //   { product: "Anther Jersey", price: 49.99 },
// //   { product: "Basketball Shoes", price: 79.99 }
// // ];

// // // Displaying original products in the console
// // console.log("Original Sports Store Products:");
// // displayProducts();

// // // Function to display products
// // function displayProducts() {
// //   for (var i = 0; i < sportsStoreProducts.length; i++) {
// //       console.log(`${sportsStoreProducts[i].product}: $${sportsStoreProducts[i].price}`);
// //   }
// // }

// // // Add a new product
// // var newProduct = { product: "Brush", price: 29.99 };
// // sportsStoreProducts.push(newProduct);

// // // Displaying products after adding a new product
// // console.log("\nSports Store Products after adding a new product:");
// // displayProducts();

// // // Delete an existing product (for example, "Anther Jersey")
// // var productToDelete = "Anther Jersey";
// // var indexToDelete = sportsStoreProducts.findIndex(product => product.product === productToDelete);

// // if (indexToDelete !== -1) {
// //   sportsStoreProducts.splice(indexToDelete, 1);
// // }

// // // Displaying products after deleting an existing product
// // console.log("\nSports Store Products after deleting an existing product:");
// // displayProducts();

// // // Creating a variable for the sports store products
// // var sportsStoreProducts = [
// //   { product: "Nike Shoes", price: 99.99 },
// //   { product: "Basketball Shoes", price: 49.99 },
// //   { product: "Brush", price: 79.99 }
// // ];

// // // Displaying original products in the console
// // console.log("Original Sports Store Products:");
// // displayProducts();

// // // Function to display products
// // function displayProducts() {
// //   for (var i = 0; i < sportsStoreProducts.length; i++) {
// //       console.log(`${sportsStoreProducts[i].product}: $${sportsStoreProducts[i].price}`);
// //   }
// // }

// // // User input
// // var userInput = prompt("Enter a product:");

// // // Check if the entered product exists
// // var productExists = false;

// // for (var i = 0; i < sportsStoreProducts.length; i++) {
// //   if (userInput.toLowerCase() === sportsStoreProducts[i].product.toLowerCase()) {
// //       productExists = true;
// //       console.log(`${sportsStoreProducts[i].product}: $${sportsStoreProducts[i].price}`);
// //       break; // Exit the loop since the product is found
// //   }
// // }

// // // Display message based on whether the product exists or not
// // if (productExists) {
// //   console.log("Product found! You can now purchase.");
// // } else {
// //   console.log("This product is not available in the sports store.");
// // }












// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const app = express();
// const PORT = 3000;

// // MongoDB setup
// mongoose.connect('mongodb://localhost:27017/streaming_app', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define User schema
// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

// app.use(bodyParser.json());

// // User registration endpoint
// app.post('/register', async (req, res) => {
//   const { username, password } = req.body;

//   // Hash the password before saving it
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Save user to the database
//   const newUser = new User({ username, password: hashedPassword });
//   await newUser.save();

//   res.json({ message: 'User registered successfully' });
// });

// // User login endpoint
// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   // Find the user by username
//   const user = await User.findOne({ username });

//   if (user && (await bcrypt.compare(password, user.password))) {
//     // Generate a JWT token for authentication
//     const token = jwt.sign({ username: user.username }, 'secret_key');
//     res.json({ message: 'Login successful', token });
//   } else {
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// class Movie {
//   constructor(title, genre, availableCopies) {
//     this.title = title;
//     this.genre = genre;
//     this.availableCopies = availableCopies;
//   }

//   rentMovie() {
//     if (this.availableCopies > 0) {
//       this.availableCopies--;
//       return `You have successfully rented ${this.title}. Enjoy your movie!`;
//     } else {
//       return `Sorry, ${this.title} is currently out of stock.`;
//     }
//   }

//   returnMovie() {
//     this.availableCopies++;
//     return `Thank you for returning ${this.title}. We hope you enjoyed it!`;
//   }
// }
// class MovieStore {
//   constructor() {
//     this.movies = [];
//   }

//   addMovie(movie) {
//     this.movies.push(movie);
//   }

//   rentMovie(title) {
//     const movie = this.findMovie(title);

//     if (movie) {
//       return movie.rentMovie();
//     } else {
//       return `Sorry, we don't have ${title} in our store.`;
//     }
//   }

//   returnMovie(title) {
//     const movie = this.findMovie(title);

//     if (movie) {
//       return movie.returnMovie();
//     } else {
//       return `We don't have a record of ${title} being rented from us.`;
//     }
//   }

//   findMovie(title) {
//     return this.movies.find(movie => movie.title === title);
//     }
//   }
// // Create movie instances
// const movie1 = new Movie('Inception', 'Sci-Fi', 5);
// const movie2 = new Movie('The Shawshank Redemption', 'Drama', 3);

// // Create a movie store
// const movieStore = new MovieStore();

// // Add movies to the store
// movieStore.addMovie(movie1);
// movieStore.addMovie(movie2);

// // Rent movies
// console.log(movieStore.rentMovie('Inception'));
// console.log(movieStore.rentMovie('The Shawshank Redemption'));
// console.log(movieStore.rentMovie('The Matrix'));

// // Return movies
// console.log(movieStore.returnMovie('Inception'));
// console.log(movieStore.returnMovie('The Matrix'));

// // movieClasses.js

// class Movie {
//   constructor(title, genre, availableCopies) {
//     this.title = title;
//     this.genre = genre;
//     this.availableCopies = availableCopies;
//   }

//   rentMovie() {
//     if (this.availableCopies > 0) {
//       this.availableCopies--;
//       return `You have successfully rented ${this.title}. Enjoy your movie!`;
//     } else {
//       return `Sorry, ${this.title} is currently out of stock.`;
//     }
//   }

//   returnMovie() {
//     this.availableCopies++;
//     return `Thank you for returning ${this.title}. We hope you enjoyed it!`;
//   }
// }

// class MovieStore {
//   constructor() {
//     this.movies = [];
//   }

//   addMovie(movie) {
//     this.movies.push(movie);
//   }

//   rentMovie(title) {
//     const movie = this.findMovie(title);

//     if (movie) {
//       return movie.rentMovie();
//     } else {
//       return `Sorry, we don't have ${title} in our store.`;
//     }
//   }

//   returnMovie(title) {
//     const movie = this.findMovie(title);

//     if (movie) {
//       return movie.returnMovie();
//     } else {
//       return `We don't have a record of ${title} being rented from us.`;
//     }
//   }

//   findMovie(title) {
//     return this.movies.find(movie => movie.title === title);
//   }
// }

// module.exports = { Movie, MovieStore };
































































