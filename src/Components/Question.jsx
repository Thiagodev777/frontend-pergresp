import React from "react";

const Question = ({ user, question }) => {
  return (
    <div class="card my-5 shadow">
      <div class="card-header">Publicado por: {user}</div>
      <div class="card-body">
        <h3>{question}</h3>
        <a href="#" class="btn btn-success block">
          Responder
        </a>
      </div>
    </div>
  );
};

export default Question;
