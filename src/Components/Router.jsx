import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Layout from "./Layout";
import MovieAdventure from "./MovieAdventure";
import Home from "./Home";
import AllMovies from "./AllMovies";
import Login from "./Login";
import Register from "./Register";

const Router = createBrowserRouter([
    {
        path: "/",
        element:<Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
              element: <Home></Home>
            },
            {
                path: "/adventure",
                element: <MovieAdventure></MovieAdventure>
            },
            {
                path: "/allmovies",
                element: <AllMovies></AllMovies>
            },
            {
                path: "/login",
                element: <Login></Login>
            }, {
                path: "/register", 
                element: <Register></Register>
            }
        ]
    },
]);
export default Router;