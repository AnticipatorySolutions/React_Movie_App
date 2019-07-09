/*
Component unit test
*/

import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar-view';
import { render } from '@testing-library/react'

it('NavBar_Renders_Without_Crashing', () => {
    //Arrange
    const div = document.createElement('div');
    //Act
    ReactDOM.render(<NavBar />, div);
    //Assert implied by not crashing
    
    //Clean-up to avoid memory leaks
    ReactDOM.unmountComponentAtNode(div);
});


it('NavBar_Renders_Text_Pop_Movies', ()=> {
    const {getByText} = render(<NavBar text={"Pop Movies"}/>);
    expect(getByText(/pop movies/i));
});