import React from 'react';
import './Movie.css';

class Movie extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="Movie">
                <img src={this.props.movie.poster} alt={this.props.movie.title} />
                <h2>#{this.props.movie.id} - {this.props.movie.title}</h2>
                <p>{this.props.movie.comment}</p>
            </div>
        )
    }
}

export default Movie;