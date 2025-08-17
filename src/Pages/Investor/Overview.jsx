import React from "react";

const OverviewSection = () => {
  return (
    <section
      className="d-flex align-items-center"
      style={{
        backgroundImage: `url('https://www.trivenigroup.com/storage/banners/investor-image.webp')`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "80px 0",
        color: "#000", // Or white if your image is dark
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-10">
            <h2 className="fw-bold mb-3">OVERVIEW</h2>
            <p className="mb-3">
              Our strategy is designed to balance business profitability with
              inclusive growth across the stakeholder matrix. Our stakeholders
              include{" "}
              <strong>
                customers, farmer associates, employees, partners, vendors,
                investors, shareholders, and the local communities
              </strong>
              . We remain focused on delivering value, not just in the short and
              medium term but also in the long term, to all of them.
            </p>
            <p>
              <strong>Sustainability and ethics</strong> are key to this
              approach. They underpin all our policies spanning integrity,
              transparency, efficiency, innovation, technology, quality, design,
              manufacturing excellence, and risk management. Cumulatively, these
              strengths will continue to steer our value-accretive journey in
              the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
