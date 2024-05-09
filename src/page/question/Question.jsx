
const Question = () => {
    return (
        <div className='mt-12'>

            <div className="collapse collapse-arrow border-2  border-blue-500 mb-6">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium ">
                Can education flashcards be used for all age groups?
                </div>
                <div className="collapse-content">
                    <p>Education flashcards can indeed be beneficial for learners of all age groups. While they are often associated with younger learners, such as preschoolers and elementary school students, they can also be valuable tools for adolescents, adults, and even seniors</p>
                </div>
            </div>

            <div className="collapse collapse-arrow border-2  border-blue-500 mb-6">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium ">
                How do education flashcards work?
                </div>
                <div className="collapse-content">
                    <p>Flashcards have long been recognized as a popular and effective tool for studying and memorizing information.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow border-2  border-blue-500 mb-6">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium ">
                Can education flashcards be used for test preparation?
                </div>
                <div className="collapse-content">
                    <p>They provide a simple yet powerful—and above all, portable and interactive—method for improving recall, reinforcing learning, and testing knowledge.</p>
                </div>
            </div>



        </div>
    );
};

export default Question;