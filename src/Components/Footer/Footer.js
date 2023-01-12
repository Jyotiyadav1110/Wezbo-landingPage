import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, IconName } from "react-icons/fa";
function Footer() {
    const facebook = {
        width: '38px',
        height: '38px',
        color:' #388fe6'
    }
    const insta = {
        width: '38px',
        height: '38px',
        background: 'linear-gradient(90.06deg, rgba(255, 56, 56, 0.4) -31.42%, #510D57 1.09%, #CA234B 107.21%)',
        borderRadius:'10px',
    }
  return (
    <div className="footer-conatiner">
      <div className="footer">
        <div className="footer-upper">
          <div className="upper-part1">
            <div className="logo-part">
              <img className="img-logo" src={logo} alt="" />
              <p className="p1">Wezbo</p>
              <p className="p2">click the world</p>
            </div>
            <div className="part1-lower">
              <p className="p3">Scure Business Email for your organisation</p>
              <p className="p4">
                The WEZBO Sideboard offers a complete solution from
                enterprise-grade infrastructure and business features to
                advanced mailing solution.
              </p>
            </div>
          </div>
          <div className="upper-part2">
            <div className="Product">
              <h1>Product</h1>
              <ul>
                <li>Website Templates</li>
                <li>Website Builder</li>
                <li>Website Design</li>
                <li>Wezbo Features</li>
                <li>App Market</li>
                <li>Website Accessibility</li>
                <li>Web Hosting</li>
                <li>Mobile App Builder</li>
                <li>Wezbo Mail</li>
              </ul>
            </div>
            <div className="Solutions">
              <h1>Solutions</h1>
              <ul>
                <li>Online Store</li>
                <li>Online Booking</li>
                <li>Restaurant Website</li>
                <li>Blog Website</li>
                <li>Portfolio Website</li>
                <li>Interprise Solutions</li>
                <li>Student Website</li>
                <li>Professional Tools</li>
                <li>Business Email</li>
                <li>Logo Maker</li>
              </ul>
            </div>
            <div className="Support">
              <h1>Support</h1>
              <ul>
                <li>Help Center</li>
                <li>Hire a Professional</li>
                <li>Report Abuse</li>
                <li>System Status</li>
                <li>Trust Center</li>
              </ul>
            </div>
            <div className="Company">
              <h1>Company</h1>
              <ul>
                <li>About Us</li>
                <li>Press & Media</li>
                <li>Investor Relations</li>
                <li>Accessibility</li>
                <li>Patent Notice</li>
                <li>Site Map</li>
                <li>Career</li>
                <li>Collaborator</li>
              </ul>
            </div>
            <div className="Policy">
              <h1>Policy</h1>
              <ul>
                <li>Universal Policy</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-lower">
          <p>Ⓒ © 2022 Wezbo.in All Rights Reserved. <br></br> V2.0</p>
          <div className="socialIcons">
            <FaFacebook style={facebook}/>
            <FaLinkedin style={facebook}/>
            <FaInstagram style={insta}/>
            <FaTwitter style={facebook}/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
