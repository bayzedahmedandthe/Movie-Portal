import Marquee from "react-fast-marquee";


const ExtraSection = () => {
    return (
        <div className="border-2 p-4 rounded-lg">
            <div>
                <h2 className="text-2xl text-cyan-500 font-semibold pb-8">Comming soon</h2>
                <Marquee autoFill pauseOnHover>
                    <div className="bg-[url('https://i.ibb.co.com/8976Jmv/images-22.jpg')] lg:h-[200px] lg:w-[200px]">

                    </div>
                    <div className="bg-[url('https://i.ibb.co.com/82LXSv8/download-13.jpg')] lg:h-[200px] lg:w-[200px]">

                    </div>
                    <div className="bg-[url('https://i.ibb.co.com/8YKn4f3/download-14.jpg')] lg:h-[200px] lg:w-[200px]">

                    </div>
                    <div className="bg-[url('https://i.ibb.co.com/QmgTfZ5/download-15.jpg')] lg:h-[200px] lg:w-[200px]">

                    </div>
                    <div className="bg-[url('https://i.ibb.co.com/M5VJZKP/images-12.jpg')] lg:h-[200px] lg:w-[200px]">

                    </div>
                    <div className="bg-[url('https://i.ibb.co.com/wgp65wT/images-16.jpg')] lg:h-[200px] lg:w-[200px]">

                    </div>
                </Marquee>
                <Marquee className="pt-4" autoFill pauseOnHover direction="right">
                    <div className="bg-[url('https://i.ibb.co.com/Hh9tc7d/images-15.jpg')] lg:h-[200px] lg:w-[200px]">

                    </div>
                    <div className="bg-[url('https://i.ibb.co.com/ZKWx0Gh/images-17.jpg')] lg:h-[200px] lg:w-[200px]">

                    </div>
                    <div className="bg-[url('https://i.ibb.co.com/vZxZDKL/images-18.jpg')] lg:h-[200px] lg:w-[200px]">

                    </div>
                    <div className="bg-[url('https://i.ibb.co.com/QmgTfZ5/download-15.jpg')] lg:h-[200px] lg:w-[200px]">

                    </div>
                    <div className="bg-[url('https://i.ibb.co.com/JpBXb0D/images-19.jpg')] lg:h-[200px] lg:w-[200px]">

                    </div>
                    <div className="bg-[url('https://i.ibb.co.com/Xx4jYXL/images-14.jpg')] lg:h-[200px] lg:w-[200px]">

                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default ExtraSection;