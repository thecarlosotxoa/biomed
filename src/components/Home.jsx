import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-black bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className="w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Medicina Integral
        </h1>
        <p className="font-bold">
          Experiencia médica integral para su bienestar. 
          <br></br>
          Profesionales comprometidos con su bienestar. 
          <br></br>
          Más de 20 especializaciones médicas
        </p>

        <Button to="services" title="Ver Servicios" />
      </div>
    </div>
  );
};

export default Home;
