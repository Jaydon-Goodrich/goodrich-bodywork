import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/logo5.jpg';

const Styles = styled.div`
    .navbar {
        background-color: #443F5B;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #E1DEEE;
        

        &:hover {
            color: white;
        }
    }
`;

export const NewNavBar = () => (
    <Styles>
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="/"><img src={logo} alt="logo" width="100px" height="100px"/>Goodrich Bodywork</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)