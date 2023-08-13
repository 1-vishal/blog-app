import React from 'react'
import { Link } from 'react-router-dom';
import LoginImg from '../assets/login_img.jpg';

const Login = () => {
  return (
    <div className='auth'>
      <div className='form'>
        <h1>Login</h1>
        <form action="">
          <input type="email" name="email" id="email" placeholder=' ' required />
          <label for="email" className='email-label'>Email</label>
          <input type="password" name="password" id="password" placeholder=' ' required />
          <label for="password" className='password-label'>Password</label>
          <button type="submit">Login</button>
          <span>Don't you have an account? <Link to={'/register'}>Register</Link></span>
        </form>
      </div>
      <div className='form-img'>
        <img src={LoginImg} alt="" />
      </div>
    </div>
  )
}
export default Login;