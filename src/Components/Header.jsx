import { useEffect } from "react";
import banner1 from "../assets/istockphoto-1168570266-612x612.jpg"
import banner2 from "../assets/istockphoto-1302499179-612x612.jpg"
import banner3 from "../assets/istockphoto-1342012371-612x612.jpg"
import Aos from "aos";

const Header = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full md:h-[450px]">


                <img
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                    src={banner1}
                    className=" w-full filter brightness-50" />
                <div className="absolute text-white top-20 left-32 font-semibold text-2xl">
                    <p>On our site you will find many types of mind-blowing movies. <br /> Such as action movies, romantic movies, horros movies, english movies, etc.</p>
                </div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full md:h-[450px]">

                <img
                    src={banner2}
                    className="w-full filter brightness-50" />
                <p className="absolute top-48 left-[500px] text-4xl text-white font-semibold">Enjoy your time</p>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full md:h-[450px]">

                <img
                    src={banner3}
                    className="w-full filter brightness-50" />
                <p className="absolute text-4xl font-semibold top-44 left-[700px] text-white">Enjoy movies</p>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Header;