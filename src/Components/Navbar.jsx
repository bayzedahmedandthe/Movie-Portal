import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className=" pt-10 bg-cyan-400 ">
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
                            <li><a>Home</a></li>
                            <li>

                            </li>
                            <li><a>All movies</a></li>
                        </ul>
                    </div>
                    <Link to="/" className="text-2xl font-demibold">Movie  Portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1 text-lg flex items-center gap-3">
                        <li className="border-2 border-purple-500 rounded-lg px-4 py-1"><Link to="/">Home</Link></li>
                        <li>

                        </li>
                        <li className="border-2 border-purple-500 rounded-lg px-4 py-1"><Link to="/allmovies">All movies</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="border-2 border-purple-500 rounded-lg px-4 py-1"><Link to="/login" className="text-lg">Login</Link></div>
                </div></div>
        </div>
    );
};

export default Navbar;