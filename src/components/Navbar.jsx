import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";

const Navbar = () => {
  // Initialize the menu state to false (menu is closed by default)
  const [menu, setMenu] = useState(false);

  const [showForm, setShowForm] = useState(false);

  // Toggle the menu state when the hamburger menu is clicked
  const handleChange = () => {
    setMenu(!menu); // set menu to opposite state
  };

  // Close the menu when a menu item is clicked or when the hamburger menu is clicked again
  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="fixed w-full z-10 text-white">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-bioGreen shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex flex-row items-center cursos-pointer">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              <h1 className="text-2xl font-semibold">Biomed</h1>
            </Link>
          </div>
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Nosotros
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Servicios
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Especialidades
            </Link>
            <Link
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Novedades
            </Link>
          </nav>
          <div className="hidden lg:flex">
            <button
              className="bg-bioBlue text-white px-4 py-2 rounded-md hover:bg-brightColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Agende su cita
            </button>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-bioGreen text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="doctors"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Doctors
          </Link>
          <Link
            to="blog"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <div className="lg:hidden">
            <button
              className="bg-bioBlue text-white px-4 py-2 rounded-md hover:bg-brightColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Agende su cita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
