import React from 'react'
import "../Public/HowToUse.css"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Dishwasher from '../assets/images/Dishwasher.jpg'
import Handwash from '../assets/images/Handwash.jpg'
import Toilet from '../assets/images/Toilet.jpg'
import Window from '../assets/images/Window.jpg'
function HowToUse() {
  return (
    <div>
      <Header/>
      <h1 className='B-title'>How to Use</h1>
        <br/>
        <br/>
        <div className='container'>
        <img className='imagesz'src={Toilet} alt="Flag disinfectant" />
        <h2 className='fll'>Flag Disinfectant </h2>
         <div className='steps'>
        <p >Step 1: Pour 1–2 capfuls into a bucket of water (for floors/surfaces) or apply directly (for toilets/bathrooms).</p>
        <p>Step 2: Mop or wipe floors and surfaces, or scrub toilets and bathrooms.</p>
        <p>Step 3: Let surfaces air dry.</p>
          </div>
        </div>
        <hr className='Hr'/>
        <br/>
        <br/>
        <div className='container'>
        <img className='imagesz'src={Window} alt="Flag Window Cleaner" />
        <h2 className='fl'>Flag Window Cleaner</h2>
         <div className='steps'>
        <p >Step 1: Spray or apply onto glass/windows.</p>
        <p >Step 2: Wipe with a clean cloth for a streak-free shine.</p>
          </div>
       </div>
        <hr className='Hr'/>
        <br/>
        <br/>
        <div className='container'>
        <img className='imagesz'src={Handwash} alt="Flag liquid Hand soap" />
        <h2 className='fl'>Flag liquid Hand soap</h2>
         <div className='steps'>
        <p >Step 1: Wet your hands with clean water.</p>
        <p >Step 2:Apply a small amount of Flag Hand Wash</p>
        <p >Step 3:Rub hands together for 20-30 seconds, covering all surfaces (palms, back of hands, fingers, and nails).</p>
        <p >Step 4:Dry hands with a clean towel or air dry.</p>
            </div>
        </div>
        <hr className='Hr'/>
        <br/>
        <br/>
        <div className='container'>
        <img className='imagesz'src={Dishwasher} alt="Flag Dishwashing Detergent" />
        <h2 className='titlee'>Flag Dishwashing Detergent</h2>
         <div className='steps'>
        <p >Step 1:Add a few drops to warm water.</p>
        <p >Step 2:Scrub dishes with a sponge.</p>
        <p >Step 3:Rinse thoroughly</p>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
export default HowToUse
