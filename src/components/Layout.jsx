import React from "react";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import { Helmet } from "react-helmet";

export default function Layout({ children, onSearch }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta description="A simple and fast way to search weather" />
        <title>weatherApplication</title>
      </Helmet>
      <Nav />
      <SearchBar onSearch={onSearch} />
      {children}
    </>
  );
}
