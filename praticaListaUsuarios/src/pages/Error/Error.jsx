import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <Link to="/">Voltar</Link>
    </div>
  );
}
