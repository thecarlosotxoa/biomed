import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Doctors = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Nuestras Especialidades
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Disponemos de personal altamente capacitado y con experiencia en
            diferentes especialidades. Nuestros médicos brindan atención
            personalizada a cada paciente.
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button className="bg-[#d5f2ec] text-bioGreen px-4 py-2 rounded-lg active:bg-[#ade9dc]">
            <FaArrowLeft size={25} />
          </button>
          <button className="bg-[#d5f2ec] text-bioGreen px-4 py-2 rounded-lg active:bg-[#ade9dc]">
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div>
        <Slider {...settings}></Slider>
      </div>
    </div>
  );
};

export default Doctors;
