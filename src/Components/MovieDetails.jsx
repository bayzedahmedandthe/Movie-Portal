import { useContext, useState } from "react";
import { useLoaderData, useNavigate} from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";


const MovieDetails = () => {
    const navigate = useNavigate();
    
    const loadedMovieData = useLoaderData();
    const { poster, title, genre, duration, release, rating, textarea, _id} = loadedMovieData;
    const { user } = useContext(AuthContext);
    const handleAddToFavorite = () => {
       const userEmail = user.email;
       const favoriteData = { poster, title, genre, duration, release, rating, userEmail};
       fetch("https://assaignment-10-movie-portal.vercel.app/favorites", {
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(favoriteData)
       })
       .then(res => res.json())
       .then(data => {
        toast.success("Added successfull");
        

       })
    }
    const handleDelete =(_id) => {
        fetch(`https://assaignment-10-movie-portal.vercel.app/movies/${_id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0)
                toast.success("Deleted successfull")
            navigate("/allmovies")
        })
    }

    return (
        <div className="p-4 rounded-lg my-4 border bg-cyan-100">

            <h2 className="text-2xl font-semibold text-center pb-6">{title}</h2>
            <div className="lg:flex justify-center gap-8">
                <div>
                    <img className="rounded-lg" src={poster} alt="" />
                </div>
                <div>
                    <h2 className="pt-3 text-xl font-semibold">{title}</h2>
                    <p className="pt-2 text-xl"><span className="font-semibold">Genre</span>: {genre}</p>
                    <p className="pt-2 text-xl"><span className="font-semibold pr-1">Duration: </span> {duration}</p>
                    <p className="pt-2 text-xl"><span className="font-semibold pr-1">Release Year: </span> {release}</p>
                    <p className="pt-2 text-xl"><span className="font-semibold pr-1">Rating: </span> {rating}</p>
                    <p className="pt-2 text-xl max-w-80 text-gray-500"><span className="font-semibold pr-1 text-black">Summary: </span> {textarea}</p>
                    <div className="flex justify-between items-center">
                        <button onClick={handleAddToFavorite} className="btn mt-3 bg-cyan-300">Add to favorite</button>
                        <button onClick={()=>handleDelete(_id)} className="btn bg-red-500 mt-4">Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MovieDetails;