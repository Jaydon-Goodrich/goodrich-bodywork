import React from 'react';
import Card from 'react-bootstrap/Card';
import mass from '../assets/massa2.jpg';
import Button from 'react-bootstrap/Button';



export const MyCard = () => (
    <div>
        <h1 style={{
            color:"#443F5B", 
            fontFamily:"Palatino Linotype",
            textAlign:"center", 
            }}>
                Products</h1>
        <div class="d-flex justify-content-center">
        <div style={{paddingTop: "5px"}}>
            <Card style={{width:"auto", maxWidth:"1000px"}}>
            <Card.Img src={mass} alt="Card image" style={{height:"500px"}}/>
            <Card.ImgOverlay>
                <Card.Title style={{color:"white", fontSize:"50px", textAlign: "center" }}>60 Minute Massage</Card.Title>
                <Button style={{backgroundColor: "#443F5B", borderColor: "#E1DEEE", color: "#E1DEEE", fontWeight: "bold"}} size="lg" block href="https://square.site/book/NFB23H73GAVE4/goodrich-bodywork" target="_blank">
                BOOK NOW
                </Button>
            </Card.ImgOverlay>
            </Card>
            
        </div>
        </div>
    </div>
)