import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Search = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.6rem;
  margin: 2rem 2rem;
  font-size: 1.2em;
  border-radius: 5px;
  margin: 1rem 1rem;
  border: solid 2px var(--border);

  &:hover {
    outline: 3px solid transparent;
    border: solid 2px var(--link-color);
  }

  input {
    color: var(--headline);
    padding: 5px;
    outline: none;
    border: none;
    width: 100%;
    font-size: 1.1rem;
    background-color: transparent;
  }
`;

export const IconSearch = styled(FaSearch)`
  margin: 0 0.5rem;
  font-size: 1.2rem;
  color: var(--paragraph);
`;
