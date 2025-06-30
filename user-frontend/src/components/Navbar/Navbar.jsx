import React from 'react'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    const [menu, setMenu] = React.useState("home");
  return (
    <div className="navbar">
        <div className="navbar-container">
            <div className="navbar-left">
            <Link to="/"><img src={assets.logo} alt="Logo" className="logo" /></Link>
            </div>

            <ul className="navbar-center">
            <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <Link to="/plans" onClick={()=>setMenu("plans")} className={menu==="plans"?"active":""}>Plans</Link>
            <Link to="/contact" onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>Contact Us</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar