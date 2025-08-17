import Toppage from "../../Components/Toppage";
import BoardCarousel from "./BoardCarousel";
import OverviewSection from "./Overview";
import InvestorKitSection from "./InvestorKitSection";
import GrowthTrajectoryCarousel from "./GrowthTrajectoryCarousel";
import InvestorContact from "./InvestorContact";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Investor = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = query.get("p");

  useEffect(() => {
    if (page) {
      const section = document.getElementById(page);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [page]);

  return (
    <>
      <Toppage Tital="INSPIRED PERFORMANCE" />
      <section id="investor-overview">
        <OverviewSection />
      </section>

      <section id="investor-contact">
        <InvestorContact />
      </section>
    </>
  );
};

export default Investor;
