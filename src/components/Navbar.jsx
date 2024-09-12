import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <div>
        <div>
          <div className="flex flex-row items-center cursos-pointer">
            <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">
                <h1 className="text-2xl font-semibold">Biomed</h1>  
            </Link>
          </div>
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">Home</Link>
            <Link to="about" spy={true} smooth={true} duration={500} className="cursor-pointer">About Us</Link>
            <Link to="services" spy={true} smooth={true} duration={500} className="cursor-pointer">Services</Link>
            <Link to="doctors" spy={true} smooth={true} duration={500} className="cursor-pointer">Doctors</Link>
            <Link to="blog" spy={true} smooth={true} duration={500} className="cursor-pointer">Blog</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
