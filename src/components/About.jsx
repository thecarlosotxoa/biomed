import React from "react";
import aboutImg from "../assets/img/about.jpg"

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className="w-full lg:w-3/4 space-y-4">
        <h1 className="text-4xl font-semibold text-center lg:text-start">
          Acerca de Nosotros
        </h1>
        <p className="text-justify lg:text-start">
          Profesionales comprometidos con su bienestar. Más de 20
          especializaciones médicas
        </p>
        <p className="text-justify lg:text-start">
          Profesionales comprometidos con su bienestar. Más de 20
          especializaciones médicas
        </p>
        <p className="text-justify lg:text-start">
          Profesionales comprometidos con su bienestar. Más de 20
          especializaciones médicas
        </p>
      </div>
      <div className="w-full lg:w-3/4">
        <img src={aboutImg} alt="welcome image" className="rounded-lg"/>
      </div>
    </div>
  );
};

export default About;
