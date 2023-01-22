import React from "react";
import Question from "../../Components/Question";
import Welcome from "../../Components/Welcome";

const Home = () => {
  const [bdfake, Bdfake] = React.useState([
    { id: 1, user: "antonio@gmail.com", question: "Mysql e bom ?" },
    { id: 2, user: "thiago@gmail.com", question: "git hub e bom?" },
    { id: 3, user: "anderson@gmail.com", question: "progamador ok" },
    { id: 4, user: "joao@gmail.com", question: "styled-components" },
  ]);

  return (
    <div className="container">
      <Welcome nome="Rafael" />
      {bdfake.map((question) => (
        <Question
          key={question.id}
          user={question.user}
          question={question.question}
        />
      ))}
    </div>
  );
};

export default Home;
