import publishImg from '../../../assets/image.png'
import { FiPlusCircle } from "react-icons/fi";

const Publish = () => {
    return (
        <div className='flex justify-between my-12'>
            <div>
                <img className='w-44' src={publishImg} alt="" />
            </div>
            <div className='text-2xl font-semibold flex items-center'>
                <FiPlusCircle />
                Create Flashcard
            </div>
        </div>
    );
};

export default Publish;