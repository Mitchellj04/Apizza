import React from 'react'
import images from '../../constants/images'
import './Footer.css'
import {FaFacebookSquare, FaInstagram, FaTwitter} from 'react-icons/fa'

const footer = () => {
    return (
        <div className="app__footer app__bg flex__section section__padding" id='contact'>

            <div className="app__footer-section" >

                <div className="app__footer-section_content">
                    <div className="app__footer-section-title">
                        <h1 className="headtext__cormorant">Contact Us</h1>
                    </div>
                    <div className="app__footer-section-info">
                        <p className="p__cormorant">1051 Dixwell Ave Hamden, CT, 06514, USA</p>
                        <p className="p__cormorant">Phone: 203-908-0653</p>
                        <p className="p__cormorant">Email: info@Venezialipizza.com</p>
                    </div>
                </div>

                <div className="app__footer-section_img">
                    <div className="app__footer-section-img">
                        <img src={images.footer}/>
                    </div>
                    <div className="app__footer-section_social">
                        <FaFacebookSquare />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>

                <div className="app__footer-section_hours">
                    <div className="app__footer-section-title">
                        <h1 className="headtext__cormorant">Store Hours</h1>
                    </div>
                    <div>
                        <p className="p__cormorant"> Mon-Fri: 11am - 8pm</p>
                        <p className="p__cormorant"> Sat: 10am - 10pm</p>
                        <p className="p__cormorant"> Sun: CLOSED</p>
                    </div>
                
                </div>
            </div>

            <div className="app__footer-tag">
                <p>@2023 Veneziali Apizza Copy Right</p>
            </div>
        </div>
    )
}

export default footer