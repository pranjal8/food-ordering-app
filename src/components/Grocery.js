import React from "react";
import { container } from "./Cart";

const Grocery = () => {
  return (
    <div style={container}>
      <p>
        Grocery Module Which have multiple components inside it{" "}
        <span>lazy loading component</span>
      </p>
    </div>
  );
};

export default Grocery;
