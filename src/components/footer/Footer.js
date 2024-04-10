import React from 'react'
import footerStyle from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

function Footer() {
    return (
        <>
            <footer>
                <div className={footerStyle.footer_container}>
                    <div>
                        <h1>ჩანთები</h1>
                        <h1>ქამრები</h1>
                        <h1>დონაცია</h1>
                        <h1>ინსტაგრამი</h1>
                    </div>
                    <div>
                        <h1>აქსესუარები</h1>
                        <h1>კონტაქტი</h1>
                        <h1>გათამაშება</h1>
                        <h1>სხვადასხვა</h1>
                    </div>
                </div>
                <div className={footerStyle.inputs}>
                    <input type="mail" id="fname" name="mail" placeholder="ჩაწერეთ ელექ. ფოსტა.." />
                    <button><FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </footer>
            <div className={footerStyle.reserved}>
                <h2>ყველა უფლება დაცულია ® 2024</h2>
            </div>
        </>
    )
}

export default Footer
