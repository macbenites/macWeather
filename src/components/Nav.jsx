import { useState } from "react";
import logo from "../img/iconLogo.svg";

import {
  NavContainer,
  Burguer,
  Icon,
  LinkNav,
  Icontent,
  NavMenu,
} from "../styles/Nav.js";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer>
      <Icon to="/">
        <Icontent>
          <img src={logo} alt="Sun" />
        </Icontent>
      </Icon>
      <Burguer onClick={handleOnClick} />
      <NavMenu open={isOpen}>
        <LinkNav to="/" onClick={handleOnClick}>
          Home
        </LinkNav>
        <LinkNav to="/about" onClick={handleOnClick}>
          About
        </LinkNav>
      </NavMenu>
    </NavContainer>
  );
}
