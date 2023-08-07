import React from 'react'
import Hero from '../components/Hero'
import Bio from '../components/Bio'
import Subjects from '../components/Subjects'
import Slide from 'react-awesome-reveal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Acceuil() {
    return (<>
        <Navbar />
        <Hero />
        <Slide>
            <Bio />
        </Slide>
        <Subjects />
        <Footer />
    </>)
}
export default Acceuil
