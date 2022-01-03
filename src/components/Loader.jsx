import React from "react";
import { Load, Spinner } from "../styles/Loader.js";

export default function Loader() {
  return (
    <Load>
      <Spinner />
    </Load>
  );
}
