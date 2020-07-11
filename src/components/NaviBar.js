import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/logo5.jpg';

const Styles = styled.div`
    .navbar {
        background-color: #443F5B;
        height: 125px;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #E1DEEE;
        font-size: 35px;
        

        &:hover {
            color: white;
        }
    }
`;

export const NaviBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/"><img src={logo} alt="logo" width="100px" height="100px" />Goodrich Bodywork</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    {/* <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)