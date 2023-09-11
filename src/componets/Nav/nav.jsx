import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <Fragment>
        <nav style={{ backgroundColor: '#25283D' }} className="navbar navbar-expand-lg text-uppercase fixed-top" id="mainNav">
          <div className="container">
            <Link className="navbar-brand" to="landing-page">
              START FRAMEWORK
            </Link>

            <button
              className="navbar-toggler d-lg-none border-black"
              type="button"
            
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/landing-page/Portfolio">
                  Portfolio
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/landing-page/about">
                    About
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/landing-page/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Nav;
