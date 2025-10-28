export function ActivosCard({ recorrer }) {
    return (
        <div>
            <h2>{recorrer.usuario}</h2>
            <p>{recorrer.descripcion}</p>
            <p>{recorrer.serie}</p>
        </div> 
    );
}