import { useEffect, useState } from "react";
import { getActivos } from "../api/activos.api";  
import { ActivosCard } from "./activoscard";  

export function Activoslist() {
    const [activos, setActivos] = useState([])
        
    useEffect(() => {
        async function loadActivos() {
            const res = await getActivos();
            setActivos(res.data);
        }
        loadActivos();
       }, []);
  return (
    <div>
        {activos.map(recorrer => (
       /* <div key={activo.id}>
            <h2>{activo.usuario}</h2>
            <p>{activo.descripcion}</p>
            <p>{activo.serie}</p>
        </div> */
        <ActivosCard key={recorrer.id} recorrer={recorrer}/>
))}
    </div>
  );
}