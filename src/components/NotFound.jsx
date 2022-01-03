import React from "react";
import styled from "styled-components";
import notFound from "../img/notFound.svg";

export default function NotFound() {
  return (
    <PageNotFound>
      <h1>Page Not Found</h1>
      <img src={notFound} alt="pageNotFound" />
    </PageNotFound>
  );
}

const PageNotFound = styled.div`
  color: var(--headline);
  text-align: center;
  margin: 2rem 2rem;
  img {
    width: 100%;
  }
`;
