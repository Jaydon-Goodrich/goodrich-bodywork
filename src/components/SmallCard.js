import React from 'react';
import Card from 'react-bootstrap/Card';
import mass1 from '../assets/mass2.jpg';
import mass3 from '../assets/massa1.jpg';
import Button from 'react-bootstrap/Button';

export const SmallCard = () => (
    <div>
        <div style={{padding:"15px"}}className="row"> 
            <div class="d-flex justify-content-center"> 
            <Card style={{marginTop:"5px", width:"auto", maxWidth:"1000px"}} className="bg-dark text-white">
            <Card.Img style={{height:"500px"}} src={mass3} alt="Card image" />
            <Card.ImgOverlay>
            <Card.Title style={{color:"white", fontSize:"50px", textAlign: "center"}}>90 Minute Massage</Card.Title>
            <Button style={{backgroundColor: "#443F5B", borderColor: "#E1DEEE", color: "#E1DEEE", fontWeight: "bold"}} size="lg" block href="https://square.site/book/NFB23H73GAVE4/goodrich-bodywork" target="_blank">
            BOOK NOW
            </Button>
            </Card.ImgOverlay>
            </Card>
            </div>
            <div class="d-flex justify-content-center">
            <Card style={{marginTop:"5px", width:"auto", maxWidth:"1000px"}} className="bg-dark text-white">
            <Card.Img style={{height:"500px"}} src={mass1} alt="Card image" />
            <Card.ImgOverlay>
            <Card.Title style={{color:"white", fontSize:"50px", textAlign: "center" }}>Enhancements</Card.Title>
            <Card.Title style={{color:"white", fontSize:"30px", textAlign: "center" }}>
                <ul style={{listStyle:"none"}}>
                    <li>Deep Tissue</li>
                    <li>Hot Stone</li>
                    <li>Sugar Scrub</li>
                    <li>Luxury</li>
                </ul>
            </Card.Title>
            <Button style={{backgroundColor: "#443F5B", borderColor: "#E1DEEE", color: "#E1DEEE", fontWeight: "bold"}} size="lg" block href="https://square.site/book/NFB23H73GAVE4/goodrich-bodywork" target="_blank">
            BOOK NOW
            </Button>
            </Card.ImgOverlay>
            </Card>
            </div>
        </div>
    </div>
)