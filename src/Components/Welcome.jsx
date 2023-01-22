import React from "react";

const Welcome = ({ nome }) => {
  return (
    <div className="mt-5">
      <h1>Olá, {nome}!</h1>
      <hr />
    </div>
  );
};

export default Welcome;
