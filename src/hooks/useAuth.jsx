import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";

const useAuth = () => {
  const authCustom = useContext(AuthContext);
  return authCustom;
  //   return (
  //     <div>
  //     </div>
  //   )
};

export default useAuth;
