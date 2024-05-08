
const Question = () => {
    return (
        <div className='mt-12'>

            <div className="collapse collapse-arrow border-2  border-blue-500 mb-6">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium ">
                Can education flashcards be used for all age groups?
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>

            <div className="collapse collapse-arrow border-2  border-blue-500 mb-6">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium ">
                How do education flashcards work?
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>

            <div className="collapse collapse-arrow border-2  border-blue-500 mb-6">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium ">
                Can education flashcards be used for test preparation?
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>



        </div>
    );
};

export default Question;