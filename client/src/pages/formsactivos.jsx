import {useForm} from 'react-hook-form';
import { createActivos } from '../api/activos.api';
import { useNavigate } from 'react-router-dom';

export function FormsActivos() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async data => { 
    await createActivos(data);
    navigate('/activos');
  
  });

  return (
  <div>
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Usuario" 
        {...register("usuario", {required: true})}/>
      {errors.usuario && <span>Este campo es obligatorio</span>}
      
      <input type="text" placeholder="Descripción" 
        {...register("descripcion", {required: true})}/>
      {errors.descripcion && <span>Este campo es obligatorio</span>}
      
      <input type="text" placeholder="Service Tag" 
        {...register("service_tag", {required: true, maxLength: 10})}/>
      {errors.service_tag && <span>Este campo es obligatorio y debe tener máximo 10 caracteres</span>}
      
      <input type="number" placeholder="Número de Serie" 
        {...register("serie", {required: true, valueAsNumber: true})}/>
      {errors.serie && <span>Este campo es obligatorio y debe ser un número</span>}
      
      <input type="text" placeholder="Modelo" 
        {...register("modelo", {required: true, maxLength: 30})}/>
      {errors.modelo && <span>Este campo es obligatorio</span>}
      
      <input type="text" placeholder="Nombre" 
        {...register("nombre", {required: true, maxLength: 30})}/>
      {errors.nombre && <span>Este campo es obligatorio</span>}
      
      <input type="text" placeholder="Marca" 
        {...register("marca", {required: true, maxLength: 20})}/>
      {errors.marca && <span>Este campo es obligatorio</span>}
      
      <button>Guardar</button>
    </form>
  </div>
);
}
