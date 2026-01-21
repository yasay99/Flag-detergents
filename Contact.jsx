import React from 'react'
import "../Public/Contact.css"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
function Contact() {
  return (
    <div>
      <Header/>
      <form action="https://formspree.io/f/xbdrnpqv" method='POST'>
      <h1 className='C-tit'>Contact Form</h1>
      <input type="text" name='first' placeholder='First name'autoComplete='off'required/>
      <input type="text" name='last' placeholder='Last name'autoComplete='off'required/>
      <input type="email" name='email' placeholder='Email address'autoComplete='off'required/>
      <br/>
      <textarea name="message" id=""rows={7} cols={70}placeholder='Enter Text'autoComplete='off' required></textarea>
      <br/>
      <button type='submit'className='C-btn'>Send Message</button>
      </form>
      <Footer/>
    </div>
  )
}

export default Contact
