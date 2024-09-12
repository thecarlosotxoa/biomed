import React from "react";

const Contact = ({ closeForm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
          <h1 className="text-4xl font-semibold text-center">Agende su cita</h1>
          <div className="flex flex-col">
            <input
              type="text"
              name="nombreUsuario"
              id="nombreUsuario"
              placeholder="Nombre"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="apellidoUsuario"
              id="apellidoUsuario"
              placeholder="Apellido"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              name="correoUsuario"
              id="correoUsuario"
              placeholder="Correo electrónico"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="number"
              name="telefonoUsuario"
              id="telefonoUsuario"
              placeholder="Número de teléfono"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            />
          </div>
          <div>
            <button>Agende su cita</button>
            <button
              className="bg-bioGreen text-white px-10 rounded-md active:bg-red-500"
              onClick={closeForm}
            >
              Cerrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
