import React, { Component } from "react";


class Movies extends Component {
  state = {
    movies: [],
    title: "",
    cast: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = () => {
    API.getMovies()
      .then(res =>
        this.setState({ movies: res.data, title: "", cast: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return 
    <h1> Hello! </h1> 
}

};

export default Movies; 