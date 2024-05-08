import Flashcard from "./Flashcard/Flashcard";
import Header from "./Header/Header";
import Tabs from "./Header/Tabs/Tabs";

const Home = () => {
    return (
        <div>
           <Header/>
           <Tabs/>
           <Flashcard/>
        </div>
    );
};

export default Home;