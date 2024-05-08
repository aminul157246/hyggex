import { GoHome } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";

const Header = () => {
    return (
        <div className='mt-10'>
            <div className="flex items-center gap-1">
                <GoHome className="text-2xl" />
                <FaAngleRight />
                <p>Flashcard</p>
                <FaAngleRight />
                <p>Mathematics</p>
                <FaAngleRight />
                <p className="font-bold">Relations and Functions</p>
            </div>

            <h3 className="mt-10 text-4xl font-semibold text-[#06286E]">Relations and Functions ( Mathematics )</h3>
        </div>
    );
};

export default Header;