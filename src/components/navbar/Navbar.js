import React from 'react'
import navbarStyle from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'

function Navbar() {
  return (
    <div className={navbarStyle.navbar_container}>
      <ul>
        <Link to='all'><li className={navbarStyle.all_texts}>ყველა</li></Link>
        <Link to='bags'><li>ჩანთები</li></Link>
        <Link to='belts'><li>ქამრები</li></Link>
        <Link to='accessories'><li>აქსესუარი</li></Link>
      </ul>
      <div className={navbarStyle.navbars}>
        <h3 className={navbarStyle.dark_white}><FontAwesomeIcon icon={faSun} /></h3>
      <h3 className={navbarStyle.geo}>GE</h3>
      <h3 className={navbarStyle.eng}>ENG</h3>
    </div>
    </div >
  )
}

export default Navbar
