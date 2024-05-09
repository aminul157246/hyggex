import Lottie from "lottie-react";

import comingSoon from '../../../public/comming-soon.json'


const Flashcard = () => {
    return (
        <div>
            <Lottie animationData={comingSoon} loop={true} />;
        </div>
    );
};

export default Flashcard;