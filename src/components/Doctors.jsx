import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Doctors = () => {
  const data = [
    {
      img: "https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/436349577_971016331699010_1797170312131625052_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fwYEUWUW6mYQ7kNvgEU7PqH&_nc_ht=scontent-qro1-2.xx&_nc_gid=AAj68LuObevwZ98c93xjdLc&oh=00_AYABvL4wz8zLgqQaWx44EFKIXcD7IH13a1vYCmG1u2woNw&oe=66EF92DE",
      name: "Dra. Carolina García",
      specialties: "Psicología Infantil",
    },
    {
      img: "/src/assets/img/doc2.jpg",
      name: "Lcda. Stephanie Ledezma",
      specialties: "Fisioterapeuta",
    },
    {
      img: "/src/assets/img/doc3.jpg",
      name: "Dra. Laura Cambronero",
      specialties: "Odontología",
    },
    {
      img: "/src/assets/img/doc4.jpg",
      name: "Dr. Alejandro Sanabria",
      specialties: "Cardiología",
    },
    {
      img: "/src/assets/img/doc5.jpg",
      name: "Lcda. María Miranda",
      specialties: "Terapia Ocupacional",
    },
    {
      img: "/src/assets/img/doc6.jpg",
      name: "Dra. Alicia Castro",
      specialties: "Terapia respiratoria y rehabilitación",
    },
    {
      img: "/src/assets/img/doc7.jpg",
      name: "Dr. Ronny Vega",
      specialties: "Especialista en Ozonoterapia y medicina regenerativa",
    },
    {
      img: "/src/assets/img/doc8.jpg",
      name: "Dra. Ariana Morales",
      specialties: "Especialista en medicina estética",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Nuestro Personal
          </h1>
          <p className=" mt-2 text-center lg:text-start">
           
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className=" bg-[#d5f2ec] text-bioGreen px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className=" bg-[#d5f2ec] text-bioGreen px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className=" mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              className="h-auto text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
              key={index}
            >
              <div>
                <img
                  src={e.img}
                  alt="img"
                  className="h-auto rounded-t-xl w-full"
                />
              </div>

              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-xl pt-4">{e.name}</h1>
                <h3 className="pt-2">{e.specialties}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
