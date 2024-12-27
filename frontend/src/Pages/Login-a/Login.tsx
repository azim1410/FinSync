import { useState } from 'react'
import appLogo from "../../../../Images/FinSyncSystem.webp"
import './styles.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { login } from '../../features/auth/authServices';
import { loginSuccess } from '../../features/auth/AuthSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      dispatch(loginSuccess({ token: data.data }));
      navigate('/dashboard');
    },
    onError: (error) => {
      console.log("Login Failed", error);
    }
  })
  return (
    <div className='container-login-page'>
      <div className="sign-up-left-container">
        <img src={appLogo} alt="applogo" className='loginpage-app-logo' />
      </div>
      <div className="login-form">
        <h3 className='login-h3-custom'>WELCOME BACK TO FINSYNC!</h3>
        <div className="sign-up-inputfeild">
          <h4 className='sign-up-h2-custom'>Here's my <b>email address</b></h4>
          <input name="user-email" className='login-inp' value={email} type='email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="sign-up-inputfeild">
          <h4 className='sign-up-h2-custom'>And here's my <b>password</b></h4>
          <div className="login-pass-inp-toggle">
            <input name="user-password" className='login-inp-pass' value={password} type={showPassword === false ? "password" : "text"} onChange={(e) => setPassword(e.target.value)} />
            <button className='login-pass-toggle' onClick={() => setShowPassword(!showPassword)}>{showPassword === false ? "🫣" : "👀"}</button>
          </div>
        </div>
        <button className='sign-up-submit-btn' onClick={() => mutation.mutate({email, password})} disabled={mutation.isPending}>
          {mutation.isPending ? "Logging in..." : 'Login'}
        </button>
        {mutation.isError && <p style={{color: 'red'}}>Login Failed. Try again</p>}
      </div>
    </div>
  )
}

export default Login