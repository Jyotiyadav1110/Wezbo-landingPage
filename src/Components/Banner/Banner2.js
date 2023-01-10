import React from 'react'
import './Banner2.css'
import brimg2 from '../../assets/brimg2.jpg'
import b2img1 from '../../assets/b2img1.jpg'
function Banner2() {
  return (
    <div className='Banner2'>
        <div className="Banner2-container">
            <div className="b2fstpart">
                <div className="b2fstletter">
                    The Freedom to Create the Website You Want
                </div>
                <div className='b2secletter'>
                Get great results with our trendy, elegant, and stunning templates that provide a robust framework. The navigation is
simple and greatly impacts your web design. Use our optimized layout and industry-specific designs that helps to boost your business or any startup.
                </div>
                <button className='explore'>EXPLORE</button>
            </div>
            <div className="b2secpart">
                <div className="secPart1">
                    <img className='secpartimg' src={brimg2}/>
                    <p className='productName'>Product Name</p>
                    <p className='details'>Add more details about the products, such as product specifications</p>
                    <button className='addTocart'>Add to Cart</button>
                </div>
                {/* <div className="secPart2"> */}
                    <img className="secPart2" src={b2img1} alt="" />
                {/* </div> */}
                
            </div>
        </div>
    </div>
  )
}

export default Banner2