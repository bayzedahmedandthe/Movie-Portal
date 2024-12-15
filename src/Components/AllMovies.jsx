import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";

const AllMovies = () => {
    const movieData = useLoaderData();
   const [data, setData] = useState(movieData);
    const [search, setSearch] = useState("");
    useEffect(() => {
        fetch(`https://assaignment-10-movie-portal.vercel.app/movies?searchparams=${search}`)
        .then(res => res.json())
        .then(data => setData(data))
    }, [search])
    return (
        <div>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-cyan-500 pb-12">All movies</h2>
                <div> <h2 className="text-cyan-500 text-xl">Search Movie</h2> <input
                    onChange={(e) => setSearch(e.target.value)}
                    className="input input-info my-3" type="text" placeholder="search" name="serch" /></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
                {
                    data.map(movie => <MovieCard movieData={movie} key={movie}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default AllMovies;