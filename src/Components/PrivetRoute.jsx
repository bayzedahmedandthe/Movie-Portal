import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
   
    if(user){
        return children;
    }
    return (
        <div>
           <Navigate to="/login"></Navigate>
        </div>
    );
};

export default PrivetRoute;