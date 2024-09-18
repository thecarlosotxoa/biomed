import React from "react";
import { Link } from "react-scroll";
import { FaPhone } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-bioGreen text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-2xl pb-4">Biomed</h1>
          <p className="text-lg">
            Empatía, integridad, profesionalismo y dedicación
          </p>
        </div>

        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contáctenos</h1>
          <nav className="flex flex-col gap-2">
            {/* Email Link */}
            <a
              href="mailto:biomedmensaje@gmail.com"
              className="flex items-center gap-2 hover:underline"
            >
              <HiOutlineMail /> biomedmensaje@gmail.com
            </a>

            {/* Phone Link */}
            <a
              href="tel:+50621001900"
              className="flex items-center gap-2 hover:underline"
            >
              <FaPhone /> 2100-1900
            </a>

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/+50685618856"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <ImWhatsapp /> 8561 8856
            </a>
          </nav>
        </div>

        <div className="w-full md:w-1/4">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Visítenos</h1>
          <nav className="flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              200 metros noroeste de la Super Pro, San Ramón, Alajuela, Costa
              Rica
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}></Link>
            <Link to="/" spy={true} smooth={true} duration={500}></Link>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0"></h1>
          <nav className="flex flex-col gap-2">
            {/* Facebook Link */}
            <a
              href="https://www.facebook.com/clinicaBiomedcr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              <FaFacebook className="text-3xl" />
            </a>

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/clinicaBiomedcr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              <FaInstagram className="text-3xl" />
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          @copyright developed by
          <span className=" text-hoverColor"> champion programmers</span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
