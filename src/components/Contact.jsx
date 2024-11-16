import React from 'react';
import { FaGoogleDrive, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="h-screen flex flex-col justify-center items-center bg-red-200 text-center">
      <p className="text-4xl mb-6">
        <b>Contact</b>
      </p>

      <div className="flex space-x-8 mt-4">
        <a
          href="https://drive.google.com/drive/u/2/folders/15c3t-V-4MlHVnpbZ4SikCJWuX937NXYh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-red-950 hover:text-red-950 transition duration-300"
        >
          <FaGoogleDrive />
        </a>

        <a
          href="https://www.linkedin.com/in/nabila-latifa-577091209/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-red-950 hover:text-red-950 transition duration-300"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://instagram.com/matchavabilla"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-red-950 hover:text-red-950 transition duration-300"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default Contact;
