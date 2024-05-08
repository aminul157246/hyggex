import Question from "../question/Question";
import Flashcard from "./Flashcard/Flashcard";
import Header from "./Header/Header";
import Publish from "./Publish/Publish";
import Tabs from "./Tabs/Tabs";

const Home = () => {
    return (
        <div>
           <Header/>
           <Tabs/>
           <Flashcard/>
           <Publish/>
           <Question/>
        </div>
    );
};

export default Home;