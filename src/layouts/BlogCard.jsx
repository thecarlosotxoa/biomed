import React from "react";

const BlogCard = ({ img, headlines, text }) => {
  return (
    <div className="h-auto w-full lg:w-1/4 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
      <div className="flex justify-center">
        <img
          className="w-full max-w-lg h-auto rounded-lg"
          src={img}
          alt="img"
        />
      </div>
      <h2 className=" text-lg text-center font-semibold">{headlines}</h2>
      <p className=" text-center text-sm">
        {text}
      </p>
    </div>
  );
};

export default BlogCard;