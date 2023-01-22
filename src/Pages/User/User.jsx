import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetch(`http://localhost:3333/user/${params.id}`);
      const data = await res.json();
      setUser(data);
      setLoading(false);
    })();
  }, []);
  return (
    <div className="container">
      {loading && <h2 className="my-5">Carregando...</h2>}
      {!loading && user && (
        <div className="card my-5 shadow">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <h2>Nome: {user.name}</h2>
              <h2>Email: {user.email}</h2>
            </div>
            <hr />
            <div className="d-flex align-items-center justify-content-between">
              <h2>Idade: {user.age}</h2>
              <h2>Sexo: {user.sex === "F" ? "Femino" : "Masculino"}</h2>
              <h2>UF: {user.city}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
