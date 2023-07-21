import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      navigate("/");
      console.log("Submit");
    },
    [navigate]
  );

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input-email">Email</label>
          <input type="email" id="input-email" required />
        </div>
        <div>
          <label htmlFor="input-senha">Senha</label>
          <input type="password" id="input-senha" required />
        </div>
        <button type="submit">Entrar </button>
      </form>
      <Link to="/">Voltar</Link>
    </div>
  );
}
