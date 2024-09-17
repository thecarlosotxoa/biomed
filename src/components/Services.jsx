import React from "react";
import Button from "../layouts/Button";
import ServicesCard from "../layouts/ServicesCard";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = <RiMicroscopeLine size={35} className="text-bioGreen" />;
  const icon2 = <MdHealthAndSafety size={35} className="text-bioGreen" />;
  const icon3 = <FaHeartbeat size={35} className="text-bioGreen" />;

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Nuestros servicios
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Nuestro enfoque se centra en anticipar y prevenir enfermedades antes
            de que aparezcan,
            <br></br>
            promoviendo un estilo de vida saludable que garantice el bienestar
            físico y mental de nuestros pacientes.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button to="doctors" title="Ver Especialistas" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard
          icon={icon3}
          title="Medicina Medicina General para Toda la Familia"
          text="En nuestra clínica ofrecemos servicios de medicina general, brindando atención primaria y preventiva para todas las edades."
        />
        <ServicesCard
          icon={icon2}
          title="Bienestar Integral"
          text="En nuestro centro médico, complementamos los servicios de salud con prácticas de bienestar como yoga, pilates y diversas terapias físicas. Ofrecemos un enfoque integral que busca armonizar cuerpo y mente."
        />
        <ServicesCard
          icon={icon1}
          title="Servicio de Laboratorio"
          text="Contamos con tecnología moderna y un equipo profesional calificado para realizar exámenes que contribuyen al diagnóstico y seguimiento de diversas condiciones de salud."
        />
      </div>
    </div>
  );
};

export default Services;
