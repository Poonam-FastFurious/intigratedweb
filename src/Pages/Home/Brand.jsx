import image6 from "../../assets/RICHLITE 3D/6.png";
import image7 from "../../assets/RICHLITE 3D/butter.png";
import image8 from "../../assets/RICHLITE 3D/8.png";
function Brand() {
  return (
    <>
      <section className="services-one services-one--has-top-b">
        <div className="container">
          <div className="sec-title text-center">
            <h2 className="sec-title__title">Our Brand</h2>
          </div>
          <div className="row">
            {[{ img: image6, name: "RICHLITE" }, { img: image7, name: "FUNTREATE" }, { img: image8, name: "CRUNCHY KRAZE" }].map((brand, index) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-4 ">
                <div className="services-one__single text-center">
                  <div className="services-one__single-img">
                    <div className="services-one__single-img-inner d-flex justify-content-center align-items-center" style={{ height: "250px" }}>
                      <img
                        src={brand.img}
                        alt={brand.name}
                        style={{ width: "200px", height: "200px", objectFit: "contain" }}
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
        </div>
      </section>
    </>
  );
}


export default Brand;
