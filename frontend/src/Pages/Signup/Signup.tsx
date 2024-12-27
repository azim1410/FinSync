import { useState } from 'react'
import "./style.css";

import appLogo from "../../../../Images/FinSyncSystem.webp"
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { register } from '../../features/auth/authServices';
import { Box, Link } from '@mui/material';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const navigate = useNavigate();
   
    const mutation = useMutation({
        mutationFn: register,
        onSuccess: () => {
            navigate('/login');
        },
        onError: (error) => {
            console.log("Faild to register", error);
        }
    });

    return (
        <div className='container-signup-page'>
            <div className="sign-up-left-container">
                <img src={appLogo} alt="applogo" className='signuppage-app-logo' />
            </div>
            <div className="signup-form">
                <h3 className='signup-h3-custom'>INTRODUCE YOURSELF</h3>
                <div className="sign-up-inputfeild">
                    <h2 className='sign-up-h2-custom'>Hi there! My Name is</h2>
                    <input className='signup-inp' name="user-name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="sign-up-inputfeild">
                    <h4 className='sign-up-h2-custom'>Here's my <b>email address</b></h4>
                    <input name="user-email" className='signup-inp' value={email} type='email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="sign-up-inputfeild">
                    <h4 className='sign-up-h2-custom'>And here's my <b>password</b></h4>
                    <div className="signup-pass-inp-toggle">
                        <input name="user-password" className='signup-inp-pass' value={password} type={showPassword === false ? "password" : "text"} onChange={(e) => setPassword(e.target.value)} />
                        <button className='signup-pass-toggle' onClick={() => setShowPassword(!showPassword)}>{showPassword === false ? "🫣" : "👀"}</button>
                    </div>
                </div>
                <Box sx={{display:'flex', justifyContent:'space-between', alignItems: 'center'}}>
                <button className='sign-up-submit-btn' onClick={() => mutation.mutate({email, name, password})} disabled={mutation.isPending}>Sign me up!</button>
                {mutation.isError && <p style={{color: 'red'}}>Signup Failed, try again</p>}
                <Link href="/login" underline="hover" color='#5a5a5a'>
                    {'Already have an account ?'}
                </Link>
                </Box>
            </div>
        </div>
    )
}

export default Signup