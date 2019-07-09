/*
Component unit test
*/

import React from 'react';
import ReactDOM from 'react-dom';
import MovieGrid from './MovieGrid-view';

it('MovieGrid_Renders_Without_Crashing', () => {
    //Arrange
    const div = document.createElement('div');
    //Act
    ReactDOM.render(<MovieGrid />, div);
    //Assert implied by not crashing
    
    //Clean-up to avoid memory leaks
    ReactDOM.unmountComponentAtNode(div);
});
