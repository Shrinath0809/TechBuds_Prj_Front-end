import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

function Navbar() {
  return (
    <section className={style.navbar_container}>
      <div className={style.navbar_container__content}>
        <button><Link to="/"><li>Create</li></Link></button>
        <button><Link to="/viewUser"><li>View</li></Link></button>
        <button><Link to="/menu"><li>Menu</li></Link></button>
        <button><Link to="/menu"><li>About Us</li></Link></button>
      </div>
    </section>
  )
}

export default Navbar