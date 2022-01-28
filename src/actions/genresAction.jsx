import {API_KEY, API_URL} from '../properties'
import {actionDispatch} from './actionsDefinition';
import axios from 'axios'

export const showGenresAction = async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=es-ES`);
        const genres = await res.data.genres;

        return dispatch({
            type: actionDispatch.SHOW_GENRES,
            payload: genres, 
        });
    } catch (error) {
        console.error(error);
    }
}
