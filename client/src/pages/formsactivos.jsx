import {useForm} from 'react-hook-form';
import { createActivos } from '../api/activos.api';

export function FormsActivos() {
  const {register, handleSubmit, formState: {errors
  }} = useForm();
  const onSubmit = handleSubmit(async data => { 
    const res = await createActivos(data);
    console.log(res);
  
  });

  return (
  <div>
<form onSubmit={onSubmit}>
  <input type="text" placeholder="usuario" 
  {...register("usuario", {required: true})}/>
  {errors.usuario && <span>Este campo es obligatorio</span>}
  <input type="text" placeholder="descripcion" 
  {...register("descripcion", {required: true})}/>
  {errors.descripcion && <span>Este campo es obligatorio</span>}
  <input type="text" placeholder="serie" 
  {...register("serie", {required: true})}/>
  {errors.serie && <span>Este campo es obligatorio</span>}  
  <button>Guardar</button>
</form>

  </div>
);
}
