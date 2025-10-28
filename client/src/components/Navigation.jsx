import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div>
        <Link to="/Activos"> <h1>Activos </h1></Link>       
        <Link to="/formsactivos">Formulario de Activos</Link>
        </div>
  );
}

