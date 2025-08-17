import { Link } from "react-router-dom";
import useWebsiteSettings from "../Store/useWebsiteSettings";

function Footer() {
  const { settings } = useWebsiteSettings();

  const contactPhone = settings?.contactPhone || "+91-0000000000";
  const contactEmail = settings?.contactEmail || "info@example.com";
  const contactAddress =
    settings?.contactAddress ||
    "B-16, Second Floor, Sector-2, Noida 201301, India.";
  const socialLinks = settings?.socialLinks || {};

  return (
    <>
      <footer class="footer-one">
        <div class="footer-one__top">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="footer-one__top-wrapper">
                  <div class="footer-one__bg"></div>
                  <div class="row">
                    <div
                      class="col-xl-4 col-lg-4 col-md-4 wow animated fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div class="footer-widget__column footer-widget__about">
                        <div class="footer-widget__about-logo">
                          <Link to="/">
                            <img
                              style={{ width: "200px" }}
                              src="https://i0.wp.com/integratedindustries.in/wp-content/uploads/2023/03/footer-logo.png?fit=823%2C269&ssl=1"
                              alt=""
                            />
                          </Link>
                        </div>
                        <p class="footer-widget__about-text">
                          Lorem ipsum dolor sit amet consect etur adi pisicing
                          elit sed.
                        </p>
                        <div class="footer-widget__about-contact-box">
                          <p class="phone">
                            <Link to={`tel:${contactPhone}`}>
                              <i class="fas fa-phone-square-alt"></i>
                              {contactPhone}
                            </Link>
                          </p>
                          <p>
                            <Link to={`mailto:${contactEmail}`}>
                              <i class="fa fa-envelope"></i>
                              {contactEmail}
                            </Link>
                          </p>
                          <p class="text">
                            <i class="fas fa-map-marker-alt"></i>
                            {contactAddress}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      class="col-xl-4 col-lg-4 col-md-4 wow animated fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div class="footer-widget__column footer-widget__explore">
                        <h2 class="footer-widget__title">About Us</h2>
                        <ul class="footer-widget__explore-list">
                          <li class="footer-widget__explore-list-item">
                            <Link to="/contact">Contact Us</Link>
                          </li>
                          <li class="footer-widget__explore-list-item">
                            <Link to="/product">Products</Link>
                          </li>
                          <li class="footer-widget__explore-list-item">
                            <Link to="/investor?p=investor-overview">
                              Investor Relation
                            </Link>
                          </li>
                          <li class="footer-widget__explore-list-item">
                            <Link to="/corporate-governance">
                              Board of Directors
                            </Link>
                          </li>
                          <li class="footer-widget__explore-list-item">
                            <Link to="#">Management Team</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="col-xl-4 col-lg-4 col-md-4 wow animated fadeInUp"
                      data-wow-delay="0.7s"
                    >
                      <div class="footer-widget__column footer-widget__newletter">
                        <h2 class="footer-widget__title">Newletter</h2>
                        <p class="footer-widget__newletter-text">
                          Sign up now to get daily latest news & updates from us
                        </p>
                        <form class="subscribe-form" action="#">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                          />
                          <button type="submit">Go</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-one__bottom">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="footer-one__bottom-inner">
                  <div class="footer-one__bottom-text">
                    <p>
                      &copy; Copyright 2025 by <Link to="#">Intigrated</Link>
                    </p>
                  </div>
                  <div class="footer-one__bottom-social-links">
                    <ul>
                      <li>
                        {socialLinks?.twitter && (
                          <Link
                            to={socialLinks.twitter}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-twitter"></i>
                          </Link>
                        )}
                      </li>
                      <li>
                        <Link
                          to={socialLinks.facebook || "#"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="fab fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={socialLinks.youtube || "#"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="fab fa-youtube"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={socialLinks.instagram || "#"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
