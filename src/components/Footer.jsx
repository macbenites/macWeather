import logo from "../img/iconLogo.svg";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  FootContent,
  Description,
  FooterLower,
  Contact,
  LinkContact,
  Rotate,
} from "../styles/Footer.js";

export default function Footer() {
  const socialMedia = [
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/marlonacostab/",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/marlonalexisacostabenites/",
    },
    { icon: <FaGithub />, url: "https://github.com/macbenites" },
    { icon: <Rotate />, url: "https://reactjs.org/" },
  ];
  return (
    <FootContent>
      <Description>
        <div>
          <img src={logo} alt="icon Weather" />
        </div>

        <p>
          The purpose of WeatherApp is to show detailed information about the
          consulted city, and also to be able to practice frontend web
          development.
        </p>
      </Description>
      <FooterLower>
        <p>
          MIT License &copy; {new Date().getFullYear()} Developed by Marlon
          Acosta.
        </p>
        <Contact>
          {socialMedia.map((e, index) => (
            <LinkContact
              href={e.url}
              key={index}
              target={"_blank"}
              rel="noreferrer"
            >
              {e.icon}
            </LinkContact>
          ))}
        </Contact>
      </FooterLower>
    </FootContent>
  );
}
