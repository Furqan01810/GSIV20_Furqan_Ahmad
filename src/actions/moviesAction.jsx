import { API_KEY, API_URL } from "../properties";
import { actionDispatch } from "./actionsDefinition";
// import { connect } from "react-redux";
import axios from "axios";

export const getPopularMoviesAction = async (dispatch) => {
  try {
    const res = await axios.get(
      `${API_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`
    );
    const movies = await res.data.results.slice(0, 10);

    return dispatch({
      type: actionDispatch.SHOW_MOVIES,
      payload: movies,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getSearchMoviesAction = async (dispatch, searchCriteria) => {
  try {
    const res = await axios.get(
      `${API_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${searchCriteria}`
    );
    const movies = await res.data.results;

    return dispatch({
      type: actionDispatch.SHOW_MOVIES,
      payload: movies,
    });
  } catch (error) {
    console.error(error);
  }
};
export const getMoviesByGenderAction = async (dispatch, genreID) => {
  try {
    const res = await axios.get(
      `${API_URL}/discover/movie?api_key=${API_KEY}&language=es-ES&with_genres=${genreID}`
    );
    const movies = await res.data.results;

    return dispatch({
      type: actionDispatch.SHOW_MOVIES,
      payload: movies,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getMovieDetailAction = async (dispatch, movieID) => {
  try {
    const res = await axios.get(
      `${API_URL}/movie/${movieID}?api_key=${API_KEY}&language=es-ES`
    );
    const movie = await res.data;

    return dispatch({
      type: actionDispatch.SHOW_MOVIE_DETAIL,
      payload: movie,
    });
  } catch (error) {
    console.error(error);
  }
};
export const getMoviesUpcomingSearch = async (dispatch, searchCriteria) => {
  try {
    const res = await axios.get(
      `${API_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${searchCriteria}`
    );
    const movies = await res.data.results;

    return dispatch({
      type: actionDispatch.SHOW_MOVIES,
      payload: movies.sort(function (a, b) {
        return new Date(b.release_date) - new Date(a.release_date);
      }),
    });
  } catch (error) {
    console.error(error);
  }
};
export const getMoviesUpcoming = async (dispatch, page, oldMovies) => {
  try {
    const res = await axios.get(
      `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=es-ES&page=${page}`
    );
    const movies = await res.data.results;
    let newArray = movies;
    if (oldMovies) {
      newArray = [];
      newArray = [...movies, ...oldMovies];
      newArray = newArray.sort(function (a, b) {
        return new Date(b.release_date) - new Date(a.release_date);
      });
    } else {
      newArray = newArray.sort(function (a, b) {
        return new Date(b.release_date) - new Date(a.release_date);
      });
    }
    return dispatch({
      type: actionDispatch.SHOW_MOVIES,
      payload: newArray,
    });
  } catch (error) {
    console.error(error);
  }
};
// const mapStateToProps = (state) => ({
//   movieDetail: state.movieDetail,
// });
// const connectedMovie = connect(mapStateToProps, null)(getMoviesUpcoming);
// export default connectedMovie;
