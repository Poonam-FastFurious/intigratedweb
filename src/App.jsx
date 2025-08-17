import "../src/assets/vendors/bootstrap/css/bootstrap.min.css";
import "../src/assets/vendors/animate/animate.min.css";
import "../src/assets/vendors/animate/custom-animate.css";
import "../src/assets/vendors/fontawesome/css/all.min.css";
import "../src/assets/vendors/jarallax/jarallax.css";
import "../src/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css";
import "../src/assets/vendors/nouislider/nouislider.min.css";
import "../src/assets/vendors/nouislider/nouislider.pips.css";
import "../src/assets/vendors/odometer/odometer.min.css";
import "../src/assets/vendors/swiper/swiper.min.css";
import "../src/assets/vendors/icomoon-icons/style.css";
import "../src/assets/vendors/tiny-slider/tiny-slider.min.css";
import "../src/assets/vendors/reey-font/stylesheet.css";
import "../src/assets/vendors/owl-carousel/owl.carousel.min.css";
import "../src/assets/vendors/owl-carousel/owl.theme.default.min.css";
import "../src/assets/vendors/twentytwenty/twentytwenty.css";
import "../src/assets/css/agriox.css";
import "../src/assets/css/agriox-rtl.css";
import "../src/assets/css/modes/agriox-light.css";
import "../src/assets/vendors/toolbar/css/toolbar.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";
import StickyHeader from "./Components/StickyHeader";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contactus from "./Pages/ContactUs/Contactus";
import Product from "./Pages/Products/Product";
import Investor from "./Pages/Investor/Investor";

import FinancialPage from "./Pages/Investor/FinancialPage";
import GovernancePage from "./Pages/Investor/GovernancePage";
import ShareholdersPage from "./Pages/Investor/ShareholdersPage";
import Header from "./Components/Header";
import { useEffect, useState } from "react";
import useWebsiteSettings from "./Store/useWebsiteSettings";
import UnderMaintenance from "./Components/UnderMentainnece";
function App() {
  const [loading, setLoading] = useState(true);
  const { settings, fetchSettings } = useWebsiteSettings();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);
  if (loading || !settings) {
    return (
      <div className="preloader">
        <img
          className="preloader__image"
          width="60"
          src="https://pixydrops.com/agriox/assets/images/loader.png"
          alt="Loading..."
        />
      </div>
    );
  }

  // Show maintenance mode screen if flag is true
  if (settings.maintenanceMode) {
    return <UnderMaintenance />;
  }

  return (
    <>
      <BrowserRouter>
        <StickyHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/product" element={<Product />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/investor/financials" element={<FinancialPage />} />
          <Route path="/corporate-governance" element={<GovernancePage />} />
          <Route
            path="/shareholders-information"
            element={<ShareholdersPage />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
