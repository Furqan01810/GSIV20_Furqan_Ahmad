import {actionDispatch} from './../actions/actionsDefinition';

const initialState = {
    genres: [],
    movies:[],
    movieDetail: {}
}
    
function reducer(state = initialState, action) {
    switch (action.type) {
        case actionDispatch.SHOW_GENRES:
            return {
                ...state,
                genres: action.payload,
            };

        case actionDispatch.SHOW_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };
        
        case actionDispatch.SHOW_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: action.payload,
            };
            
        default:
            return state;
    }
}

export default reducer;