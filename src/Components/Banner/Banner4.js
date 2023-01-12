import React from 'react'
import './Banner4.css'
import banner4img from '../../assets/banner4img.jpeg'
import halfCircle from '../../assets/halfCircle.png'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Groups2Icon from '@mui/icons-material/Groups2';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
function Banner4() {
  const icon = {
    width: '100px',
    height: '50px',
    // marginLeft: '580px',
    color: 'white',
    // zIndex: '3',
}
  return (
    <div className='Banner4-Container'>
      <h1 className='banner4-heading'>A website foundation designed for expansion</h1>
        <div className="sideDiv">
            <div className="innerDiv">
                <div className="fst">
                  <CircleOutlinedIcon style={icon}/>
                  <h2>Quiker Loading</h2>
                  <p>Wezbo is optimizes for spend, so your site will load faster</p>
                </div>
                <div className="sec">
                  <RecordVoiceOverOutlinedIcon style={icon}/>
                  <h2>Designed with SEO in mind</h2>
                  <p>Obtain the SEO capabilities you require to improve your website for search exposure.</p>
                </div>
                <div className="trd">
                  <SecurityOutlinedIcon style={icon}/>
                  <h2>Enterprise-level security</h2>
                  <p>We protect your site and its users' data around the clock.</p>
                </div>
                <div className="frth">
                  <CloudQueueIcon style={icon}/>
                  <h2>Infrastructure that is resilient</h2>
                  <p>Even amid traffic surges, multi-cloud hosting provides 99.9% uptime.</p>
                </div>
                <div className="fth">
                  <Groups2Icon style={icon}/>
                  <h2>Everyone can use it.</h2>
                  <p>Create an inclusive website with built-in accessibility features.</p>
                </div>
                <button className='Banner4-Btn'>EXPLORE</button>
            </div>
            
            
        </div>
        <img className='banner4circle' src={halfCircle} alt="banner4circle" />
        <div className="rectangle">
          <img className='banner4img' src={banner4img} alt="banner4img" />
        </div>

    </div>
  )
}

export default Banner4