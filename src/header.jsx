import { useState } from 'react';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header>
      <div className="logo">
        <img src="assets/images/logo.svg" alt="logo" />
      </div>
      <nav>
        <ul className="desktop-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
        </ul>
        <button onClick={toggleNav}>
          <img src="assets/images/icon-menu.svg" alt="icon" />
        </button>
      </nav>
      <div className="hidden-nav" style={{ display: showNav ? 'block' : 'none' }}>
        <div className="hidden-nav-content">
          <button onClick={toggleNav}>
            <img src="/assets/images/icon-menu-close.svg" alt="close"></img>
          </button>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
