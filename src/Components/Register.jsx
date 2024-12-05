import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const Register = () => {
    const context = useContext(AuthContext);
    const { creatUser, updateUserProfile, setUser } = context;
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const name = form.name.value;

        // console.log(email, password);
        creatUser(email, password)
            .then(result => {
                console.log(result.user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        // console.log("update user");
                        setUser((prevUser) => { return { ...prevUser, displayName: name, photoURL: photo } })
                    })
                    .catch((error => {
                        // console.log(error);
                    }))
            })
            .then(error => {
                console.log(error);
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:w-[500px]">
                <h2 className="text-2xl font-semibold pr-56 py-3">Register Now</h2>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo-URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo-URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-cyan-300 text-xl">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;