import React from "react";
import aboutImg from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className="w-full lg:w-3/4 space-y-4">
        <h1 className="text-4xl font-semibold text-center lg:text-start">
          Acerca de Nosotros
        </h1>
        <p className="text-justify lg:text-start">
          Fundada el 03 de marzo del 2020, Clínica Biomed ha estado
          proporcionando atención médica de alta calidad en la zona de San
          Ramón, Alajuela. Desde su apertura, hemos crecido a una clínica
          integral con múltiples especialidades y servicios médicos.
        </p>
        <p>
          Ademas proporcionamos a nuestros pacientes terapias que ayudan a su
          bienestar físico y emocional como clases de piscina, yoga, pilates,
          zumba, talleres de meditación entre otras. Clínicareemos firmemente en
          la medicina preventiva como pilar fundamental para mantener y mejorar
          la salud de las personas.
        </p>
      </div>
      <div className="w-full lg:w-3/4">
        <img src={aboutImg} alt="welcome image" className="rounded-lg" />
      </div>
    </div>
  );
};

export default About;
