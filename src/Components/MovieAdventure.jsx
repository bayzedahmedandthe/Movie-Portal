// import { useLoaderData } from "react-router-dom";

import {useState } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";


const MovieAdventure = () => {
    const [movieData, setMovieData] = useState([]);
    // const movieData = useLoaderData();
    fetch("https://assaignment-10-movie-portal.vercel.app/highest-rated-reviews")
    .then(res => res.json())
    .then(data => setMovieData(data))
    
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
                {
                    movieData.map(data => < MovieCard movieData={data} key={data._id}></MovieCard>)
                }
            </div>
            <button className="btn bg-cyan-300 mt-12 text-lg font-semibold"><Link to="/allmovies">See all movies</Link></button>
        </div>
    );
};

export default MovieAdventure;