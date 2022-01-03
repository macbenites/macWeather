import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  min-width: 266px;
  margin: 1rem 1rem;
`;

export const NavMenu = styled.div`
  display: flex;
  @media (max-width: 768px) {
    overflow: hidden;
    overflow-y: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    max-height: ${(props) => (props.open ? "100vh" : "0")};
    transition: max-height 0.2s ease-in;
  }
`;

export const LinkNav = styled(Link)`
  color: var(--paragraph);
  text-decoration: none;
  margin: 0 0.5rem;

  &:hover {
    color: var(--link-color);
  }

  @media (max-width: 768px) {
    margin: 1rem 1rem;
    font-size: 1.2rem;
  }
`;
export const Burguer = styled(FaBars)`
  color: var(--headline);
  font-size: 1.5rem;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const Icon = styled(LinkNav)`
  color: var(--headline);
  font-size: 1.6rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  font-weight: 400;
  &:hover {
    color: var(--headline);
  }
`;

export const Icontent = styled.div`
  display: flex;
  align-items: center;
`;
