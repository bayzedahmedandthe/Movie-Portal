import { Outlet } from "react-router-dom";
import Navbar from "./navBar";
import Footer from "./Footer";
import { useState } from "react";


const Layout = () => {
    const [theme, setTheme] = useState(false);
    const handleTheme = () => {
        setTheme(!theme);
    }
    return (
        <div className={`${theme && "bg-slate-800 "}`}>
           <div onClick={handleTheme} className="lg:ml-6 lg:mt-6 w-16 h-16 rounded-full bg-white flex justify-center dark:bg-slate-800"><button className="text-xl">{theme ? "LHT": "DRK"}</button></div>
            <div>
            <Navbar></Navbar>
            </div>
            <div className="pt-10 w-11/12 mx-auto">
            <Outlet></Outlet>
            </div>
            <div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;