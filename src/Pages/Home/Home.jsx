import React from "react";
import Question from "../../Components/Question";
import { Link } from "react-router-dom";

const Home = () => {
  const [questions, setQuestions] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetch("http://localhost:3333/questions");
      const json = await res.json();
      setQuestions(json);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1>Olá, Admin!</h1>
        <Link className="btn btn-success px-3" to="new">
          Perguntar
        </Link>
      </div>
      <hr />
      {loading && <h2>Carregando...</h2>}
      {!loading &&
        questions?.map(({ idquestion, title, description, id_user }) => (
          <Question
            key={idquestion}
            idquestion={idquestion}
            id_user={id_user}
            title={title}
            description={description}
          />
        ))}
    </div>
  );
};

export default Home;
