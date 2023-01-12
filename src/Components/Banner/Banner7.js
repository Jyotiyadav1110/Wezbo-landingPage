import React from 'react'
import './Banner7.css'
import banner7img from '../../assets/banner7img.jpeg'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
function Banner7() {
  const banner7Icon = {
    position: 'absolute',
    left: '400px',
    top: '100px',
    transform: 'rotate(180deg)',
    width : '100px',
    height : '80px',
    color : '#CA234B'
} 
  return (
    <div className='Banner7-container'>
        <img src={banner7img} alt="banner7img" />
        <h1>Robust Website Builder with the best tools to help</h1>
        <h1>grow your brand!</h1>
        <div className='banner7-sign'>
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3">
            <h2>Sign up free to start creating</h2>
            <button className='btn7'>
              Lets Wezbo
            </button>
            <RocketLaunchIcon style={banner7Icon}/>
          </div>
        </div>
    </div>
  )
}

export default Banner7