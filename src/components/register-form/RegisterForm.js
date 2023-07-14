import { useForm } from "react-hook-form"
import { post } from "../../httprequest/httprequest"
import Swal from "sweetalert2"
export default function RegisterForm() {
  const { register, handleSubmit } = useForm()
  const url = process.env.REACT_APP_API_BASE_URL
  const cbResponse = (response) => {
    console.log('>>>>>',response);
    if (response.status === 200) {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Te has registrado correctamente',
        showConfirmButton: true,
        timer: 3000
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error intentalo nuevamente',
        text: 'Ocurrio un error',
        // position: 'top-end',
        // showConfirmButton: false,
        // timer: 3000
        
      })
    }
  }
  const onSubmit = (data) => {post('http://localhost:3002/api/v1/userslog/register', { ...data, rol:'USER'}, cbResponse)}


  return (
    <div className="flex justify-center items-center h-full border-cyan-600 border-double">
    <form className="bg-slate-100 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <label className="bg-slate-900 text-white text-center">Nombre Completo</label>
      <input className="rounded-lg border-2 row-span-2 mb-5 bg-slate-200" {...register("full_name", { required: true, maxLength: 200 })}placeholder=" Nombre Completo" />

      <label className="bg-slate-900 text-white text-center">Numero de telefono</label>
      <input className="rounded-lg border-2 row-span-2 mb-5 bg-slate-200" {...register("Phone", { required: true, maxLength: 20 })}placeholder=" Numero de telefono" type="number"/>

      <label className="bg-slate-900 text-white text-center">Direccion</label>
      <input className="rounded-lg border-2 row-span-2 mb-5 bg-slate-200" {...register("address", { required: true, maxLength: 200 })}placeholder=" Direccion" />

      <label className="bg-slate-900 text-white text-center">correo</label>
      <input className="rounded-lg border-2 row-span-2 mb-5 bg-slate-200" {...register("email", { required: true, maxLength: 20 })}placeholder=" email" type="email"/>

      <label className="bg-slate-900 text-white text-center">contraseña</label>
      <input className="rounded-lg border-2 row-span-2 mb-5 bg-slate-200" {...register("password", { required: true, maxLength: 20 })}placeholder=" contraseña" type="password"/>
      
      <input type="submit" className="bg-sky-600 rounded-lg"/>
    </form>
    </div>
  )
}