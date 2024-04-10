import React from 'react'
import headerStyles from './Header.module.css'
import Logo1 from '../../imgs/logo1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div className={headerStyles.header_container}>
            <div className={headerStyles.header}>
                <h1>Elene's Accessories</h1>
                <p>საუკეთესო ხარისხი ხელმისაწვდომ ფასად.</p>
                <img className={headerStyles.imgs} src={Logo1} alt='' />
            </div>
            <marquee>
                ჩანთებზე და ქამრებზე 30% იანი ფასდაკლება მხოლოდ დღეს, იჩქარეთ, დაბალი ფასები მაღალი ხარისხი, სრულად <span>ლინკი.</span>
            </marquee>
            <div className={headerStyles.socials}>
                <Link to="https://www.facebook.com/" target='_blank'><FontAwesomeIcon className={headerStyles.fb} icon={faFacebook} /></Link>
                <Link to="https://www.instagram.com/" target='_blank'><FontAwesomeIcon className={headerStyles.insta} icon={faInstagram} /></Link>
                <Link to="https://www.twitter.com/" target='_blank'><FontAwesomeIcon className={headerStyles.x} icon={faTwitter} /></Link>
            </div>
        </div>
    )
}

export default Header
