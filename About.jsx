import React from 'react'
import "../Public/About.css"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
function About() {
  return (
    <div className=' Ab_container'>
        <Header/>
        <h2 className='title'>About Us</h2>
        <hr className='one'/>
        <p className='para' >About Flag Detergents
At Flag Detergents, we believe a clean home is a healthy home. That’s why we’ve created a full line of effective, safe, and eco-conscious cleaning products designed for everyday life.

From disinfectants that eliminate germs, to gentle hand soaps, streak-free window cleaners, and tough-on-grease dishwashing detergents, our mission is simple:
Make cleaning easy, safe, and reliable—for you, your family, and your environment.</p>
    <hr/>
    <h2 className='title'>Why choose Flag</h2>
    <ul className='para'>
        <li className='para'>✅ Trusted Performance: Each product is tested to ensure powerful cleaning without harsh ingredients.</li>
        <li className='para'>🌿 Eco-Conscious Formulas: We care about your home and the planet.</li>
        <li className='para'>🧼 Complete Clean: Whether it’s your hands, windows, kitchen, or bathroom—Flag has you covered.</li>
      </ul>
    <p className='para'>   We’re proud to be a part of your daily routine, helping you maintain a cleaner, safer space—one wash, wipe, or rinse at a time.</p>
    <br/>
    <p className='para'>Thank you for choosing Flag. Clean with confidence.

    </p>
    <br/>
    <p className='para'></p>
    <Footer/>
    </div>
  )
}

export default About
