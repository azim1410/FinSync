import { useState } from 'react'
import appLogo from "../../../../Images/FinSyncSystem.webp"
import './styles.css';
type userDetails = {
  email: string,
  password: string
}
const Login = () => {
  const [userDetails, setUserDetails] = useState<userDetails>({email: '', password: ''});
      const [showPassword, setShowPassword] = useState<boolean>(false)
      const handlelogin = () => {
        console.log("userDetails", userDetails);
    }
  return (
    <div className='container-login-page'>
            <div className="sign-up-left-container">
                <img src={appLogo} alt="applogo" className='loginpage-app-logo' />
            </div>
            <div className="login-form">
                <h3 className='login-h3-custom'>WELCOME BACK TO FINSYNC!</h3>
                <div className="sign-up-inputfeild">
                    <h4 className='sign-up-h2-custom'>Here's my <b>email address</b></h4>
                    <input name="user-email" className='login-inp' value={userDetails.email} type='email' onChange={(e) => setUserDetails((prev) => ({ ...prev, email: e.target.value }))} />
                </div>
                <div className="sign-up-inputfeild">
                    <h4 className='sign-up-h2-custom'>And here's my <b>password</b></h4>
                    <div className="login-pass-inp-toggle">
                    <input name="user-password" className='login-inp-pass' value={userDetails.password} type={showPassword === false ? "password" : "text"} onChange={(e) => setUserDetails((prev) => ({ ...prev, password: e.target.value }))} />
                    <button className='login-pass-toggle' onClick={() => setShowPassword(!showPassword)}>{showPassword === false ? "🫣" : "👀"}</button>
                    </div>
                </div>
                <button className='sign-up-submit-btn' onClick={() => handlelogin()}>Login</button>
            </div>
        </div>
  )
}

export default Login