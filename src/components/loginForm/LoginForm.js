import { useContext } from "react"
import { useForm } from "react-hook-form"
import { post } from "../../httprequest/httprequest"
import Swal from "sweetalert2"
import {AuthContext} from "../../auth/AuthContext"
import { useNavigate } from "react-router-dom"

export default function LoginForm() {
    const { register, handleSubmit } = useForm()
    const url = 'http://localhost:3002/api/v1'
    const {signin} = useContext(AuthContext);
    const navigate = useNavigate()

    const cbRedirect = () => {
        navigate('/register')
    };

  const cbResponse = (response) => {
    console.log('>>>>>',response);
    if (response.name != '' ) {
        localStorage.setItem('userInfo', JSON.stringify(response));
        signin(response, cbRedirect)
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
  const onSubmit = (data) => {post(`${url}/userslog/auth`, data, cbResponse)}


  return (
    <div className="flex justify-center items-center h-full border-cyan-600 border-double">
    <form className="bg-slate-100 flex flex-col" onSubmit={handleSubmit(onSubmit)}>

      <label className="bg-slate-900 text-white text-center">correo</label>
      <input className="rounded-lg border-2 row-span-2 mb-5 bg-slate-200" {...register("email", { required: true, maxLength: 20 })}placeholder=" email" type="email"/>

      <label className="bg-slate-900 text-white text-center">contraseña</label>
      <input className="rounded-lg border-2 row-span-2 mb-5 bg-slate-200" {...register("password", { required: true, maxLength: 20 })}placeholder=" contraseña" type="password"/>
      
      <input type="submit" className="bg-sky-600 rounded-lg"/>
    </form>
    </div>
  )
}