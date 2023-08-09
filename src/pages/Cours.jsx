import React, { useContext, useEffect } from 'react';
import { AuthContext } from "/src/context/AuthContext.jsx";
import { useNavigate } from 'react-router-dom'
import Courses from '../components/Courses'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Cours() {
    return (
        <>
            <Navbar />
            <div className='flex justify-center'>
                <Courses />
            </div>
            <Footer />
        </>
    )
}

export default Cours
