// components/BoardCarousel.jsx
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Baseurl } from "../../Config";


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const BoardCarousel = () => {
  const [boardMembers, setBoardMembers] = useState([]);

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const res = await fetch(`${Baseurl}team`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to fetch members");

        const board = (data.members || [])
          .filter((m) => m.category === "Board" && m.isActive)
          .sort((a, b) => a.order - b.order);

        setBoardMembers(board);
      } catch (err) {
        console.error("Error loading board members:", err.message);
      }
    };

    fetchBoard();
  }, []);
  return (
    <Slider {...sliderSettings}>
      {boardMembers.map((member, index) => (
        <div key={index} className="p-3">
          <div className="text-center">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="img-fluid mb-2"
              style={{
                borderRadius: "8px",
                backgroundColor: "#f4edf8",
                maxHeight: "250px",
                objectFit: "cover",
                margin: "0 auto",
              }}
            />
            <h6 className="mt-2 mb-0 fw-bold">{member.name}</h6>
            <small className="text-muted">{member.designation}</small>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BoardCarousel;
