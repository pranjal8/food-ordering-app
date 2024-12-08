import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h3>Oops!!</h3>
      <h4> {err.error.message} </h4>
    </div>
  );
};

export default Error;
