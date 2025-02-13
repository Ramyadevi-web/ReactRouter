import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to ='/dashboard' className="nav-link">All</Link>
            </li>
            <li className="nav-item">
                <Link to ='/fullstack' className="nav-link">Fullstack Development</Link>
            </li>
            <li className="nav-item">
                <Link to ='/datascience' className="nav-link">Data Science</Link>
            </li>
            <li className="nav-item">
                <Link to ='/digital-marketing' className="nav-link">Cyber Security</Link>
            </li>
            <li className="nav-item">
                <Link to ='/career'  className="nav-link">Career</Link>
            </li>
            </ul>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar
