import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RxGithubLogo } from "react-icons/rx";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="mt-16 bg-cyan-300 ">
            <h2 className="text-2xl font-semibold text-center py-4">Movie portal</h2>
            <h3 className="text-xl font-semibold  py-4 pl-[55px]">Contact Us</h3>
            <div className="w-11/12 mx-auto lg:flex lg:items-center lg:justify-between">
                <div>

                    <h5><a className="flex items-center gap-3 hover:underline" href="https://web.facebook.com/afifahomed.akib/"><FaFacebook />facebook</a></h5>
                    <h5 ><a className="flex items-center gap-3 hover:underline" href="https://github.com/bayzedahmedandthe"><RxGithubLogo></RxGithubLogo>github</a></h5>

                </div>
                <div>

                    <h5 ><a className="flex items-center gap-3 hover:underline" href="https://x.com/?lang=en"><FaTwitter></FaTwitter>Twitter</a></h5>
                    <h5 ><a className="flex items-center gap-3 hover:underline" href="https://en.wikipedia.org/wiki/WhatsApp"><FaWhatsapp></FaWhatsapp>Whatsapp</a></h5>
                </div>
                <div>
                    <h5><a className="flex items-center gap-3 hover:underline" href="https://www.instagram.com/"><BsInstagram />Instagram</a></h5>
                    <h5 className="flex items-center gap-3"><p><FaPhoneVolume></FaPhoneVolume></p>Contact number 01929564378</h5>
                </div>

            </div>
            <div className="border-b-2 mt-8 w-2/4 mx-auto"></div>
            <p className="text-center py-3">bayzedm784@gmail.com</p>
        </div>
    );
};

export default Footer;