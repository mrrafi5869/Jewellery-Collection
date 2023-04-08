import React from 'react';
import Slider from '../Slider/Slider';
import AutoScroll from '../AutoScroll/AutoScroll';
import Categories from '../../Categories/Categories';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AutoScroll></AutoScroll>
            <Categories></Categories>
        </div>
    );
};

export default Home;