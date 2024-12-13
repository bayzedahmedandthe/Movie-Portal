import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import { signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail, } from "firebase/auth";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const Login = () => {
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const handleLoginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);
                navigate("/")
                toast.success("Login successfull")

            })
            .catch(error => {
                console.log(error);
            })
    }
    const { loginUser } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        loginUser(email, password)
            .then(result => {
                console.log(result);
                navigate("/")
                toast.success("Login successfull")
            })
            .catch(error => {
                console.log(error);
                toast.error("Invalid credential")
            })
    }
    const handleForgetPassword = () => {
        sendPasswordResetEmail(auth, email);
        navigate("/")
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:w-[500px]">
                <h2 className="text-2xl font-semibold pr-60 py-3">Login Now</h2>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <label onClick={handleForgetPassword} className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-cyan-300 text-xl">Login</button>
                        </div>
                        <div className="pt-4">
                            <p>New to this website!<Link className="text-blue-700 hover:underline" to="/register">  Register</Link></p>
                        </div>
                    </form>
                    <div className="pl-8 pb-4">
                        <button onClick={handleLoginWithGoogle} className="btn bg-cyan-300 text-xl px-[75px]">Login with google</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;