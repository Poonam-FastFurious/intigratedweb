import React from "react";

const contactLinks = [
  {
    title: "FINANCIALS",
    img: "https://www.trivenigroup.com/storage/3/images/financial.webp",
  },
  {
    title: "CORPORATE GOVERNANCE",
    img: "https://www.trivenigroup.com/storage/3/images/corpote-governace.webp",
  },
  {
    title: "SHAREHOLDERS INFORMATION",
    img: "https://www.trivenigroup.com/storage/3/images/shareholder-information.webp",
  },
];

function InvestorContact() {
  return (
    <>
      {/* Top Contact Links */}
      <section className="py-4 bg-white">
        <div className="container">
          <div className="row justify-content-center text-center">
            {contactLinks.map((link, i) => (
              <div key={i} className="col-12 col-md-4 mb-3">
                <a
                  href="#"
                  className="d-block p-4 shadow-sm rounded text-decoration-none border h-100"
                  style={{ backgroundColor: "#fff", transition: "0.3s" }}
                >
                  <img
                    src={link.img}
                    alt={link.title}
                    style={{ height: "40px", marginBottom: "10px" }}
                  />
                  <h6 className="fw-bold text-dark">{link.title}</h6>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">INVESTOR CONTACT</h2>

          <p>
            <strong>
              For queries related to Investor Relations, please contact:
            </strong>
          </p>
          <p className="mb-1 fw-bold">Himanshu Sharma</p>
          <p>
            Head - Investor Relations and Value Creation
            <br />
            <a href="tel:+911204308000">+91 - 120 - 4308000</a>
            <br />
            <a href="mailto:ir@trivenigroup.com">ir@intigrated.com</a>
          </p>

          <p className="mt-4 fw-bold">
            Investors can get their share/dividend related grievances redressed
            at the following address:-
          </p>

          <div className="row">
            {/* Corporate Office */}
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Corporate Office of the Company</h5>
              <p className="mb-1 fw-bold">Geeta Bhalla</p>
              <p>
                Group Vice President and Company Secretary
                <br />
                8th Floor, Express Trade Towers,
                <br />
                Plot No. 15 & 16, Sector 16-A,
                <br />
                Noida - 201301 India.
                <br />
                <a href="tel:+911204308000">+91 - 120 - 4308000</a>
                <br />
                <a href="tel:+911204311010">+91 - 120 - 4311010</a>
                <br />
                <a href="mailto:shares@investore.com">shares@investore.com</a>
              </p>
            </div>

            {/* Registrar Office */}
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Registrar and Transfer Agent</h5>
              <p className="mb-1 fw-bold">C Shobha Anand (Dy. Vice President)</p>
              <p>
                KFin Technologies Limited
                <br />
                Unit: Triveni Engineering & Industries Ltd.
                <br />
                Selenium Building, Tower B, Plot No 31 & 32,
                <br />
                Financial District, Nanakramguda,
                <br />
                Serilingampally, Hyderabad, Telangana - 500032
                
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InvestorContact;
