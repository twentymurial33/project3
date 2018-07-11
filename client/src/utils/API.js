import axios from "axios";

module.exports = (search, cb) => {

	let api_key = '285f362a4f6cc63f443be8ae75b7438d';

    let api_url = 'https://api.themoviedb.org/3/movie/550?api_key=${api_key}&s=${search}'

    axios.get(api_url, {

		headers: {

			'content-type': 'application/json',

			'accept': 'application/json'

		}

    }).then((results) => {

    	cb(results.data)

    });

}

export default {
  // Gets all movies
  getMovie: function() {
    return axios.get("/api/movies");
  }
//   // Gets the movie with the given id
//   getMoive: function(id) {
//     return axios.get("/api/movies/" + id);
//   },
//   // Deletes the movie with the given id
//   deleteMovie: function(id) {
//     return axios.delete("/api/movies/" + id);
//   },
//   // Saves a movie to the database
//   saveMovie: function(movieData) {
//     return axios.post("/api/movies", movieData);
//   }
};