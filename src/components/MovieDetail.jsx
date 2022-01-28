import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieDetailAction } from "../actions/moviesAction";
import { Container, Row, Col, Image } from "react-bootstrap";
import GoToHome from "./GoToHome";
import "./MovieDetail.css";

const getGenresString = (genreObject) => {
  let genreString = "";
  if (genreObject != null) {
    genreString = Object.entries(genreObject)
      .map((genre) => genre[1].name)
      .join(", ");
  }
  return genreString;
};

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetail: this.props.getMovieDetail(this.props.match.params.id),
    };
  }

  render() {
    return (
      <div key="movie-detail" id="movie-detail">
        <GoToHome />
        <Container className="bg-dark text-white movie-detail-container">
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Image
                src={`http://image.tmdb.org/t/p/w342${this.props.movieDetail.poster_path}`}
                thumbnail
              />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <h1>{this.props.movieDetail.title}</h1>
              <h3>Original title: {this.props.movieDetail.original_title}</h3>
              <hr></hr>
              <p>{this.props.movieDetail.overview}</p>
              <p>
                <strong>Genre:</strong>{" "}
                {getGenresString(this.props.movieDetail.genres)}
              </p>
              <p>
                <strong>Release date:</strong>{" "}
                {this.props.movieDetail.release_date}
              </p>
              <p>
                <strong>Duration:</strong> {this.props.movieDetail.runtime} min
              </p>
              <p>
                <strong>Number of votes:</strong>{" "}
                {this.props.movieDetail.vote_count}
              </p>
              <p>
                <strong>Rating:</strong> {this.props.movieDetail.vote_average}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieDetail: state.movieDetail,
});

const mapDispatchToProps = (dispatch) => ({
  getMovieDetail: (movieID) => getMovieDetailAction(dispatch, movieID),
});

const connectedMovieDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);

export default connectedMovieDetail;
