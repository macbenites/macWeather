import React from "react";
import { Helmet } from "react-helmet";
import webDeveloper from "../img/webDeveloper.svg";
import { AboutContainer, AboutMe, Effect } from "../styles/About.js";

export default function About() {
  return (
    <AboutContainer>
      <Helmet>
        <title>AboutMe</title>
      </Helmet>
      <AboutMe>
        <Effect>¡Hello World!</Effect>
        <p>
          I'm <strong>Marlon Acosta</strong> and I want to introduce you to this
          web application that I was able to develop during the soyHenry
          bootcamp, I really enjoyed the development process of this project
          since I was improving my skills in React, and learning some new ones
          such as styled Components. In weatherApp you can find information
          about the weather of different cities around the world.🙌🚀
        </p>
      </AboutMe>
      <img src={webDeveloper} alt="Web Developer" />
    </AboutContainer>
  );
}
