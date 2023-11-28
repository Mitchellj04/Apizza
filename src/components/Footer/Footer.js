import React from 'react'
import images from '../../constants/images'
import './Footer.css'

const footer = () => {
    return (
        <div className="app__footer app__bg flex__section section__padding">

            <div className="app__footer-section">

                <div className="app__footer-section_content">
                    <div className="app__footer-section-title">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="app__footer-section-info">
                        <p className="p__cormorant">1051 Dixwell Ave Hamden, CT, 06514, USA</p>
                        <p className="p__cormorant">203-908-0653</p>
                        <p className="p__cormorant">info@Venezialipizza.com</p>
                    </div>
                </div>

                <div className="app__footer-section_img">
                    <div className="app__footer-section-img">
                        <img src={images.footer}/>
                    </div>
                    <div className="app__footer-section-social">

                    </div>
                </div>

                <div className="app__footer-section_hours">
                    <div className="app__footer-section-title">
                        <h1>Store Hours</h1>
                    </div>
                    <div>
                        <p></p>
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