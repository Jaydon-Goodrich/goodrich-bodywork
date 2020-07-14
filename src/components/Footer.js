import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import review1 from '../assets/review_1.jpg';
import review2 from '../assets/review_2.jpg';
import review3 from '../assets/review_3.jpg';
import review4 from '../assets/review_4.jpg';


export const Footer = () => (
    <div>
        <h1 style={{
            paddingTop:"40px",
            color:"#443F5B", 
            fontFamily:"Palatino Linotype",
            textAlign:"center", 
            }}>
                Reviews</h1>
    <div style={{paddingTop: "5px",paddingBottom: "40px", backgroundColor: "#E1DEEE"}} class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <Carousel >
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={review1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={review2}
                    alt="Third slide"
                    />

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={review3}
                    alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={review4}
                    alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    </div>
    </div>
)