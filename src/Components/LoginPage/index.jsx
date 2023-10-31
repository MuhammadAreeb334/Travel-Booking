import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './index.scss'

const LoginPage = () => {
  const Heading = 'Log in'
  return (
    <div className='container'>
      <div className='header'>
        <h1>{Heading}</h1>
      </div>
      
      <div className='input-container'>
        <div className='input'>
          <FontAwesomeIcon icon={faEnvelope} className='icons' />
          <input type='text' name='Email' placeholder='Email' />
        </div>

        <div className='input'>
          <FontAwesomeIcon icon={faLock} className='icons' />
          <input type='password' name='password' placeholder='Enter password' />
        </div>
      </div>
      <Link className='forget-password' to='/'>Forgotten Password?</Link>

      <div className='submit-container'>
        <Link to= "/" className={`flat-btn ${Heading === 'Log in' ? 'active' : ''}`}>Log in</Link>
        <Link to= "/signup" className={`flat-btn ${Heading === 'Sign up' ? 'active' : ''}`}>Sign up</Link>
      </div>
    </div>
  )
}

export default LoginPage
