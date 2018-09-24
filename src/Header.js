import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Portfolio</h1>
      <nav className="headerNav">
        <a className="headerNav-item" href="#about">
          About
        </a>
        <a className="headerNav-item" href="#works">
          Works
        </a>
      </nav>
    </header>
  );
};

export default Header;
