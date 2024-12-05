import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import auth from "../../Firebase.init";


const Navbar = () => {
    const {user, logOut}  = useContext(AuthContext);
    const handleLogOut = () => {
        logOut(auth)
        .then(result => {
            console.log(result);
        })
        .then(error => {
            console.log(error);
        })
    }
    return (
        <div className=" pt-10 bg-cyan-300 ">
            <div className="w-11/12 mx-auto navbar pb-[36px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-cyan-400 rounded-box z-[1]  w-52 p-2 shadow">
                            <li className="border-2 border-purple-500 rounded-lg px-4 py-1"><NavLink to="/">Home</NavLink></li>
                            <li>

                            </li>
                            <li className="border-2 border-purple-500 rounded-lg px-4 py-1"><NavLink to="/allmovies">All movies</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to="/" className="text-2xl font-demibold">Movie  Portal</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1 text-lg flex items-center gap-3">
                        <li className="border-2 border-purple-500 rounded-lg px-4 py-1"><NavLink to="/">Home</NavLink></li>
                        <li>

                        </li>
                        <li className="border-2 border-purple-500 rounded-lg px-4 py-1"><NavLink to="/allmovies">All movies</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end ">
                   {
                    user? <div className="flex items-center gap-3 border-2">
                        <div><img src={user.photoURL} alt="" /></div>
                        <div><button onClick={handleLogOut} className="btn btn-primary">Logout</button> </div>
                    </div>: <div className="flex items-center gap-3">
                        <div className="border-2 border-purple-500 rounded-lg px-4 mr-3 py-1"><NavLink to="/login" className="text-lg">Login</NavLink></div>
                        <div className="border-2 border-purple-500 rounded-lg px-4 py-1"><NavLink to="/register" className="text-lg">Register</NavLink></div>
                    </div>
                   }
                </div>
                
                </div>
        </div>
    );
};

export default Navbar;