import ExtraSection from "./ExtraSection";
import ExtraSection2 from "./ExtraSection2";
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
            <div className="py-12">
                <ExtraSection2></ExtraSection2>
            </div>
        </div>
    );
};

export default Home;