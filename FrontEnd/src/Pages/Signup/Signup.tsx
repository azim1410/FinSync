import { useState } from 'react'
import "./style.css";

import appLogo from "../../../../Images/FinSyncSystem.webp"
type userDetails = {
    name: string,
    email: string,
    password: string
}

const Signup = () => {
    const [userDetails, setUserDetails] = useState<userDetails>({});
    const handleSignup = () => {
        console.log("userDetails", userDetails);
    }
    return (
        <div className='container-signup-page'>
            <div className="sign-up-left-container">
                <img src={appLogo} alt="applogo" className='signuppage-app-logo' />
            </div>
            <div className="signup-form">
                <h3 className='signup-h3-custom'>INTRODUCE YOURSELF</h3>
                <div className="sign-up-inputfeild">
                    <h2 className='sign-up-h2-custom'>Hi there! My Name is</h2>
                    <input className='signup-inp' name="user-name" value={userDetails.name} onChange={(e) => setUserDetails((prev) => ({ ...prev, name: e.target.value }))} />
                </div>
                <div className="sign-up-inputfeild">
                    <h4 className='sign-up-h2-custom'>Here's my email address</h4>
                    <input name="user-email" className='signup-inp' value={userDetails.email} type='email' onChange={(e) => setUserDetails((prev) => ({ ...prev, email: e.target.value }))} />
                </div>
                <div className="sign-up-inputfeild">
                    <h4 className='sign-up-h2-custom'>And here's my password</h4>
                    <input name="user-password" className='signup-inp' value={userDetails.password} type='password' onChange={(e) => setUserDetails((prev) => ({ ...prev, password: e.target.value }))} />
                </div>
                <button className='sign-up-submit-btn' onClick={() => handleSignup()}>Sign me up!</button>
            </div>
        </div>
    )
}

export default Signup