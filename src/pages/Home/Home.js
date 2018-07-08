import React, { Component } from "react";
import Container from "../../components/Container";
import SearchBar from "../../components/SearchBar";
import API from "../../utils/API";


class Movies extends Component {
  state = {
    movies: {},
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
    <Container fluid>
    <SearchBar>
      <form>
        <Input 
        value={this.state.title}
        onChange={this.handleInputChange}
        name="title"
        />
      </form>
      </SearchBar>
      </Container>
      );
}
  };

  export default Home; 


