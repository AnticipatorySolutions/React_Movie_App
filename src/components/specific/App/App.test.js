/*
component unit test
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App-view';

it('AppComponent_Renders_WithoutCrashing', ()=>{
    //Arrange
    const div = document.createElement('div');
    //Act
    ReactDOM.render(<App/>,div);
    //Assert implied by lack of crash

    //Clean-up to avoid memory leaks
    ReactDOM.unmountComponentAtNode(div);
})