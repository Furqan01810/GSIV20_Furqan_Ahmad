import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./MoviesList.css";
import * as scrollHelpers from "../components/scroll-helper";
import { Container, Row, Col, Card } from "react-bootstrap";
import { getMoviesUpcoming } from "../actions/moviesAction";

class MoviesList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: false,
      currentPage: 1,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.onscroll = this.handleScroll;
    this.setState({ loading: true });
    sessionStorage.setItem("searched", false);
    this.props.getMoviesUpcoming(this.state.currentPage, null);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    if (this.state.currentPage) {
      if (sessionStorage.getItem("searched") == "false") {
        let percentageScrolled =
          scrollHelpers.getPercentageScrolledDown(window);
        if (percentageScrolled > 0.95) {
          const nextPage = this.state.currentPage + 1;
          this.props.getMoviesUpcoming(nextPage, this.props.movies);
          this.setState({ currentPage: nextPage });
        }
      }
    }
  }

  render() {
    return (
      <Container>
        <Row>
          {this.props.movies.map((movie) => (
            <Col lg={3} md={4} sm={6} xs={12} key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <Card className="bg-dark text-white">
                  <Card.Body>
                    <Card.Title>
                      {movie.title.length > 50
                        ? movie.title.substr(0, 49) + "..."
                        : movie.title}
                    </Card.Title>
                  </Card.Body>
                  <Card.Img
                    variant="top"
                    src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
});
const mapDispatchToProps = (dispatch) => ({
  getMoviesUpcoming: (page, movie) => getMoviesUpcoming(dispatch, page, movie),
});

const connectedMoviesList = connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(MoviesList);

export default connectedMoviesList;
