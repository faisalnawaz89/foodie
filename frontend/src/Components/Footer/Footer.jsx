import React from 'react'
import './Footer.css'
import { assets } from '../../Assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut imperdiet justo, congue elementum quam. Morbi fermentum et metus ac laoreet. Praesent gravida magna sodales elementum hendrerit. Morbi sed varius tortor, in vestibulum dolor. Pellentesque quis iaculis sem. </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Comapny</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 123546 884</li>
                    <li>foodie@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Tomato.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer