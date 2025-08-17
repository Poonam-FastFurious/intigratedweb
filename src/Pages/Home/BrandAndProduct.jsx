import { useEffect, useState } from "react";
import image6 from "../../assets/RICHLITE 3D/6.png";
import image7 from "../../assets/RICHLITE 3D/butter.png";
import image8 from "../../assets/RICHLITE 3D/8.png";
import useWebsiteSettings from "../../Store/useWebsiteSettings";

function BrandAndProduct() {
  const [activeTab, setActiveTab] = useState("RICHLITE");

  const brands = [
    { img: image6, name: "RICHLITE" },
    { img: image7, name: "FUNTREATE" },
    { img: image8, name: "CRUNCHY KRAZE" },
  ];

  const { products, fetchProducts } = useWebsiteSettings();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = products.filter((p) => p.brand === activeTab);

  return (
    <section className="services-one services-one--has-top-b">
      <div className="container">
        {/* Brand Section */}
        <div className="sec-title text-center">
          <h2 className="sec-title__title">Our Brand</h2>
        </div>
        <div className="row">
          {brands.map((brand, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-4">
              <div className="services-one__single text-center">
                <div className="services-one__single-img">
                  <div
                    className="services-one__single-img-inner d-flex justify-content-center align-items-center"
                    style={{ height: "180px" }}
                  >
                    <img
                      src={brand.img}
                      alt={brand.name}
                      style={{
                        maxWidth: "100%",
                        width: "180px",
                        height: "auto",
                        maxHeight: "140px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="services-one__single-img-icon">
                    <span className="icon-agriculture"></span>
                  </div>
                </div>
                <div className="services-one__single-content text-center">
                  <h3>{brand.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Section */}
        <div className="sec-title text-center" style={{ marginTop: "2px" }}>
          <div className="icon">
            <img src="assets/images/resources/sec-title-icon1.png" alt="" />
          </div>
          <span className="sec-title__tagline">What we’re doing</span>

          <h2 className="sec-title__title">Our Products</h2>
        </div>

        {/* Tabs */}
        <div className="text-center" style={{ marginBottom: "30px" }}>
          <button
            className={`btn m-2 ${
              activeTab === "RICHLITE" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setActiveTab("RICHLITE")}
          >
            RICHLITE
          </button>
          <button
            className={`btn m-2 ${
              activeTab === "CRUNCHY KRAZE" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setActiveTab("CRUNCHY KRAZE")}
          >
            CRUNCHY KRAZE
          </button>
          <button
            className={`btn m-2 ${
              activeTab === "FUNTREATE" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setActiveTab("FUNTREATE")}
          >
            FUNTREATE
          </button>
        </div>

        {/* Filtered Products */}
        <div className="row">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-6 col-md-6 d-flex"
              data-wow-delay="0ms"
              data-wow-duration="1000ms"
            >
              <div
                className="services-one__single w-100 d-flex flex-column justify-content-between"
                style={{ minHeight: "200px" }}
              >
                <div
                  className="services-one__single-img d-flex justify-content-center align-items-center"
                  style={{ height: "180px" }}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "140px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="services-one__single-img-icon text-center mt-2">
                  <span className="icon-agriculture"></span>
                </div>
                <div className="services-one__single-content text-center mt-auto">
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

export default BrandAndProduct;
