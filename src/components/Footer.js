import React from 'react'
import './footer.css'
import FacebookLogo from '../assets/images/facebook.png';
import TwitterLogo from '../assets/images/twitter.png';
import InstagramLogo from '../assets/images/instagram.png';

function Footer() {
    return (
      

<div className="footer">
  <div className="contain">
  <div className="col">
    <h1>Company</h1>
    <ul>
      <li>Home</li>
    </ul>
  </div>
 
  <div className="col">
    <h1>Menu</h1>
    <ul>
      <li>Our Works</li>
      
    </ul>
  </div>
  <div className="col">
    <h1>Customers</h1>
    <ul>
      <li>Donation</li>
      <li>Mission</li>
      <li>Vision</li>
     
    </ul>
  </div>
  <div className="col">
    <h1>Support</h1>
    <ul>
      <li>Contact us</li>
      <li>About Us</li>
     
    </ul>
  </div>
  <div className="col">
    <h1>Payments</h1>
    <ul>
      <li>Pay Us</li>
      
     
    </ul>
  </div>
  <div className="col social">
    <h1>Social</h1>
    <ul>
      <li><img src={FacebookLogo} width="32" style={{width: '32px'}} /></li>
      <li><img src={InstagramLogo} width="32" style={{width: '32px'}} /></li>
      <li><img src={TwitterLogo} width="32" style={{width: '32px'}} /></li>
    </ul>
  </div>

<div className="clearfix"></div>
<h6>Developed by Rahul Routh</h6>
</div>
        </div>
    )
}

export default Footer
