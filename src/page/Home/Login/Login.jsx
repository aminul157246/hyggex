import Lottie from "lottie-react";

import comingSoon from '../../../../public/comming-soon.json'


const Login = () => {
    return (
        <div>
            <Lottie animationData={comingSoon} loop={true} />;
        </div>
    );
};

export default Login;