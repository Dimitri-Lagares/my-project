import { Link, useNavigate, Outlet } from "react-router-dom"
import { AuthContext } from "../../auth/AuthContext";
import { useContext } from "react";
import Permissions from "../../utils/permisions";

const Layout = () => {

  const navigate = useNavigate();
  const {signout} = useContext(AuthContext);
  const cbRedirect = () => {
    navigate('/login');
  };

  const fnLogout = () => {
    localStorage.removeItem('userInfo')
    signout(cbRedirect);
  };
  return (
    <div>
    <ul className=" w-full flex flex-row justify-end h-11 bg-sky-800 text-white ">
      <li className="mx-5 text-lg">
        <Link to="/">Home</Link>
      </li>
      <li className="mx-5 text-lg">
        <Link to="/login">Login</Link>
      </li>
      <li className="mx-5 text-lg">
        <Link to="/register">Registro</Link>
      </li>

      <Permissions>
      <li className="mx-5 text-lg">
        <Link to="/quotes">Citas</Link>
      </li>
      <li className="mx-5 text-lg">
        <Link to="/dashboard">Panel de control</Link>
      </li>
      <li className="mx-5 text-lg">
        <Link onClick={fnLogout}>Salir</Link>
      </li>
      </Permissions>
    </ul>

    <Outlet />
  </div>
  )
}

export default Layout