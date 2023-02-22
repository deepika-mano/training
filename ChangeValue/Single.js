import React from "react";
import Formula from "./Formula";

const Single = () => {
  return (
    <div>
      <h1>Formula</h1>
      <h2>
        (a+b+c+d)<sup>2</sup>= a<sup>2</sup>+ b<sup>2</sup>+ c<sup>2</sup>+ d
        <sup>2</sup>+ 2ab + 2ac+ 2ad + 2bc+ 2bd +2cd
      </h2>
      <Formula />
    </div>
  );
};

export default Single;
