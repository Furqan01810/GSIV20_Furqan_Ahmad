import React, {Component} from 'react';
import Controls from './Controls' 
import MoviesList from './MoviesList' 

class Home extends Component {

    render() {
        return (
            <div key="main" id="main">
                <Controls/>
                <MoviesList/>
            </div>
        );
    }
}

export default Home;



