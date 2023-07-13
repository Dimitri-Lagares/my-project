import { useContext, useState } from "react";
import { fakeAuthProvider } from "./auth";

let AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  let signin = (newUser) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider