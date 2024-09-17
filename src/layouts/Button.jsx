import React from 'react';

const Button = ({ title, to }) => {
  const handleClick = () => {
    const section = document.getElementById(to);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-bioBlue text-white px-4 py-2 rounded-md hover:bg-brightColor transition duration-300 ease-in-out"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
