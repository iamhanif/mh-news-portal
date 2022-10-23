import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import alkawsar1 from '../../../assets/brands/alkawsar1.png'
import rokomari from '../../../assets/brands/rokomari.png'


const BrandCarousel = () => {
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={alkawsar1}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={rokomari}
                            alt="Second slide"
                        />

                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    );
};

export default BrandCarousel;