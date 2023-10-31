import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock, faEnvelope, faUser, faPhone} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './index.scss'

const SignupPage = () => {
  const Heading = 'Sign up'

  return (
    <div className='container'>
      <div className='header'>
        <h1>{Heading}</h1>
      </div>
      
      <div className='input-container'>
        <div className='input'>
          <FontAwesomeIcon icon={faUser} className='icons' />
          <input type='text' name='Name' placeholder='Full Name' />
        </div>
        <div className='input'>
          <FontAwesomeIcon icon={faPhone} className='icons' />
          <input type='tel' name='number' placeholder='Enter Your Phone' />
        </div>
        <div className='input'>
          <FontAwesomeIcon icon={faEnvelope} className='icons' />
          <input type='text' name='Email' placeholder='Enter Your Email' />
        </div>

        <div className='input'>
          <FontAwesomeIcon icon={faLock} className='icons' />
          <input type='password' name='password' placeholder='Enter password' />
        </div>
      </div>
      <div className='submit-container'>
        <Link to= "/" className={`flat-btn ${Heading === 'Log in' ? 'active' : ''}`}>Log in</Link>
        <Link to= "/" className={`flat-btn ${Heading === 'Sign up' ? 'active' : ''}`}>Sign up</Link>
      </div>
    </div>
  )
}

export default SignupPage
