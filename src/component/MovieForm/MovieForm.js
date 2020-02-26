import React from 'react';
import './MovieForm.css';

class MovieForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="MovieForm" onSubmit={this.props.addMovie}>
                <h2>Add a new movie</h2>
                <label>
                    Title
                    <input 
                        type="text"
                        name="title" 
                        onChange={this.props.onChange}
                        value={this.props.data.title}
                    />
                </label>

                <label>
                    Poster
                    <input 
                        type="url" 
                        name="poster" 
                        onChange={this.props.onChange}
                        value={this.props.data.poster}
                    />
                </label>

                <label>
                    Comments
                    <textarea 
                        name="comment"
                        onChange={this.props.onChange}
                        value={this.props.data.comment}
                    >
                    </textarea>
                </label>

                <button>Add</button>
            </form>
        );
    }
}

export default MovieForm;