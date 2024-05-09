import Question from "../question/Question";
import Flashcard from "./Flashcard/Flashcard";
import Header from "./Header/Header";
import Publish from "./Publish/Publish";
import Tabs from "./Tabs/Tabs";

const Home = () => {
    return (
        <div className="p-6 lg:p-0 md:p-0">
           <Header/>
           <Tabs/>
           <Flashcard/>
           <Publish/>
           <Question/>
        </div>
    );
};

export default Home;