import React from "react";
import Navbar from "./Navbar";
import imghero from "/imghero.png";
import github from "../assets/Github.webp";
import linkedin from "../assets/linkedin.webp";
import Gmail from "../assets/Gmail.webp";
import profilepic from '../assets/profile-pic.png'
const links={
linkedinlink:'https://www.linkedin.com/in/naga-sai-692a75274/',
Githublink:'https://github.com/nagasai7772'
}
// import Adam from "/Adam.pdf";
import Nagasai from '../assets/NAGASAI_RESUME.pdf'
export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center">
      <div
        className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#6d2897] via-[#8e6cf5]
        to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl"
      ></div>
      <Navbar />
      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 
      md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10"
      >
        <section
          className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>
          <header>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Naga Sai 
            </h1>
            <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#3e0f4a] md:text-[#c744ec] mb-2">
              Full stack Developer
            </h2>
          </header>
          <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6">
          Building modern digital solutions using JavaScript and the MERN stack. Passionate about clean code, performance, and user-centric design.


          </p>
          <div className="flex items-center space-x-4 mb-6">
            <a href={links.Githublink}>
              <img src={github} alt="github" className="w-11 h-15" />
            </a>
            <a href={links.linkedinlink}>
              <img src={linkedin} alt="Linkedin" className="w-8 h-18" />
            </a>
            <a href="#">
              <img src={Gmail} alt="facebook" className="w-11 h-11 rounded-full" />
            </a>
            <a href="#">
              {/* <img src={instagram} alt="instagram" className="w-11 h-11" /> */}
            </a>
          </div>
          <a href={Nagasai} download>
            <button
              className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] 
            hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg"
            >
              Download CV
            </button>
          </a>
        </section>
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 flex justify-center md:justify-end mt-0"
        >
          <img
            src={profilepic}
            alt="Hero Image"
            className="h-[300px] sm:h-[400px] md:h-[485px] w-[250px] sm:w-[480px] object-cover rounded-lg"
          />
        </figure>
      </main>
    </div>
  );
}
