import React from 'react';
import logo from '../../assets/image/logo.jpg'
import DownNavbar from './DownNavbar';

const Navbar = () => {
    return (
        <div className='mt-3 lg:mt-12 lg:w-9/12 mx-auto'>
            <img src={logo} className='mx-auto' alt="" />
            <DownNavbar></DownNavbar>
        </div>
    );
};

export default Navbar;