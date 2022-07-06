import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navMenu">
                <ul>
                    <li>
                        <Link className="navLink" to="/">HOME</Link>
                    </li>
                    <li>
                        <Link className="navLink" to="/resume">RESUME</Link>
                    </li>
                    <li>
                        <Link className="navLink" to="/page2">PORTFOLIO</Link>
                    </li>
                    <li>
                        <Link className="navLink" to="/page3">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;