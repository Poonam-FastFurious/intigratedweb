import React from "react";
import { Link } from "react-router-dom";

function StickyHeader() {
  return (
    <>
      <div class="stricky-header  stricked-menu main-menu ">
        <div class="sticky-header__content">
          <div class="main-menu__inner">
            <Link to="#" class="mobile-nav__toggler">
              <i class="fa fa-bars"></i>
            </Link>

            <div class="stricky-one-logo">
              <div class="logo">
                <Link to="/">
                  <img
                    style={{ width: "250px", padding: "20px" }}
                    src="https://i0.wp.com/integratedindustries.in/wp-content/uploads/2023/03/logo2.png?fit=822%2C267&ssl=1"
                    class="dark-logo"
                    alt=""
                  />
                </Link>
              </div>
            </div>

            <div class="main-header--one__bottom-left">
              <ul className="main-menu__list">
                <li className="dropdown megamenu">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/product">Product</Link>
                </li>
                <li className="dropdown">
                  <Link to="/investor">Investor Relation</Link>
                  <ul>
                    <li>
                      <Link
                        className="nav-link"
                        to="/investor?p=investor-overview"
                      >
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link to="/investor/financials?tab=Financial+Results">
                        Financial
                      </Link>
                    </li>
                    <li>
                      <Link to="/corporate-governance">
                        Cororate Governance
                      </Link>
                    </li>
                    <li>
                      <Link to="/shareholders-information?type=agm-transcript">
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
                    <li>
                      <Link
                        className="nav-link"
                        to="/shareholders-information?type=clause-46-of-lodr"
                      >
                        Disclosures under Regulation 46 of the LODR
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
        </div>
      </div>
    </>
  );
}

export default StickyHeader;
