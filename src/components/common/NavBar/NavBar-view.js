import React from 'react';
import {Navbar} from 'react-bootstrap';

export default class NavBar extends React.Component{     
      render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">{this.props.text}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Navbar>
        );
      }
}