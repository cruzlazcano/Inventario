import { useNavigate } from "react-router-dom";

export function ActivosCard({ recorrer }) {
    const Navigate = useNavigate();
    
    return (
        <div style={{background: "black", color: "white", padding: "10px", margin: "10px", cursor: "pointer"}}
        
          onClick={() => Navigate(`/forms/${recorrer.id}`)}>

            <h2>{recorrer.usuario}</h2>
            <p>{recorrer.descripcion}</p>
            <p>{recorrer.serie}</p>
        </div> 
    );
}