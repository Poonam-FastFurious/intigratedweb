import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Baseurl } from "../../Config";

function Slider() {
  const swiperRef = useRef(null);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    // Fetch banner data
    const fetchBanners = async () => {
      try {
        const res = await fetch(`${Baseurl}banner`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to load banners");

        // ✅ Filter only banners where isActive is true
        const activeBanners = (data.banners || []).filter(
          (banner) => banner.isActive === true
        );

        setBanners(activeBanners);
      } catch (err) {
        console.error("Error loading banners:", err.message);
      }
    };

    fetchBanners();
  }, []);

  useEffect(() => {
    if (banners.length > 0) {
      new Swiper(swiperRef.current, {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 7000,
        },
        pagination: {
          el: "#main-slider-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: "#main-slider__swiper-button-next",
          prevEl: "#main-slider__swiper-button-prev",
        },
      });
    }
  }, [banners]);

  return (
    <section className="main-slider main-slider-one main-slider-one--two">
      <div ref={swiperRef} className="swiper-container thm-swiper__slider">
        <div className="swiper-wrapper">
          {banners.map((banner) => (
            <div className="swiper-slide" key={banner._id}>
              <div
                className="image-layer"
                style={{
                  backgroundImage: `url(${banner.imageUrl})`,
                }}
              ></div>

              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="main-slider-inner text-center">
                      <div className="main-slider__content"></div>
                      {banner.link && (
                        <div className="main-slider__button-box mt-4">
                          <a
                            href={banner.link}
                            className="thm-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Discover more
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="swiper-pagination" id="main-slider-pagination"></div>

        <div className="main-slider__nav">
          <div
            className="swiper-button-prev"
            id="main-slider__swiper-button-prev"
          >
            <span className="icon-right-arrow-2"></span>
          </div>
          <div
            className="swiper-button-next"
            id="main-slider__swiper-button-next"
          >
            <span className="icon-right-arrow-2"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
