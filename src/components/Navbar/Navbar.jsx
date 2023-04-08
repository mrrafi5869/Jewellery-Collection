import React from 'react';
import logo from '../../assets/image/logo.jpg'
import DownNavbar from './DownNavbar';

const Navbar = () => {
    return (
        <div className='mt-12 w-9/12 mx-auto'>
            <img src={logo} className='mx-auto' alt="" />
            <DownNavbar></DownNavbar>
        </div>
    );
};

export default Navbar;