import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Layout from "./Layout";
import MovieAdventure from "./MovieAdventure";
import Home from "./Home";
import AllMovies from "./AllMovies";
import Login from "./Login";
import Register from "./Register";
import AddMovie from "./AddMovie";
import MyFavorites from "./MyFavorites";
import PrivetRoute from "./PrivetRoute";
import MovieDetails from "./MovieDetails";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/adventure",
                element: <MovieAdventure></MovieAdventure>,
            },
            {
                path: "/allmovies",
                element: <AllMovies></AllMovies>,
                loader: () => fetch('https://assaignment-10-movie-portal.vercel.app/movies')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/addmovie",
                element: <PrivetRoute><AddMovie></AddMovie></PrivetRoute>
            },
            {
                path: "/myfavorites",
                element: <PrivetRoute><MyFavorites></MyFavorites></PrivetRoute>,
                loader: () => fetch("https://assaignment-10-movie-portal.vercel.app/favorites")
            },
            {
                path: "/movie/:id",
                loader: ({ params }) => fetch(`https://assaignment-10-movie-portal.vercel.app/movies/${params.id}`),
                element: <MovieDetails></MovieDetails>

            },
        ]
    }
]);
export default Router;