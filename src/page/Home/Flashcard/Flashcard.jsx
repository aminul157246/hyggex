import { useState } from "react";
import { SlReload } from "react-icons/sl";
import { BsFullscreenExit } from "react-icons/bs";
import { BsFullscreen } from "react-icons/bs";
import { RxSpeakerLoud } from "react-icons/rx";
import { LuLightbulb } from "react-icons/lu";
import { BsFillLightbulbOffFill } from "react-icons/bs";

const Flashcard = () => {




    const [expression, setExpression] = useState('9 + 5 - 5 * 8 - 3'); // Initial expression
    const [showFullPage, setShowFullPage] = useState(false); // State to manage whether to show expression in full page or not
    const [darkMode, setDarkMode] = useState(false); // State to manage dark mode

    // Function to handle changing the expression
    const changeExpression = () => {
        // Define your list of expressions
        const expressions = [
            '9 + 5 - 5 * 8 - 3',
            '12 / 3 - 2 + 10',
            '20 * 4 / 2 - 5',
            // Add more expressions as needed
        ];

        // Get a random index for the new expression
        const randomIndex = Math.floor(Math.random() * expressions.length);

        // Set the new expression
        setExpression(expressions[randomIndex]);
    };

    // Function to toggle showing expression in full page
    const toggleFullPage = () => {
        setShowFullPage(!showFullPage);
    };

    // Function to read out the expression
    const speakExpression = () => {
        const speechSynthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(expression);
        speechSynthesis.speak(utterance);
    };

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };





    return (


<>

        <div className={` rounded-3xl max-w-3xl mx-auto  ${darkMode ? 'bg-gray-800 text-white' : 'bg-blue-500  text-black'}`}>
            {/* Conditional rendering for full page */}
            {showFullPage ? (

                <div className={`fixed top-0 left-0 w-full h-full  z-50 ${darkMode ? 'bg-gray-800 text-white' : 'bg-blue-500 text-black'}`}>





                   <div className="flex justify-evenly my-12 items-center">
                     {/* speaker  */}
                     <button
                        className="text-white text-3xl border p-2 rounded-2xl"
                        onClick={speakExpression}
                    >
                        <RxSpeakerLoud />
                    </button>


                    {/* theme  */}
                    <button
                        className='text-white text-3xl border p-2 rounded-2xl'
                        onClick={toggleDarkMode}
                    >
                        {darkMode ? <BsFillLightbulbOffFill /> : <LuLightbulb />}
                    </button>
                   </div>



                    <h1 className="text-5xl text-center my-12">{expression}</h1>



                    <div className="flex items-center justify-center gap-24 mt-24">
                        {/* reload  */}
                    <button
                        className="text-white text-3xl border p-2 rounded-2xl"
                        onClick={changeExpression}
                    >
                        <SlReload />
                    </button>

                    
                    {/* slider  */}
                    <button className="border p-2 text-3xl rounded-2xl">1/10</button>

                    {/* full screen  */}

                    <button
                        className="text-white text-3xl border p-2 rounded-2xl"
                        onClick={toggleFullPage}
                    >

                        <BsFullscreen />
                    </button>
                    </div>




                    {/* reload  */}
                    {/* <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={changeExpression}
                    >
                        <SlReload />
                    </button> */}

                    {/* full page  */}
                    {/* <button
                        className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={toggleFullPage}
                    >
                        <BsFullscreenExit />
                    </button> */}





                </div>


            ) : (

                    <div className="w-[500px] mx-auto h-[300px]">


                        <div className="flex justify-between items-center  pt-12   ">
                            {/* speaker  */}
                            <button
                                className="text-white text-3xl border p-2 rounded-2xl"
                                onClick={speakExpression}
                            >
                                <RxSpeakerLoud />
                            </button>


                            {/* theme  */}
                            <button 
                                className='text-white text-3xl border p-2 rounded-2xl'
                                onClick={toggleDarkMode}
                            >
                                {darkMode ? <BsFillLightbulbOffFill /> : <LuLightbulb />}
                            </button>

                        </div>

                        <h1 className="text-4xl flex justify-center my-12 mb-4"> {expression}</h1>



                    </div>




            )}

        </div>





        <div className="flex items-center justify-evenly mt-6 ">
                        {/* reload  */}
                    <button
                        className="  text-3xl border p-2 rounded-2xl"
                        onClick={changeExpression}
                    >
                        <SlReload />
                    </button>

                    
                    {/* slider  */}
                    <button className="btn">1/10</button>

                    {/* full screen  */}

                    <button
                        className="text-3xl border p-2 rounded-2xl"
                        onClick={toggleFullPage}
                    >

                        <BsFullscreen />
                    </button>
                    </div>


        </>

    );
};

export default Flashcard;