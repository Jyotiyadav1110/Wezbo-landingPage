import React from "react";
import "./Banner3.css";
import blackFriday from '../../assets/blackFriday.jpeg'
import flower from '../../assets/flower.jpeg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FaFacebookMessenger } from "react-icons/fa";
import ShareIcon from '@mui/icons-material/Share';
import graph from '../../assets/graph.jpeg'
import inner1 from '../../assets/inner1.jpeg'
import inner2 from '../../assets/inner2.jpeg'
import inner3 from '../../assets/inner3.jpeg'
function Banner3() {
  const more = {
    marginLeft:'20px',
   fontSize:"90px",
   color:'#D9D9D9',
  }
  const icons = {
    fontSize:"30px",
    color:'black',
    background:'none'
  }
  return (
    <div className="Banner3-Container">
      <div className="Banner3-upper">
        <div className="banner3-part1">
            <img className="graph" src={graph} alt="" />
        </div>
        <div className="banner3-part2">
          <div className="part2-1"></div>
          <div className="part2-2">
            <img className="flower" src={flower} alt="" />
          </div>
          <div className="part2-3">
            <FavoriteBorderIcon style={icons}/>
            <BookmarkBorderIcon style={icons}/>
            <FaFacebookMessenger style={icons}/>
            <MoreHorizIcon style={icons}/>
            <ShareIcon style={icons}/>
          </div>
        </div>
        <div className="banner3-part3">
          <div className="part3-1">
            <p>UB City New Delhi,5 Avenue Street,India.</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="part3-2">
            <img className="blackFriday" src={blackFriday} alt="blackFriday" />
          </div>
          <div className="part3-3">
              <MoreHorizIcon style={more}/>
          </div>
        </div>
        <div className="banner3-part4">
          <div className="part4-inner">
            <h1>User-Friendly</h1>
            <p>
              Compatibility is a prominent factor when it comes to building a
              website on your own, and our easy-to-use website builder is apt
              for absolute beginners and comes with a drag-and-drop builder,
              assertive editing tools, and endless opportunities.
            </p>
            <h1>Premium Attributes</h1>
            <p>
              1. More advanced options are available that build a premium
              website. 2. Full-fledged and complete control in designing with
              premium features. 3. Good to go if you need an online presence or
              are an influencer.
            </p>
          </div>

          <button className="banner3-btn">Learn More</button>
        </div>
      </div>
      <div className="Banner3-lower">
        <div className="lower-inner">
          <div className="innerHead">
            <h1>One platform, with endless options</h1>
          </div>
          <div className="innerDiv3">
            <div className="inner1">
            <img className="inner1-upper" src={inner1} alt="inner1-upper" />
              <div className="inner1-lower">
                <h1>Unlimited creativity</h1>
                <p>Create a website with a full range of sophisticated capabilities to bring your idea to life.</p>
              </div>
            </div>
            <div className="inner2">
              <img className="inner1-upper" src={inner2} alt="inner2-upper" />
              <div className="inner1-lower">
              <h1>Strong infrastructure</h1>
                <p>Get a foundation built for enterprise-level scalability and peace of mind.</p>
              </div>
            </div>
            <div className="inner3">
              <button className="banner3-lastbtn">Learn More</button>
            <img className="inner3-upper" src={inner3} alt="inner3-upper" />
              <div className="inner3-lower">
              <h1>The area for development</h1>
                <p>With built-in marketing and business solutions, you can convert and expand with ease.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner3;
