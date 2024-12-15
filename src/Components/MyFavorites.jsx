import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyFavorites = () => {
    const favoriteData = useLoaderData();
    const [movieData, setmovieData] = useState(favoriteData);
    const handleDelete = _id => {
        fetch(`https://assaignment-10-movie-portal.vercel.app/favorites/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = movieData.filter(movie => movie._id !== _id);
                    setmovieData(remaining);
                    toast.success("Deleted successfull");
                }
            })
    }
    return (
        <div>
            <h2 className='text-2xl text-cyan-500 font-semibold pb-12'>Favorites Movies</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-20'>
                {
                   movieData.map(favorite =>
                        <div className="rounded-xl border bg-cyan-100">
                            <div className="p-8">
                                <img className="rounded-lg" src={favorite.poster} alt="" />
                                <h2 className="pt-3 text-xl font-semibold">{favorite.title}</h2>
                                <p className="pt-2"><span className="font-semibold">Genre</span>: {favorite.genre}</p>
                                <p className="pt-2"><span className="font-semibold pr-1">Duration: </span> {favorite.duration}</p>
                                <p className="pt-2"><span className="font-semibold pr-1">Release Year: </span> {favorite.release}</p>
                                <p className="pt-2"><span className="font-semibold pr-1">Rating: </span> {favorite.rating}</p>
                                <button onClick={() => handleDelete(favorite._id)} className='btn bg-red-500 w-full text-xl mt-4'>Delete Favorite</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default MyFavorites;