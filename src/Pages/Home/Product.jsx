import { useState } from "react";
import image1 from "../../assets/RICHLITE 3D/1.png";
import image2 from "../../assets/RICHLITE 3D/2.png";
import image3 from "../../assets/RICHLITE 3D/3.png";
import image4 from "../../assets/RICHLITE 3D/4.png";
import image5 from "../../assets/RICHLITE 3D/5.png";
import image6 from "../../assets/RICHLITE 3D/6.png";
import image7 from "../../assets/RICHLITE 3D/butter.png";
import image8 from "../../assets/RICHLITE 3D/8.png";

function Product() {
  const [activeTab, setActiveTab] = useState("tab1");

  const products = [
    {
      name: "butter",
      img: image1,
      category: "tab1",
    },
    {
      name: "Digestive",
      img: image2,
      category: "tab1",
    },
    {
      name: "milk Cream",
      img: image3,
      category: "tab2",
    },
    {
      name: "richlite Cashew",
      img: image4,
      category: "tab2",
    },
    {
      name: "Richlite Corck",
      img: image5,
      category: "tab3",
    },
    {
      name: "Richlite Crunchy Crack",
      img: image6,
      category: "tab3",
    },
    {
      name: "Product 7",
      img: image7,
      category: "tab1",
    },
    {
      name: "Product 8",
      img: image8,
      category: "tab2",
    },
  ];

  const filteredProducts = products.filter(
    (product) => product.category === activeTab
  );

  return (
    <section className="services-one services-one--has-top-b">
      <div className="container">
        <div className="sec-title text-center">
          <div className="icon">
            <img src="assets/images/resources/sec-title-icon1.png" alt="" />
          </div>
          <span className="sec-title__tagline">What we’re doing</span>
          <h2 className="sec-title__title">Our Products</h2>
        </div>

        {/* Tabs */}
        <div className="text-center mb-5">
          <button
            className={`btn m-2 ${
              activeTab === "tab1" ? "btn-primary " : "btn-outline-primary"
            }`}
            onClick={() => setActiveTab("tab1")}
          >
            RICHLITE
          </button>
          <button
            className={`btn m-2 ${
              activeTab === "tab2" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setActiveTab("tab2")}
          >
            CRUNCHY KRAZE
          </button>
          <button
            className={`btn m-2 ${
              activeTab === "tab3" ? "btn-primary  " : "btn-outline-primary"
            }`}
            onClick={() => setActiveTab("tab3")}
          >
            FUNTREATE
          </button>
        </div>

        {/* Filtered Products */}
        <div className="row">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1000ms"
            >
              <div className="services-one__single">
                <div className="services-one__single-img">
                  <div className="services-one__single-img-inner">
                    <img src={product.img} alt={product.name} />
                  </div>
                  <div className="services-one__single-img-icon">
                    <span className="icon-agriculture"></span>
                  </div>
                </div>
                <div className="services-one__single-content text-center">
                  <h3>{product.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
