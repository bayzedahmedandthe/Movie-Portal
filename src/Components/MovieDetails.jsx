import { useLoaderData, useParams } from "react-router-dom";


const MovieDetails = () => {
    const movieData = useLoaderData();
    console.log(movieData);
    const { poster, title, genre, duration, release, rating, textarea, } = movieData;

    return (
        <div className="p-4 rounded-lg my-4 border bg-white">

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
                        <button className="btn mt-3 bg-cyan-300">Add to favorite</button>
                        <button className="btn bg-red-500 mt-4">Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MovieDetails;