/*
    add business logic and state management
    handled before being set to the stateless view component
*/

import React from 'react';
import './App.css';
import NavBar from '../../common/NavBar'
import MovieGrid from '../../specific/MovieGrid'

function AppContainer(){
    return (
        <div className="App">
            <NavBar text={'Pop Movies'}/>
            <MovieGrid />
        </div>
    );
}

export default AppContainer;