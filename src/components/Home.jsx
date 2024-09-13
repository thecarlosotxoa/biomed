import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.jpg')] bg-no-repeat bg-cover opacity-90">
      <div className="w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">Medicina Integral</h1>
        <p>
          Experiencia médica integral para su bienestar. Profesionales
          comprometidos con su bienestar. Más de 20 especializaciones médicas
        </p>

        <Button title="Ver Servicios" />
      </div>
    </div>
  );
};

export default Home;
