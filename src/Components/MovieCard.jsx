import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext, useEffect } from "react";
import Aos from "aos";

const MovieCard = ({ movieData }) => {
    useEffect(() => {
        Aos.init();
    }, [])
    // console.log(movieData);
    const { user } = useContext(AuthContext);
    const { poster, title, genre, duration, release, rating, _id } = movieData;
    return (
        <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
        className="rounded-xl border bg-cyan-100">
            <div className="p-8">
                <img className="rounded-lg" src={poster} alt="" />
                <h2 className="pt-3 text-xl font-semibold">{title}</h2>
                <p className="pt-2"><span className="font-semibold">Genre</span>: {genre}</p>
                <p className="pt-2"><span className="font-semibold pr-1">Duration: </span> {duration}</p>
                <p className="pt-2"><span className="font-semibold pr-1">Release Year: </span> {release}</p>
                <p className="pt-2"><span className="font-semibold pr-1">Rating: </span> {rating}</p>
                {
                    user ? <button className="btn bg-cyan-300 w-full mt-4"><Link to={`/movie/${_id}`}>See Details</Link></button> :
                        <button className="btn bg-cyan-300 w-full mt-4"><Link to="/login">See Details</Link></button>
                }
            </div>
        </div>
    );
};

export default MovieCard;