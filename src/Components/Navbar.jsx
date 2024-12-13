import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {

                toast.success("Signout successfull");
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className=" pt-6  ">
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
                            <li className=" rounded-lg  hover:underline hover:text-blue-600"><NavLink to="/">Home</NavLink></li>
                            <li className="rounded-lg  hover:underline hover:text-blue-600"><NavLink to="/allmovies">All movies</NavLink></li>
                            <li className=" rounded-lg  hover:underline hover:text-blue-600"><NavLink to="/addmovie">Add movie</NavLink></li>
                            <li className=" rounded-lg  hover:underline hover:text-blue-600"><NavLink to="/myfavorites">My favorites</NavLink></li>
                        </ul>
                 

                    
                    </div>
                    <NavLink to="/" className="text-2xl font-semibold">Movie  Portal</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1 text-lg flex items-center gap-3">
                        <li className=" rounded-lg pr-3 hover:underline hover:text-blue-600"><NavLink to="/">Home</NavLink></li>
                        <li className=" rounded-lg pr-3 hover:underline hover:text-blue-600"><NavLink to="/allmovies">All movies</NavLink></li>
                        {
                            user && <div className="flex items-center gap-3">
                                <li className=" rounded-lg pr-3 hover:underline hover:text-blue-600"><NavLink to="/addmovie">Add movie</NavLink></li>
                                <li className=" rounded-lg pr-3 hover:underline hover:text-blue-600"><NavLink to="/myfavorites">My favorites</NavLink></li>
                            </div>
                        }

                    </ul>
                </div>
                <div className="navbar-end ">
                    {
                        user ? <div className="flex items-center gap-3 ">
                            <img className="h-12 w-12 rounded-xl" src={user.photoURL} alt="" />
                            <p className="text-lg font-semibold">{user.displayName}</p>

                            <div><button onClick={handleLogOut} className="rounded-lg px-4 py-1 btn hover:bg-black  border-2 bg-black text-white font-semibold">Logout</button> </div>
                        </div> : <div className="flex items-center gap-3">
                            <div className=" rounded-lg px-4 mr-3 py-1 btn hover:bg-black border-2 bg-black text-white font-semibold"><NavLink to="/login" className="text-lg">Login</NavLink></div>
                            <div className=" rounded-lg px-4 py-1 btn hover:bg-black  border-2 bg-black text-white font-semibold"><NavLink to="/register" className="text-lg">Register</NavLink></div>
                        </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;