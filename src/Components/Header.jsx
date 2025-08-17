import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="main-header  main-header--one main-header--one--two  clearfix">
        <div className="main-header--one__wrapper">
          <div className="main-header--one__bottom clearfix">
            <div className="auto-container">
              <div className="main-header--one__bottom-inner">
                <div className="main-header--one__bottom-middel">
                  <div className="logo">
                    <Link to="/">
                      <img
                        style={{ width: "200px" }}
                        src="https://i0.wp.com/integratedindustries.in/wp-content/uploads/2023/03/logo2.png?fit=822%2C267&ssl=1"
                        alt=""
                        className="light-logo"
                      />
                    </Link>
                  </div>
                </div>

                <nav className="main-menu main-menu--1">
                  <div className="main-menu__inner">
                    <Link to="#" className="mobile-nav__toggler">
                      <i className="fa fa-bars"></i>
                    </Link>

                    <div className="stricky-one-logo">
                      <div className="logo">
                        <Link to="/">
                          <img
                            style={{ width: "200px" }}
                            src="https://pixydrops.com/agriox/assets/images/resources/logo-1.png"
                            className="dark-logo"
                            alt=""
                          />
                          <img
                            style={{ width: "200px" }}
                            src="https://pixydrops.com/agriox/assets/images/resources/logo-2.png"
                            className="light-logo"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>

                    <div className="main-header--one__bottom-left">
                      <ul className="main-menu__list">
                        <li className="dropdown megamenu">
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/product">Product</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/investor">Investor Relation</Link>
                          <ul>
                            <li>
                              <Link to="/investor?p=investor-overview">
                                Overview
                              </Link>
                            </li>

                            <li>
                              <Link to="/investor/financials">Financials</Link>
                            </li>

                            <li>
                              <Link to="/corporate-governance">
                                Cororate Governance
                              </Link>
                            </li>
                            <li>
                              <Link to="/shareholders-information">
                                Shareholder Information
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="nav-link"
                                to="/investor?p=investor-contact"
                              >
                                Investor Contact
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>

                <div className="main-header--one__bottom-right clearfix">
                  <div className="search-cart">
                    <Link to="#" className="search search-toggler">
                      <span className="icon-magnifying-glass"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
