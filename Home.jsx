import React ,{useState}from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'
import "../Public/Home.css"
import All from '../assets/images/All.jpg'
function Home() {
  const navigate= useNavigate();

  const tHandler=()=>{
    {
    navigate('/Types');
    }
    
  };
  const HTWHandler=()=>{
    {
    navigate('/HTW');
  }
  }
  return (
    <div>
      <div className='MainHome'>
      <Header/>
      <div>
      <h1 className='H-header'>Flag Detergents</h1>
      <br/>
      <div className='Backkground'>
     <div className='Home-container'>
        <div className='text-overlap'>
      {/* <form className='Hh-form'> */}
      <h1 className='H-tit'>From spotless dishes to germ-free hands and sparkling windows, Flag Detergents brings you a complete range of powerful, safe, and eco-friendly cleaning solutions.</h1>
      <ul className='Ind'>
        <li className='H-Ins'>Disinfectants</li>
        <li className='H-Ins'> Hand Soaps</li>
        <li className='H-Ins'>Window Cleaners </li>
        <li className='H-Ins'>Dishwashing Detergents</li>
      </ul>
      <ul className='Indd'>
        <li className='Indd'>✅ Tough on dirt & germs</li>
        <li className='Indd'>✅ Gentle on hands & surfaces</li>
        <li className='Indd'>✅ Trusted for everyday cleaning</li>
      </ul>
      <div className='BUTTONS'>
      <button className='H-btn' onClick={tHandler}>Learn more </button>
      <button className='H-btn' onClick={HTWHandler}>How to use</button>
                     <img src={All} alt='Flag products' className='ALL'/>
         </div> 
      </div>
      </div>
        <div className='H-for'>
        </div>
              
      {/* </form> */}
      </div >
      <Footer/>
      </div>
      </div>
    </div>
  )
}

export default Home
