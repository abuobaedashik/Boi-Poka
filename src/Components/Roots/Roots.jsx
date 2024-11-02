import React from 'react';
import Navbar from '../Navbar.jsx/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Roots = () => {
    return (
        <div className='max-w-5xl mx-auto'>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Roots;