import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const BlogCarousel = () => {
  const carouselRef = useRef();

  const options = {
    loop: true,
    margin: 30,
    nav: true,
    smartSpeed: 500,
    autoHeight: false,
    autoplay: true,
    dots: false,
    autoplayTimeout: 10000,
    navText: [
      '<span class="icon-left"></span>',
      '<span class="icon-right"></span>',
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      992: { items: 3 },
      1024: { items: 3 },
      1200: { items: 3 },
    },
  };

  return (
    <section className="blog-two">
      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-4">
            <div className="blog-two__left">
              <div className="blog-two__left-bg"></div>
              <div className="sec-title">
                <div className="icon">
                  <img
                    src="assets/images/resources/sec-title-icon1.png"
                    alt=""
                  />
                </div>
                <span className="sec-title__tagline">from the blog</span>
                <h2 className="sec-title__title">
                  Latest News <br /> Articles
                </h2>
              </div>
              <p className="blog-two__left-text">
                We are committed to providing our <br />
                customers with exceptional service <br />
                while offering our employees the <br />
                best training.
              </p>
              <div className="blog-two__carousel__custom-nav">
                <button
                  className="left-btn"
                  onClick={() => carouselRef.current.prev()}
                >
                  <span className="icon-right-arrow-2"></span>
                </button>
                <button
                  className="right-btn"
                  onClick={() => carouselRef.current.next()}
                >
                  <span className="icon-right-arrow-2"></span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="blog-two__right">
              <OwlCarousel
                ref={carouselRef}
                className="blog-two__carousel owl-theme"
                {...options}
              >
                {/* Blog Item 1 */}
                <div className="blog-one__single">
                  <div className="blog-one__single-img">
                    <img src="assets/images/blog/blog-v1-img1.jpg" alt="" />
                    <div className="date-box">
                      <span>30 July, 2021</span>
                    </div>
                    <div className="overlay-icon">
                      <Link to="#">
                        <span className="icon-plus"></span>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-one__single-content">
                    <ul className="meta-info">
                      <li>
                        <Link to="#">
                          <i className="far fa-user-circle"></i>Jessica
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="far fa-comments"></i>2 Comments
                        </Link>
                      </li>
                    </ul>
                    <h2>
                      <Link to="#">
                        Why Eco and Walking or Agriculture for the Environment?
                      </Link>
                    </h2>
                  </div>
                </div>

                {/* Blog Item 2 */}
                <div className="blog-one__single">
                  <div className="blog-one__single-img">
                    <img src="assets/images/blog/blog-v1-img2.jpg" alt="" />
                    <div className="date-box">
                      <span>30 July, 2021</span>
                    </div>
                    <div className="overlay-icon">
                      <Link to="#">
                        <span className="icon-plus"></span>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-one__single-content">
                    <ul className="meta-info">
                      <li>
                        <Link to="#">
                          <i className="far fa-user-circle"></i>Jessica
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="far fa-comments"></i>2 Comments
                        </Link>
                      </li>
                    </ul>
                    <h2>
                      <Link to="#">
                        Leverage agile frameworks to provide a robust synopsis
                      </Link>
                    </h2>
                  </div>
                </div>

                {/* Blog Item 3 */}
                <div className="blog-one__single">
                  <div className="blog-one__single-img">
                    <img src="assets/images/blog/blog-v1-img3.jpg" alt="" />
                    <div className="date-box">
                      <span>30 July, 2021</span>
                    </div>
                    <div className="overlay-icon">
                      <Link to="#">
                        <span className="icon-plus"></span>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-one__single-content">
                    <ul className="meta-info">
                      <li>
                        <Link to="#">
                          <i className="far fa-user-circle"></i>Jessica
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="far fa-comments"></i>2 Comments
                        </Link>
                      </li>
                    </ul>
                    <h2>
                      <Link to="#">
                        Bring to the table win-win survival strategies to ensure
                      </Link>
                    </h2>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
