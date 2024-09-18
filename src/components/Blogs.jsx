import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";

const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Novedades
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          {/* <Button title="Conozca mas sobre nosotros" /> */}
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} headlines="Como apoyar a los niños en el manejo de sus emociones" />
          <BlogCard img={img2} headlines="¿Cómo evitar la pérdida de memoria en la tercera edad?" />
          <BlogCard
            img={img3}
            headlines="El impacto del ejercicio en tus hormonas"
          />         
        </div>
      </div>
    </div>
  );
};

export default Blogs;
