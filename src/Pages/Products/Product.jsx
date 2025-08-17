import { useEffect, useState } from "react";
import image6 from "../../assets/image/Product/Creamlite.jpg";
import image7 from "../../assets/image/Product/Creamrich.jpg";
import image8 from "../../assets/image/Product/FrenchMarine.jpg";
import Toppage from "../../Components/Toppage";
import useWebsiteSettings from "../../Store/useWebsiteSettings";

function Product() {
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
    <>
      <Toppage Tital="Product" />
      <section className="shop-one">
        <div className="container">
          <div className="text-center mb-4">
            <div className="text-center mb-4">
              {brands.map((cat) => (
                <button
                  key={cat.name}
                  className={`btn m-2 ${
                    activeTab === cat.name
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setActiveTab(cat.name)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="col-lg-12">
            <div className="row">
              {filteredProducts.map((product, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div className="shop-one__item">
                    <div className="shop-one__image">
                      <img src={product.imageUrl} alt={product.name} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
