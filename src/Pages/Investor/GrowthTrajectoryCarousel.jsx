import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const cards = [
  {
    title: "Revenue (Gross)",
    image: "https://www.trivenigroup.com/images/Reveneue-2024.svg",
  },
  {
    title: "EBITDA",
    image: "https://www.trivenigroup.com/images/Reveneue-2024.svg",
  },
  {
    title: "EBIT (Before Exceptional Items...)",
    image: "https://www.trivenigroup.com/images/Reveneue-2024.svg",
  },
  {
    title: "EBIT (Before Exceptional Items...)",
    image: "https://www.trivenigroup.com/images/Reveneue-2024.svg",
  },
  {
    title: "EBIT (Before Exceptional Items...)",
    image: "https://www.trivenigroup.com/images/Reveneue-2024.svg",
  },
  {
    title: "EBIT (Before Exceptional Items...)",
    image: "https://www.trivenigroup.com/images/Reveneue-2024.svg",
  },
];

const GrowthTrajectoryCarousel = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4 text-start mb-5">
          OUR 5-YEAR GROWTH TRAJECTORY
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            576: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white  shadow  mb-5"
                style={{ borderRadius: "10px" }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="img-fluid  rounded-pill"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="btn btn-warning mt-4 px-4 rounded-pill">
          Click to see more from our 5-year growth trajectory
        </button>
      </div>
    </section>
  );
};

export default GrowthTrajectoryCarousel;
