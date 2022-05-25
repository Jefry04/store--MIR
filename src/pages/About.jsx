import React from "react";
import foto from "../assets/foto.jpg";

const About = () => {
  return (
    <div className="container__about">
      <img src={foto} alt="jefry" />

      <h1>Jefferson Vasquez</h1>
      <p>Full Stack Developer passionate about technology, 
        ith a degree in Telecommunications engineering, with knowledge 
        in JavaScript. React.Js. Node.js. MongoDB, </p>
      <h4> three things I learned at TOP program in Make It Real: </h4>
      <ul>
        <li>Redux</li>
        <li>React-router</li>
        <li>React</li>
      </ul>
      <strong>jefry04@gmail.com</strong>
      <strong>GITHUB: </strong>
      <a href="https://github.com/Jefry04" target="_blank" rel="noopener noreferrer">https://github.com/Jefry04</a>
    </div>
  );
};

export default About;
