import React from 'react'
import './Banner1.css'
import logo from '../../assets/logo.png'
import mouse from '../../assets/mouse.png'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
function Banner1() {
    const menu_icon = {
        width: '500px',
        height: '50px',
        marginLeft: '580px',
        color: 'white',
        // zIndex: '3',
    }
  return (
    <div className='container-Banner1'>
        <div className='upperSection'>
            <div className="div-heading">
                <p className='designPara'>
                    Design your business in your style!
                </p>
                <p className='para'>
                    Super easy to use, ready to go designs,
                    just put your business details and your are online...
                </p>
            </div>            
                <button className="upper-btn">Lets Build Websites</button>
        </div>
        <div className='lowerSection'>
            <div>
                <div className="lower-rect1"></div>
                <div className="lower-rect2"></div>
            </div>
            <div className="content">
                <div className="upperNav">
                <div className='upperNav-logo'>
                    <img className='logo-upperNav' src={logo}/>
                    <p className="upper-logoName">
                      wezbo
                    </p>
                    <small className='upper-small'>
                      click the world
                    </small>                   
                </div>
                    <MenuIcon style={menu_icon}/>
                </div>
                <div className="sideNav">
                    <ul>
                        <li><HomeOutlinedIcon/></li>
                        <li><FavoriteBorderOutlinedIcon/></li>
                        <li><ShoppingCartOutlinedIcon/></li>
                        <li><PersonOutlinedIcon/></li>
                    </ul>

                </div>
                <div className="img1">
                    <p className='banner1Wlcm'>Welcome to Wezbo</p>
                    <p className='banner1-create'>"Create Your Own Way For Your Victory"</p>
                </div>
                <img src={img2} className="img2" />
                <img src={img3} className="img3" />
                <div className="dotIn"> 
                <div className="line"></div>
                    <p className="webzo">Wezbo.in</p>
                </div>
                {/* <img className='mouse' src = {mouse}/> */}                
            </div>
            <div>
                <div className="lower-rect3"></div>
                <div className="lower-rect4"></div>
            </div>
        </div>
        
    </div>
  )
}

export default Banner1