import { useState } from 'react';

import "./Nav.css"

function Nav() {
  const [showWorksSubMenu, setShowWorksSubMenu] = useState(false);

  const toggleWorksSubMenu = () => {
    setShowWorksSubMenu(!showWorksSubMenu);
  };

  return (
    <nav>
      <ul className="nav">
        <li
          className="nav-item main-rubrik"
          onMouseEnter={toggleWorksSubMenu}
          onMouseLeave={toggleWorksSubMenu}
        >
          <a href="/works" className="nav-link">WORKS</a>
          {showWorksSubMenu && (
            <ul className="sub-menu">
              <li className="nav-item">
                <a href="/works/paintings" className="nav-link">Paintings</a>
              </li>
              <li className="nav-item">
                <a href="/works/drawings" className="nav-link">Drawings</a>
              </li>
              <li className="nav-item">
                <a href="/works/collages" className="nav-link">Collages</a>
              </li>
              <li className="nav-item">
                <a href="/works/object" className="nav-link">Object</a>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item main-rubrik">
          <a href="/text" className="nav-link">TEXT</a>
        </li>
        <li className="nav-item main-rubrik">
          <a href="/exhibitions" className="nav-link">EXHIBITIONS</a>
        </li>
        <li className="nav-item main-rubrik">
          <a href="/cv" className="nav-link">CV</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
