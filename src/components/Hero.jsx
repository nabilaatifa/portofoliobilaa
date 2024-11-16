import React from 'react'
import Portofolio from '../assets/portofolio.png'

const Hero = () => {
    return (
        <section id="hero" className="h-screen flex flex-col justify-center items-center bg-red-200 text-center">
            <img src={Portofolio} className='w-64 rounded-xl' alt="" />
            <h1 className="text-4xl text-red-950 font-bold mb-3 mt-6">Hello, I am Nabila Latifa Tullaili</h1>
            <h1 className="text-lg text-red-950 font-bold mb-3 mt-6">Undergraduate Student of Information Systems at Singaperbangsa Karawang University</h1>
        </section>

    );
};
export default Hero