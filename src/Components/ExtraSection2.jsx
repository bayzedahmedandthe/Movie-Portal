import Aos from "aos";
import { useEffect } from "react";

const ExtraSection2 = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div>
            <div>
                <h2 className="text-2xl font-semibold text-cyan-500">Best of 2024</h2>
                <p className="text-xl text-cyan-400">The year in review</p>
                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 pt-4">
                    <div className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 py-16">
                        <h3 className="font-bold text-2xl text-center">Most popular movies <br />
                            <span className="font-bold text-3xl text-center">of 2024</span>
                        </h3>
                    </div>
                    <div
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 py-16">
                        <h3 className="font-bold text-2xl text-center">Your best <br />
                            <span className="font-bold text-3xl text-center">of 2024</span>
                        </h3>
                    </div>
                    <div
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 py-16">
                        <h3 className="font-bold text-2xl text-center">Most popular TV shows <br />
                            <span className="font-bold text-3xl text-center">of 2024</span>
                        </h3>
                    </div>
                    <div
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 py-16">
                        <h3 className="font-bold text-2xl text-center">Most popular stars <br />
                            <span className="font-bold text-3xl text-center">of 2024</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection2;