import React from "react";
import Header from "../../Components/Header";
import StickyHeader from "../../Components/StickyHeader";
import Slider from "./Slider";
import Whoweare from "../Whoweare";
import FocusQuality from "../FocusQuality";
import Brand from "./Brand";
import Product from "./Product";
import Whychooseus from "./Whychooseus";
import Faq from "./Faq";
import Team from "./Team";
import BlogCarousel from "../../Components/BlogCarousel";
import BrandAndProduct from "./BrandAndProduct";

function Home() {
  return (
    <>
      <div className="page-wrapper">
        <Slider />
        <Whoweare />
        <FocusQuality />
        <BrandAndProduct />

        <Whychooseus />
        <Faq />
        <Team />
        <BlogCarousel />
      </div>
    </>
  );
}

export default Home;
