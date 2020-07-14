import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Styles = styled.div`
    .navbar {
        background-color: #443F5B;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #E1DEEE;
        font-size: 35px;
        

        &:hover {
            color: white;
        }
    }
`;

export const BottomHeader = () => (
    <Styles>
        <Container style={{maxWidth:"100%",padding:"0px", margin:"0px"}}>
            <Row> 
                <Col xs={12}>
                    <Navbar>
                        <Navbar.Brand href="/"><h4>Goodrich Bodywork</h4></Navbar.Brand>
                        
                            <Nav className="ml-auto">
                                <Nav.Item style={{color:"#E1DEEE"}}> <h4>&#169; 2020</h4></Nav.Item>
                                
                            </Nav>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    </Styles>
)