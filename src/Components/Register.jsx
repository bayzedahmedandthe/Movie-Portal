import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";



const Register = () => {
    const navigate = useNavigate()
    const context = useContext(AuthContext);
    const { creatUser, updateUserProfile, setUser } = context;
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const name = form.name.value;
        form.reset();
        if(password.length < 6){
            return toast.error("Password must be 6 character")
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if(!passwordRegex.test(password)){
            return toast.error("password at least one uppercase, one lowercase")
        }
        // console.log(email, password);
        creatUser(email, password)
            .then(result => {
                // console.log(result.user);
                navigate("/")
                toast.success("Registation successfull");
                
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        // console.log("update user");
                        setUser((prevUser) => { return { ...prevUser, displayName: name, photoURL: photo } })
                    })
                    .catch((error => {
                        console.log(error);
                    }))
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className="hero bg-cyan-100 min-h-screen">
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
                        <div className="pt-4">
                            <p>Alredy have an account <Link className="text-blue-700 hover:underline" to="/login">   Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;