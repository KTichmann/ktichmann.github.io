import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import {navigate} from 'gatsby';

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
        <a
            href="/"
          >
          </a>
          <div className="links-wrapper">
            <button onClick={() => navigate("/") }>Home</button>
            { typeof window !== `undefined` && window.location.pathname == '/' && <button onClick={() => scrollTo("#work")}>Work</button>}
            { typeof window !== `undefined` && window.location.pathname == '/' && <button onClick={() => scrollTo("#about")}>About</button>}
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
