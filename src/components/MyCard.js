import React from 'react';
import Card from 'react-bootstrap/Card';
import mass from '../assets/massage.jpg';
import Button from 'react-bootstrap/Button';



export const MyCard = () => (
    <div>
        <h1 style={{
            color:"#443F5B", 
            fontFamily:"fantasy",
            textDecoration:"underline",
            textDecorationStyle:"dotted",
            textAlign:"center", 
            }}>
                Products</h1>
        <div style={{paddingTop: "5px"}}>
            <Card>
            <Card.Img src={mass} alt="Card image" style={{height:"500px"}}/>
            <Card.ImgOverlay>
                <Card.Title style={{color:"#E1DEEE", fontSize:"50px", textAlign: "center" }}>60 Minute Massage</Card.Title>
                <Button style={{backgroundColor: "#443F5B", borderColor: "#E1DEEE", color: "#E1DEEE", fontWeight: "bold"}} size="lg" block href="https://square.site/book/NFB23H73GAVE4/goodrich-bodywork" target="_blank">
                BOOK NOW
                </Button>
            </Card.ImgOverlay>
            </Card>
            
        </div>
    </div>
)