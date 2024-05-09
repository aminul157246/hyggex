import publishImg from '../../../assets/image.png'
import { FiPlusCircle } from "react-icons/fi";

const Publish = () => {
    return (
        <div className='flex justify-between mt-24 mb-12'>
            <div>
                <img className='w-44' src={publishImg} alt="" />
            </div>
            <div className='text-2xl font-semibold flex items-center bg-gradient-to-r from-blue-900 to-blue-500 text-transparent bg-clip-text'>
               <span className='text-blue-800 font-extrabold mr-2 bg-'> <FiPlusCircle /></span>
                Create Flashcard
            </div>
        </div>
    );
};

export default Publish;