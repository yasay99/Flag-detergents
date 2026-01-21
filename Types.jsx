import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Public/Types.css'
import WindowCartoon from '../assets/images/Window-W-Cartoon.jpg'
import DishwasherCartoon from'../assets/images/Dishwasher-W-Cartoon.jpg'
import HandwashCartoon from '../assets/images/Handwash-W-Cartoon.jpg'
import ToiletCartoon from '../assets/images/Toilet-W-Cartoon.jpg'
function Types() {
  return (
    <div className=' Ty_container'>
            <Header/>    
        <h2 className='title'>Flag Disinfectant</h2>
        <br/>
        <br/>
        <div className='container'>
         <img className='imagesz' src={ToiletCartoon} alt='Toilet'/>
                 <p className='paraa'>Powerful protection you can trust. FLAG Disinfectant kills germs and bacteria fast, keeping your home clean, safe, and fresh. From floors to bathrooms and kitchens, it delivers deep cleaning with a long-lasting, refreshing scent. Clean smarter. Live healthier.</p>

        </div>        
        {/* </div> */}

        <hr/>
        <h2 className='title'>Flag Window Cleaner</h2>
        <br/>
        <br/>
        <div className='container'>
               <img className='imagesz' src={WindowCartoon} alt='Window'/>
        <p className='paraa'>See the difference instantly. FLAG Window Cleaner cuts through dirt, dust, and fingerprints to deliver a streak-free, crystal-clear shine. Fast-drying and residue-free, it brings brightness back to your windows, mirrors, and glass surfaces — every single time.</p>
        </div>
        <hr/>
        <h2 className='title'>Flag liquid Hand soap</h2>
        <br/>
        <br/>
        <div className='container'>
        <img className='imagesz' src={HandwashCartoon} alt='Handwah'/>
        <p className='paraa'>Clean hands, gentle care. FLAG Liquid Hand Soap removes dirt and germs while keeping your hands soft, smooth, and fresh. With a rich lather and pleasant fragrance, it turns everyday handwashing into a refreshing experience for the whole family.</p>
        </div>
        <hr/>
        <h2 className='title'>Flag Dishwashing Detergent</h2>
        <br/>
        <br/>
        <div className='container'>
        <img className='imagesz' src={DishwasherCartoon} alt='Dishwasher'/>
        <p className='paraa'>Tough on grease. Gentle on hands. FLAG Dishwashing Detergent powers through stubborn oil and food residue, leaving dishes sparkling clean with less effort. Its rich foam and fresh scent make dishwashing faster, easier, and more satisfying.</p>
        </div>
        <Footer/>
        </div>
        
     
  )
}

export default Types
