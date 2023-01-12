import React from 'react'
import './Banner5.css'
import banner5img from '../../assets/banner5img.jpeg'
function Banner5() {
  return (
    <div className='banner5-Container'>
        <div className="banner5">
            <div className="banner5-part1">
                {/* <div className="part1-inner"> */}
                  <img className='part1-inner' src={banner5img} alt="" />
                {/* </div> */}
                <div className="part1-wall"></div>
                <div className="part1-2wall"></div>
            </div>
            <div className="banner5-part2">
              <div className="banner5-txt">
                <h1>Robust and malleable</h1>
                <ul>
                  <li>Create a compelling website.</li>
                  <li>Use custom codes like no other.</li>
                  <li>Designs a swift, streamlined design that is clean, minimalistic, futuristic, and has an unlimited gallery store.</li>
                  <li>Instant setup - create a website in just minutes.</li>
                  <li>Get a custom Email ID.</li>
                  <li>Have the complete process taken care of for you.</li>
                </ul>
                <button className='banner5-btn'>Learn More</button>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Banner5