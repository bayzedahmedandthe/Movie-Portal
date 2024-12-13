import ExtraSection from "./ExtraSection";
import Header from "./Header";
import MovieAdventure from "./MovieAdventure";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="py-12">
            <MovieAdventure></MovieAdventure>
            </div>
            <div className="py-12">
                <ExtraSection></ExtraSection>
            </div>
        </div>
    );
};

export default Home;