import React from 'react';
import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

const Swiper = ({resources}) => (
    <div>
        <Carousel>
            {resources.map((item, index) => (
                <div key={item.url}>
                    <img src={item.url}/>
                </div>
            ))}
        </Carousel>
    </div>
);

Swiper.propTypes = {
    resources: PropTypes.array.isRequired
};

export default Swiper;
