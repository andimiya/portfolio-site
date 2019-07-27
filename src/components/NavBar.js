import React from "react";

import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            ANDREA TAKAMIYA
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/work">WORK</Link>
          <Link to="/resume">RESUME</Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
