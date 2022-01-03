import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const CardContent = styled.div`
  ${(props) => {
    const colors = Number(props.color[0] + props.color[1]);
    if (colors >= 1 && colors <= 4 && props.color[2] === "n")
      return css`
        background-image: linear-gradient(
          to right top,
          #3f3351,
          #372d4a,
          #2f2843,
          #27223d,
          #1f1d36
        );
      `;
    else if (colors === 1)
      return css`
        background-image: radial-gradient(
          circle,
          #fee440,
          #ffcb40,
          #ffb248,
          #ff9b53,
          #ff865e
        );
      `;
    else if (colors >= 2 && colors <= 4)
      return css`
        background-image: radial-gradient(
          circle,
          #64c4ed,
          #57b4e5,
          #50a3dd,
          #4d92d3,
          #4f81c7
        );
      `;
    else if (colors === 9 || colors === 10)
      return css`
        background-image: radial-gradient(
          circle,
          #a2b29f,
          #98a795,
          #8d9c8b,
          #839281,
          #798777
        );
      `;
    else if (colors === 11)
      return css`
        background-image: radial-gradient(
          circle,
          #444444,
          #383838,
          #2d2d2d,
          #222222,
          #171717
        );
      `;
    else
      return css`
        background-image: radial-gradient(
          circle,
          #c4b6b6,
          #b2a5a5,
          #a09494,
          #8f8484,
          #7e7474
        );
      `;
  }};
  color: var(--headline);
  border-radius: 1rem;
  width: 260px;
  min-width: 260px;
  height: auto;
  padding: 1.3rem 2rem;
  position: relative;
  transition: 1s;
  &:hover {
    box-shadow: -1px 2px 12px 7px rgba(116, 112, 142, 0.25);
    transition: 0.3s;
  }
`;
export const ButtonClose = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
  margin: 0 auto;
  width: 1.3rem;
  height: 1.3rem;
`;
export const FontTemp = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  span {
    font-weight: lighter;
    font-size: 1.5rem;
  }
`;
export const CardLink = styled(Link)`
  color: var(--headline);
  font-size: 1.3rem;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: var(--link-color);
  }
`;

export const CardMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    margin: 0;
    font-weight: 900;
  }
  p {
    margin: 0px;
    font-size: 0.8rem;
    font-weight: 300;
    color: var(--headline);
  }
`;

export const CardInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 1.2rem;
`;
export const InfoContainer = styled.div`
  display: block;
  font-size: 0.8rem;
  font-weight: bold;
  img {
    width: 30px;
    height: 30px;
  }
`;
