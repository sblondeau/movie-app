import React from 'react';
import Movie from './Movie/Movie';
import './MovieList.css';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="MovieList">
                {
                    this.props.movies.slice(this.props.movies.length-6, this.props.movies.length)
                    .map(movie =>
                        <Movie key={movie.id} movie={movie} />
                    )
                }
            </div>
        );
    }

}


export default MovieList;