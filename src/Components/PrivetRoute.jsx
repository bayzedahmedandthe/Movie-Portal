import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext);
   
    if(user){
        return children;
    }
    return (
        <div>
           
        </div>
    );
};

export default PrivetRoute;