import React from "react";
import { useHistory } from "react-router-dom";

const ErrorPage = () => {
  const history = useHistory();
  return (
    <>
      <p>Erro 404 - Essa página não existe!</p>
      <button onClick={history.goBack}>Voltar</button>
    </>
  );
};

export default ErrorPage;
