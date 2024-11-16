import React, { useState } from 'react';
import ART from '../assets/art.png';
import CHOIR from '../assets/choir.png';
import DECO from '../assets/Deco.png';

function Navbar() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);

  return (
    <section id="projects" className="min-h-screen bg-red-200 text-center py-32">
      <div className="max-w-7xl mx-auto px-4">        <h2 className="text-3xl font-bold mb-8">Project</h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
          <div className="bg-red-950 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src={ART} alt="Project 1" className="w-full h-48 object-cover" />
            <div className="p-6 text-left">
              <h3 className="text-pink-200 xl font-bold">ART SKETCHER</h3>
              <p className="text-pink-200">
                {isExpanded1
                  ? 'saya memiliki pengalaman dalam bidang menggambar, seperti menggambar sketsa manusia, animasi jepang, pemandangan, brosur atau poster manual, dan lain-lain. saya juga telah beberapa kali menerima job joki tugas menggambar'
                  : 'saya memiliki pengalaman ...'}
              </p>
              <button
                onClick={() => setIsExpanded1(!isExpanded1)}
                className="text-blue-500 mt-2 hover:underline"
              >
                {isExpanded1 ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>

          <div className="bg-red-950 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src={CHOIR} alt="Project 2" className="w-full h-48 object-cover" />
            <div className="p-6 text-left">
              <h3 className="text-pink-200 xl font-bold">CHOIR</h3>
              <p className="text-pink-200">
                {isExpanded2
                  ? 'saya memiliki pengalaman dalam bidang paduan suara, tim paduan suara saya diundang pada BAPPENDA BOGOR 2022 dan TARUNG DERAJAT 2022'
                  : 'saya memiliki pengalaman ...'}
              </p>
              <button
                onClick={() => setIsExpanded2(!isExpanded2)}
                className="text-blue-500 mt-2 hover:underline"
              >
                {isExpanded2 ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>

          <div className="bg-red-950 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src={DECO} alt="Project 3" className="w-full h-48 object-cover" />
            <div className="p-6 text-left">
              <h3 className="text-pink-200 xl font-bold">LEAD SET DECORATOR</h3>
              <p className="text-pink-200">
                {isExpanded3
                  ? 'saya memiliki pengalaman dalam bidang dekorasi, saya sering menjadi ketua dekorasi dalam berbagai acara di kelas, seperti bazaar kelas, pameran kelas, dan dekorasi praktik nikah di kelas'
                  : 'saya memiliki pengalaman ...'}
              </p>
              <button
                onClick={() => setIsExpanded3(!isExpanded3)}
                className="text-blue-500 mt-2 hover:underline"
              >
                {isExpanded3 ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Navbar;
