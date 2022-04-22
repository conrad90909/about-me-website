import React from 'react';

function Menu() {
    return (
        <div className="Menu">
            <nav>
                <h2 id="logo">Conrad Hill</h2>
                <ul className="navigation-items">
                <li className="navigation-item"><a href="#about-me">About Me</a></li>
                <li className="navigation-item"><a href="#projects">Projects</a></li>
                <li className="navigation-item"><a href="#skills">Skills</a></li>
                <li className="navigation-item"><a href="/contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
