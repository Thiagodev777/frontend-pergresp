import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Question = ({ idquestion, title, description, id_user }) => {
  const [user, setUser] = React.useState("");
  const navigate = useNavigate();
  const reply = () => {
    navigate(`/pergunta/${idquestion}`);
  };
  React.useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3333/user/${id_user}`);
      const data = await res.json();
      setUser(data);
    })();
  }, []);
  return (
    <div className="card my-5 shadow">
      <div className="card-header">
        Publicado por: {user.name} | {user.email}
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <a className="btn btn-success block" onClick={reply}>
          Responder
        </a>
      </div>
    </div>
  );
};

export default Question;
