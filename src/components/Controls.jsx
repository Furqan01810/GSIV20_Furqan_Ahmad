import React from "react";
import { connect } from "react-redux";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import {
  getMoviesUpcoming,
  getPopularMoviesAction,
  getMoviesUpcomingSearch,
} from "../actions/moviesAction";

class Controls extends React.Component {
  searchMovies() {
    let fieldSearchCriteria = document.getElementById("search").value.trim();
    if (fieldSearchCriteria) {
      this.props.getSearchMovies(fieldSearchCriteria);
    }
    sessionStorage.setItem("searched", true);
    // document.getElementById("search").value = "";
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Movies app</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search by name..."
              className="mr-sm-2"
              id="search"
            />
            <Button
              variant="outline-success"
              onClick={() => this.searchMovies()}
            >
              Search
            </Button>
            <Button
              variant="outline-success"
              onClick={() => {
                document.getElementById("search").value = "";
                sessionStorage.setItem("searched", false);
                this.props.getMoviesUpcoming(1, null);
              }}
            >
              Clear
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPopularMovies: () => getPopularMoviesAction(dispatch),
  getMoviesUpcoming: (page, movie) => getMoviesUpcoming(dispatch, page, movie),
  getSearchMovies: (searchCriteria) =>
    getMoviesUpcomingSearch(dispatch, searchCriteria),
});

const connectedControls = connect(null, mapDispatchToProps)(Controls);

export default connectedControls;
