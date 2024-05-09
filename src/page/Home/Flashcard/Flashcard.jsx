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

    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 4; // Total number of

    const handleSlideChange = (slideNumber) => {
        setCurrentSlide(slideNumber);
    };






    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item  w-full">
                <>
                    <div className={` rounded-3xl max-w-3xl mx-auto  ${darkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-500  text-black'}`}>
                        {/* Conditional rendering for full page */}
                        {showFullPage ? (

                            <div className={`fixed top-0  left-0 w-full h-full z-50 ${darkMode ? 'bg-gray-800 text-white' : 'bg-blue-500 text-black'}`}>

                                {/* upper part  */}
                                <div className="flex justify-evenly my-12 items-center">

                                    {/* theme  */}
                                    <button className='text-white text-2xl' onClick={toggleDarkMode}>{darkMode ? <BsFillLightbulbOffFill /> : <LuLightbulb />}</button>

                                    {/* speaker  */}
                                    <button className="text-white text-2xl" onClick={speakExpression}><RxSpeakerLoud /></button>

                                </div>


                                {/* expression  */}
                                <h1 className="text-5xl text-center my-12">{expression}</h1>


                                {/* lower part  */}
                                <div className="flex  ">
                                    {/* reload  */}
                                    <button className="  text-2xl text-blue-900" onClick={changeExpression}> <SlReload /> </button>

                                    <div className="items-center flex justify-center  gap-12  ">
                                        <a href="#slide4" onClick={() => handleSlideChange(currentSlide === 1 ? totalSlides : currentSlide - 1)} className="btn bg-blue-700 text-white font-bold  btn-circle">❮</a>
                                        <button className="-mt-3 6 ">{currentSlide}/{totalSlides}</button>
                                        <a href="#slide2" onClick={() => handleSlideChange(currentSlide === totalSlides ? 1 : currentSlide + 1)} className="btn bg-blue-700 text-white font-bold btn-circle">❯</a>
                                    </div>

                                    {/* full screen  */}
                                    <button className="text-2xl text-blue-900" onClick={toggleFullPage}><BsFullscreenExit /></button>
                                </div>
                            </div>


                        ) : (

                            <div className="w-[500px] mx-auto h-[300px]">

                                {/* upper part  */}
                                <div className="flex justify-between items-center  px-12 pt-12   ">

                                    {/* theme  */}
                                    <button
                                        className='text-white text-2xl'
                                        onClick={toggleDarkMode}
                                    >
                                        {darkMode ? <BsFillLightbulbOffFill /> : <LuLightbulb />}
                                    </button>

                                    {/* speaker  */}
                                    <button
                                        className="text-white text-2xl"
                                        onClick={speakExpression}
                                    >
                                        <RxSpeakerLoud />
                                    </button>




                                </div>

                                {/* expression  */}
                                <h1 className="text-4xl text-white flex justify-center my-12 mb-4"> {expression}</h1>


                                {/* lower part  */}
                                <div className="flex items-center  gap-24  justify-center absolute -bottom-0  ">
                                    {/* reload  */}
                                    <button className="  text-2xl text-blue-900" onClick={changeExpression}> <SlReload /> </button>

                                    <div className="items-center flex justify-center  gap-12  ">
                                        <a href="#slide4" onClick={() => handleSlideChange(currentSlide === 1 ? totalSlides : currentSlide - 1)} className="btn bg-blue-700 text-white font-bold  btn-circle">❮</a>
                                        <button className="-mt-3 6 ">{currentSlide}/{totalSlides}</button>
                                        <a href="#slide2" onClick={() => handleSlideChange(currentSlide === totalSlides ? 1 : currentSlide + 1)} className="btn bg-blue-700 text-white font-bold btn-circle">❯</a>
                                    </div>

                                    {/* full screen  */}
                                    <button className="text-2xl text-blue-900" onClick={toggleFullPage}><BsFullscreen /></button>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            </div>


            {/* slide 2222  */}
            <div id="slide2" className="carousel-item  w-full">


                <>
                    <div className={` rounded-3xl max-w-3xl mx-auto  ${darkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-500  text-black'}`}>
                        {/* Conditional rendering for full page */}
                        {showFullPage ? (

                            <div className={`fixed top-0 left-0 w-full h-full  z-50 ${darkMode ? 'bg-gray-800 text-white' : 'bg-blue-500 text-black'}`}>

                                {/* upper part  */}
                                <div className="flex justify-evenly my-12 items-center">

                                    {/* theme  */}
                                    <button className='text-white text-2xl' onClick={toggleDarkMode}>{darkMode ? <BsFillLightbulbOffFill /> : <LuLightbulb />}</button>

                                    {/* speaker  */}
                                    <button className="text-white text-2xl" onClick={speakExpression}><RxSpeakerLoud /></button>

                                </div>


                                {/* expression  */}
                                <h1 className="text-5xl text-center my-12">{expression}</h1>


                                {/* lower part  */}
                                <div className="flex items-center  gap-24  justify-center   ">
                                    {/* reload  */}
                                    <button className="  text-2xl text-blue-900" onClick={changeExpression}> <SlReload /> </button>

                                    <div className="items-center flex justify-center  gap-12  ">
                                        <a href="#slide4" onClick={() => handleSlideChange(currentSlide === 1 ? totalSlides : currentSlide - 1)} className="btn bg-blue-700 text-white font-bold  btn-circle">❮</a>
                                        <button className="-mt-3 6 ">{currentSlide}/{totalSlides}</button>
                                        <a href="#slide2" onClick={() => handleSlideChange(currentSlide === totalSlides ? 1 : currentSlide + 1)} className="btn bg-blue-700 text-white font-bold btn-circle">❯</a>
                                    </div>

                                    {/* full screen  */}
                                    <button className="text-2xl text-blue-900" onClick={toggleFullPage}><BsFullscreen /></button>
                                </div>
                            </div>


                        ) : (

                            <div className="w-[500px] mx-auto h-[300px]">

                                {/* upper part  */}
                                <div className="flex justify-between items-center  px-12 pt-12   ">

                                    {/* theme  */}
                                    <button
                                        className='text-white text-2xl'
                                        onClick={toggleDarkMode}
                                    >
                                        {darkMode ? <BsFillLightbulbOffFill /> : <LuLightbulb />}
                                    </button>

                                    {/* speaker  */}
                                    <button
                                        className="text-white text-2xl"
                                        onClick={speakExpression}
                                    >
                                        <RxSpeakerLoud />
                                    </button>




                                </div>

                                {/* expression  */}
                                <h1 className="text-4xl text-white flex justify-center my-12 mb-4"> {expression}</h1>


                                {/* lower part  */}
                                <div className="flex items-center  gap-24  justify-center absolute -bottom-0  ">
                                    {/* reload  */}
                                    <button className="  text-2xl text-blue-900" onClick={changeExpression}> <SlReload /> </button>

                                    <div className="items-center flex justify-center  gap-12  ">
                                        <a href="#slide4" onClick={() => handleSlideChange(currentSlide === 2 ? totalSlides : currentSlide - 1)} className="btn bg-blue-700 text-white font-bold  btn-circle">❮</a>
                                        <button className="-mt-3 6 ">{currentSlide}/{totalSlides}</button>
                                        <a href="#slide2" onClick={() => handleSlideChange(currentSlide === totalSlides ? 2 : currentSlide + 1)} className="btn bg-blue-700 text-white font-bold btn-circle">❯</a>
                                    </div>

                                    {/* full screen  */}
                                    <button className="text-2xl text-blue-900" onClick={toggleFullPage}><BsFullscreen /></button>
                                </div>
                            </div>
                        )}
                    </div>
                </>

            </div>



            {/* slide 33333  */}
            <div id="slide3" className="carousel-item  w-full">

                <>
                    <div className={` rounded-3xl max-w-3xl mx-auto  ${darkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-500  text-black'}`}>
                        {/* Conditional rendering for full page */}
                        {showFullPage ? (

                            <div className={`fixed top-0 left-0 w-full h-full  z-50 ${darkMode ? 'bg-gray-800 text-white' : 'bg-blue-500 text-black'}`}>

                                {/* upper part  */}
                                <div className="flex justify-evenly my-12 items-center">

                                    {/* theme  */}
                                    <button className='text-white text-2xl' onClick={toggleDarkMode}>{darkMode ? <BsFillLightbulbOffFill /> : <LuLightbulb />}</button>

                                    {/* speaker  */}
                                    <button className="text-white text-2xl" onClick={speakExpression}><RxSpeakerLoud /></button>

                                </div>


                                {/* expression  */}
                                <h1 className="text-5xl text-center my-12">{expression}</h1>


                                {/* lower part  */}
                                <div className="flex items-center  gap-24  justify-center   ">
                                    {/* reload  */}
                                    <button className="  text-2xl text-blue-900" onClick={changeExpression}> <SlReload /> </button>

                                    <div className="items-center flex justify-center  gap-12  ">
                                        <a href="#slide4" onClick={() => handleSlideChange(currentSlide === 1 ? totalSlides : currentSlide - 1)} className="btn bg-blue-700 text-white font-bold  btn-circle">❮</a>
                                        <button className="-mt-3 6 ">{currentSlide}/{totalSlides}</button>
                                        <a href="#slide2" onClick={() => handleSlideChange(currentSlide === totalSlides ? 1 : currentSlide + 1)} className="btn bg-blue-700 text-white font-bold btn-circle">❯</a>
                                    </div>

                                    {/* full screen  */}
                                    <button className="text-2xl text-blue-900" onClick={toggleFullPage}><BsFullscreen /></button>
                                </div>
                            </div>


                        ) : (

                            <div className="w-[500px] mx-auto h-[300px]">

                                {/* upper part  */}
                                <div className="flex justify-between items-center  px-12 pt-12   ">

                                    {/* theme  */}
                                    <button
                                        className='text-white text-2xl'
                                        onClick={toggleDarkMode}
                                    >
                                        {darkMode ? <BsFillLightbulbOffFill /> : <LuLightbulb />}
                                    </button>

                                    {/* speaker  */}
                                    <button
                                        className="text-white text-2xl"
                                        onClick={speakExpression}
                                    >
                                        <RxSpeakerLoud />
                                    </button>




                                </div>

                                {/* expression  */}
                                <h1 className="text-4xl text-white flex justify-center my-12 mb-4"> {expression}</h1>


                                {/* lower part  */}
                                <div className="flex items-center  gap-24  justify-center absolute -bottom-0  ">
                                    {/* reload  */}
                                    <button className="  text-2xl text-blue-900" onClick={changeExpression}> <SlReload /> </button>

                                    <div className="items-center flex justify-center  gap-12  ">
                                        <a href="#slide4" onClick={() => handleSlideChange(currentSlide === 3 ? totalSlides : currentSlide - 1)} className="btn bg-blue-700 text-white font-bold  btn-circle">❮</a>
                                        <button className="-mt-3 6 ">{currentSlide}/{totalSlides}</button>
                                        <a href="#slide2" onClick={() => handleSlideChange(currentSlide === totalSlides ? 3 : currentSlide + 1)} className="btn bg-blue-700 text-white font-bold btn-circle">❯</a>
                                    </div>

                                    {/* full screen  */}
                                    <button className="text-2xl text-blue-900" onClick={toggleFullPage}><BsFullscreen /></button>
                                </div>
                            </div>
                        )}
                    </div>
                </>

            </div>



            {/* slide 444  */}


            <div id="slide4" className="carousel-item  w-full">

            <>
                    <div className={` rounded-3xl max-w-3xl mx-auto  ${darkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-500  text-black'}`}>
                        {/* Conditional rendering for full page */}
                        {showFullPage ? (

                            <div className={`fixed top-0 left-0 w-full h-full  z-50 ${darkMode ? 'bg-gray-800 text-white' : 'bg-blue-500 text-black'}`}>

                                {/* upper part  */}
                                <div className="flex justify-evenly my-12 items-center">
                                    
                                    {/* theme  */}
                                    <button className='text-white text-2xl' onClick={toggleDarkMode}>{darkMode ? <BsFillLightbulbOffFill /> : <LuLightbulb />}</button>

                                    {/* speaker  */}
                                    <button className="text-white text-2xl" onClick={speakExpression}><RxSpeakerLoud /></button>

                                </div>


                                {/* expression  */}
                                <h1 className="text-5xl text-center my-12">{expression}</h1>


                                {/* lower part  */}
                                <div className="flex items-center  gap-24  justify-center   ">
                                    {/* reload  */}
                                    <button className="  text-2xl text-blue-900" onClick={changeExpression}> <SlReload /> </button>

                                    <div className="items-center flex justify-center  gap-12  ">
                                        <a href="#slide4" onClick={() => handleSlideChange(currentSlide === 1 ? totalSlides : currentSlide - 1)} className="btn bg-blue-700 text-white font-bold  btn-circle">❮</a>
                                        <button className="-mt-3 6 ">{currentSlide}/{totalSlides}</button>
                                        <a href="#slide2" onClick={() => handleSlideChange(currentSlide === totalSlides ? 1 : currentSlide + 1)} className="btn bg-blue-700 text-white font-bold btn-circle">❯</a>
                                    </div>

                                    {/* full screen  */}
                                    <button className="text-2xl text-blue-900" onClick={toggleFullPage}><BsFullscreen /></button>
                                </div>
                            </div>


                        ) : (

                            <div className="w-[500px] mx-auto h-[300px]">

                                {/* upper part  */}
                                <div className="flex justify-between items-center  px-12 pt-12   ">

                                    {/* theme  */}
                                    <button
                                        className='text-white text-2xl'
                                        onClick={toggleDarkMode}
                                    >
                                        {darkMode ? <BsFillLightbulbOffFill /> : <LuLightbulb />}
                                    </button>

                                    {/* speaker  */}
                                    <button
                                        className="text-white text-2xl"
                                        onClick={speakExpression}
                                    >
                                        <RxSpeakerLoud />
                                    </button>




                                </div>

                                {/* expression  */}
                                <h1 className="text-4xl text-white flex justify-center my-12 mb-4"> {expression}</h1>


                                {/* lower part  */}
                                <div className="flex items-center  gap-24  justify-center absolute -bottom-0  ">
                                    {/* reload  */}
                                    <button className="  text-2xl text-blue-900" onClick={changeExpression}> <SlReload /> </button>

                                    <div className="items-center flex justify-center  gap-12  ">
                                        <a href="#slide4" onClick={() => handleSlideChange(currentSlide === 4 ? totalSlides : currentSlide - 1)} className="btn bg-blue-700 text-white font-bold  btn-circle">❮</a>
                                        <button className="-mt-3 6 ">{currentSlide}/{totalSlides}</button>
                                        <a href="#slide2" onClick={() => handleSlideChange(currentSlide === totalSlides ? 4 : currentSlide + 1)} className="btn bg-blue-700 text-white font-bold btn-circle">❯</a>
                                    </div>

                                    {/* full screen  */}
                                    <button className="text-2xl text-blue-900" onClick={toggleFullPage}><BsFullscreen /></button>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            </div>
        </div>
    );
};

export default Flashcard;