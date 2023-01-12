import React from 'react'
import './Banner6.css'

import banner6img from '../../assets/banner6img.jpeg'
function Banner6() {
  return (
    <div className='Banner6-Container'>
        <div className="Banner6">
            <div className="banner6-part1">
                <din className="banner6Text">
                    <h1>Tailormade solution</h1>
                    <ol>
                        <li>Offer a great selection of professional website templates.</li>
                        <li>Flexibility to include additional features.</li>
                        <li>Get the intuitive features and customize workflows as per your needs.</li>
                    </ol>
                    <h1>Inexpensive & reasonable</h1>
                    <ol>
                        <li>More advanced options are available that build a premium website.</li>
                        <li>Full-fledged and complete control in designing with premium features.</li>
                        <li>Good to go if you need an online presence or are an influencer.</li>
                    </ol>
                </din>
                <button className='banner6btn'>Learn More</button>
            </div>
            <div className="banner6-part2">
                <img className='banner6img' src={banner6img}/>
            </div>
        </div>
    </div>
  )
}

export default Banner6