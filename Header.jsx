import React from 'react'
import "../Components/nav.css"
function Header() {
  return (
       <div className="nav-links">
      <nav >
        <ul className="navbar-ul">
        <h1 className='Title'>Flag Detergents</h1>
      <li className="navbar-li"><a className="navbar-a"href="/Contact">Contact</a></li>
      <li className="navbar-li"><a className="navbar-a"href="/About">About </a></li>
      <li className="navbar-li"><a className="navbar-a"href="/Home">Home</a></li>
      </ul>
      </nav>
    </div>
  )
}

export default Header
