import React from 'react'
import './Header.css'
import logo from '../../assets/logo.svg'
function Header() {
  return (
    <header className='NavBar'>
        <div className='menu'>
            <div className='leftSection'>
                <div className='part1'>
                    <img className='logo' src={logo}/>
                    <p className="div-logoName">
                      wezbo
                    </p>
                    <small className='small'>
                      click the world
                    </small>                   
                </div>
                <div className='part2'>
                    <ul>
                      <li>Home</li>
                      <li>Our Story</li>
                      <li>Top Fruits</li>
                      <li>Pricing</li>
                      <li>Say Hello</li>
                    </ul>
                </div>                
            </div>
            <div className='rightSection'>
                <button className='fstBtn'>Clock<span style={{color:'#CA234B'}}>In</span></button>
                <button className='secBtn'>Lets Build</button>
            </div>
          </div>
    </header>
  )
}

export default Header