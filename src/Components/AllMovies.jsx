import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";

const AllMovies = () => {
    const movieData = useLoaderData();
    // console.log(movieData);
    return (
        <div>
            <h2 className="text-2xl font-semibold  pb-12">All movies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
                {
                    movieData.map(movie => <MovieCard movieData={movie} key={movie}></MovieCard>)
                        // <div className="border rounded-xl bg-white shadow-lg">
                        //     <div className="p-8">
                        //         <img className="rounded-lg" src={movie.poster} alt="" />
                        //         <h2 className="pt-3 text-xl font-semibold">{movie.title}</h2>
                        //         <p className="pt-2"><span className="font-semibold">Genre</span>: {movie.genre}</p>
                        //         <p className="pt-2"><span className="font-semibold pr-1">Duration: </span> {movie.duration}</p>
                        //         <p className="pt-2"><span className="font-semibold pr-1">Release Year: </span> {movie.release}</p>
                        //         <p className="pt-2"><span className="font-semibold pr-1">Rating: </span> {movie.rating}</p>
                        //         {
                        //             user ? <button className="btn bg-cyan-300 w-full"><Link to={`movie/${_id}`}>See Details</Link></button> :
                        //                 <button className="btn bg-cyan-300 w-full"><Link to="/login">See Details</Link></button>
                        //         }
                        //     </div>
                        // </div>)
                }
            </div>
        </div>
    );
};

export default AllMovies;