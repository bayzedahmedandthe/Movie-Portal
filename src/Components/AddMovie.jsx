

const AddMovie = () => {
    const handleAddMovie = (e) => {
        e.preventDefault();
        const form = e.target;
        const poster = form.poster.value;
        const title = form.title.value;
        const genre = form.genre.value;
        const duration = form.duration.value;
        const release = form.release.value;
        const rating = form.rating.value;
        const textarea = form.textarea.value;
        const movieDetails = {poster, title, genre, duration, release, rating, textarea,};
        fetch("http://localhost:5000/movies",{
            method: "post",
           headers: {
             "content-type": "application/json"
           },
            body: JSON.stringify(movieDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            form.reset();
        })
        fetch("http://localhost:5000/highest-rated-reviews", {
            method: "post", 
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(movieDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            form.reset();
        })
    }
    return (
        <div>
            <div className=" pt-10 ">
                <form onSubmit={handleAddMovie}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="">
                            <h3 className="text-lg font-semibold py-2">Movie poster</h3>
                            <input
                                name="poster"
                                type="text"
                                placeholder="Type here"
                                required
                                className="input input-bordered   w-full " />
                        </div>
                        <div className="">
                            <h3 className="text-lg font-semibold py-2">Movie title</h3>
                            <input
                                name="title"
                                type="text"
                                placeholder="Type here"
                                required
                                className="input input-bordered w-full " />

                        </div>
                        <div className="">
                            <h3 className="text-lg font-semibold py-2">Genre</h3>
                            <select className="select select-bordered md:pr-[510px]" name="genre" id="">
                                <option disabled selected>Select genre</option>
                                <option value="Comedy">comedy</option>
                                <option value="Horror">horror</option>
                                <option value="Action">action</option>
                                <option value="Romantic">romantic</option>
                                <option value="drama">drama</option>
                            </select>
                        </div>
                        <div className="">
                            <h3 className="text-lg font-semibold py-2">Duration</h3>
                            <input
                                name="duration"
                                type="text"
                                placeholder="Type here"
                                required
                                className="input input-bordered w-full " />
                        </div>
                        <div className="">
                            <h3 className="text-lg font-semibold py-2">Release year</h3>
                            <select className="select select-bordered md:pr-[473px]" name="release" id="">
                                <option disabled selected>Select release year</option>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                            </select>
                        </div>
                        <div className="">
                            <h3 className="text-lg font-semibold py-2">Rating</h3>
                            <input
                                name="rating"
                                type="text"
                                placeholder="Type here"
                                required
                                className="input input-bordered w-full " />
                        </div>
                        <div className="">
                            <h3 className="text-lg font-semibold py-2">Summary</h3>
                            <textarea
                                name="textarea"
                                placeholder="summary"
                                className="textarea input-bordered textarea-sm w-full "></textarea>
                        </div>

                    </div>
                    <div className="flex justify-center my-8 btn hover:bg-cyan-300 bg-cyan-300">
                        <input type="submit" value="Add movie" />
                    </div>
                </form>
            </div >
        </div >
    );
};

export default AddMovie;