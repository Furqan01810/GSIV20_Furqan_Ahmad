import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Genres.css';
import { showGenresAction } from '../actions/genresAction';
import { getMoviesByGenderAction } from '../actions/moviesAction';
import { NavDropdown} from 'react-bootstrap';


class Genres extends Component {
    constructor(props) {
        super(props); 
        this.state = { genres: this.props.showGenres() };
    }

    render() {
        return (
            <NavDropdown title="Filtrar por Género" id="basic-nav-dropdown">
                { (this.props.genres).map( (genre) => (
                    <NavDropdown.Item key={genre.id} href="#" onClick={() => this.props.getMoviesByGender(genre.id)}>{genre.name}</NavDropdown.Item>
                ))}
            </NavDropdown>
        );
    }
}

const mapStateToProps = (state) => ({
    genres: state.genres,
});
    
const mapDispatchToProps = (dispatch) => ({
    showGenres : () => showGenresAction(dispatch),
    getMoviesByGender : (genreID) => getMoviesByGenderAction(dispatch, genreID) 
});

const connectedGenres = connect(mapStateToProps, mapDispatchToProps)(Genres);

export default connectedGenres;
  