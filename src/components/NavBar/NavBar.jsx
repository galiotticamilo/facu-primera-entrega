import React from "react";
import {Link} from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
    return(
        <nav className="navbar-container">
          <Link to="/">
            <p>
                example
            </p>
          </Link>            
            <div className="buttons-container">
              <Link to="/autos">
                <p>AUTOS</p>
              </Link>
              <Link to="/modificaciones">
                <p>MODIFICACIONES</p>
              </Link>
              <Link to="/accesorios">
                <p>ACCESORIOS</p>
              </Link>
            </div>
            <div>
              CART 5
            </div>
        </nav>
    )
}

export default NavBar