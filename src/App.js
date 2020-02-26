import React from 'react';
import './App.css';
import MovieList from './component/MovieList';
import MovieForm from './component/MovieForm/MovieForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      comment: '',
      poster: '',
      message: '',
      typeMessage: '',
      movies: []
    };

    this.onChange = this.onChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.url = " https://post-a-form.herokuapp.com/api/movies/";
  }

  onChange(event) {
    const field = event.target.name;
    this.setState({[field]: event.target.value});
}

  addMovie(event) {
    const { title, poster, comment } = this.state;

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, poster, comment }),
    };

    event.preventDefault();

    fetch(this.url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          this.setState({ typeMessage: 'error', message: res.error });
        } else {
          this.setState({ typeMessage: 'success', message: `Film ajouté avec l'ID ${res.id}!` });
          this.setState({title:'', poster:'', comment:''})
          this.fetchMovies();
        }
      }).catch(e => {
        this.setState({ typeMessage: 'error', message: 'Erreur lors de l\'ajout d\'un film' });
      });
  }

  fetchMovies() {
    fetch(this.url)
      .then(response => response.json())
      .then(json => {
        this.setState({ movies: json });
      });
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <div className="App">
        <h1>Last Movies</h1>
        <MovieList fetchMovies={this.fetchMovies} movies={this.state.movies} />
        <div className={`message ${this.state.typeMessage}`}>{this.state.message}</div>
        <MovieForm onChange={this.onChange} addMovie={this.addMovie} data={{title:this.state.title, poster:this.state.poster, comment:this.state.comment}}/>
      </div>
    );
  }
}

export default App;
