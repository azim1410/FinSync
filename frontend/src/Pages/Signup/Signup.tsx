import { useState } from 'react'
import "./style.css";

import appLogo from "../../../../Images/FinSyncSystem.webp"
type userDetails = {
    name: string,
    email: string,
    password: string
}

const Signup = () => {
    const [userDetails, setUserDetails] = useState<userDetails>({name: '', email: '', password: ''});
    const [showPassword, setShowPassword] = useState<boolean>(false)
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
                    <h4 className='sign-up-h2-custom'>Here's my <b>email address</b></h4>
                    <input name="user-email" className='signup-inp' value={userDetails.email} type='email' onChange={(e) => setUserDetails((prev) => ({ ...prev, email: e.target.value }))} />
                </div>
                <div className="sign-up-inputfeild">
                    <h4 className='sign-up-h2-custom'>And here's my <b>password</b></h4>
                    <div className="signup-pass-inp-toggle">
                    <input name="user-password" className='signup-inp-pass' value={userDetails.password} type={showPassword === false ? "password" : "text"} onChange={(e) => setUserDetails((prev) => ({ ...prev, password: e.target.value }))} />
                    <button className='signup-pass-toggle' onClick={() => setShowPassword(!showPassword)}>{showPassword === false ? "🫣" : "👀"}</button>
                    </div>
                </div>
                <button className='sign-up-submit-btn' onClick={() => handleSignup()}>Sign me up!</button>
            </div>
        </div>
    )
}

export default Signup