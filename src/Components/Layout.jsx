import { Outlet } from "react-router-dom";
import Navbar from "./navBar";
import Footer from "./Footer";


const Layout = () => {
    return (
        <div className="bg-gray-50">
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