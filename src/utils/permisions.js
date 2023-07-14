import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

function useAuth() {
    return useContext(AuthContext)
}

function Permisions({ children }){
        let auth = useAuth();

        if (!auth.user){
            return null;
        }
    return children
    }

export default Permisions