import React from "react";

import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }

  toggle = () => {
    const { isActive } = this.state;
    if (isActive) {
      this.setState({ isActive: false });
    } else {
      this.setState({ isActive: true });
    }
  };

  render() {
    const { isActive } = this.state;
    let activeClass = "";

    if (isActive) {
      activeClass = "is-active";
    }
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            ANDREA TAKAMIYA
          </Link>
          <button
            className={`navbar-burger burger ${activeClass}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
            onClick={this.toggle}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div id="navbar" className={`navbar-menu  ${activeClass}`}>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link to="/work">WORK</Link>
                </p>

                <p className="control">
                  <Link to="/resume">RESUME</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
