import React from 'react';
import Button from 'react-bootstrap/Button';

export const Intro = () => (
    <div style={{padding:"100px"}}>
        <h1 style={{
            color:"#443F5B", 
            fontFamily:"fantasy", 
            fontWeight:"bold", 
            textAlign:"center", 
            paddingTop:"20px"}}>
                Goodrich Bodywork</h1>
        <p style={{
            color:"#443F5B", 
            fontFamily:"fantasy",
            textAlign:"center"
        }}>My name is Jenni. I am a licensed Massage Therapist. I travel and can come to you any time of the week Monday - Saturday</p>
        
            <div class="d-flex justify-content-center" style={{display: "flex",alignSelf: "center", margin:"auto"}}>
                <Button style={{backgroundColor:"#E1DEEE", color:"#443F5B",fontWeight:"bold", borderColor:"#443F5B"}} size="lg" href="https://square.site/book/NFB23H73GAVE4/goodrich-bodywork" target="_blank">Book Now</Button>
            </div>
    </div>
) 