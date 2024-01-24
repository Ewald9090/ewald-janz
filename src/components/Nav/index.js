import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Nav.css";

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
          <Link to="/works" className="nav-link nav-link-main">
            WORKS
          </Link>
          {showWorksSubMenu && (
            <ul className="sub-menu">
              <li className="nav-item">
                <Link to="/works/paintings" className="nav-link">
                  Paintings
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/works/drawings" className="nav-link">
                  Drawings
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/works/collages" className="nav-link">
                  Collages
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/works/object" 
                  className="nav-link"
                >
                  Object
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item main-rubrik">
          <Link to="/text" className="nav-link nav-link-main">
            TEXT
          </Link>
        </li>
        <li className="nav-item main-rubrik">
          <Link to="/exhibitions" className="nav-link nav-link-main">
            EXHIBITIONS
          </Link>
        </li>
        <li className="nav-item main-rubrik">
          <Link to="/cv" className="nav-link nav-link-main">
            CV
          </Link>
          <li className="nav-item main-rubrik">
          <Link to="/contact" className="nav-link nav-link-main">
            CONTACT
          </Link>
        </li>          
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
