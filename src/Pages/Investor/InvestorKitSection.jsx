import React from "react";
import { FaDownload, FaPrint, FaHeadphones } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";

const investorItems = [
  {
    title: "ANNUAL REPORT",
    subtitle: "FY 24",
    image:
      "https://www.trivenigroup.com/storage/3/images/triveni-annual-report-2023-24-investor-kit-des.webp",
    icons: [<FaDownload />, <FaPrint />, <BsFillBriefcaseFill />],
  },
  {
    title: "INVESTOR BRIEF",
    subtitle: "Q4 FY 25",
    image:
      "https://www.trivenigroup.com/storage/3/images/Investor-Brief-FY-2021-des.webp",
    icons: [<FaDownload />, <FaPrint />, <BsFillBriefcaseFill />],
  },
  {
    title: "FINANCIAL RESULTS",
    subtitle: "Q4 FY 25",
    image:
      "https://www.trivenigroup.com/storage/3/images/Corporate-Presentation-new-des.webp",
    icons: [<FaDownload />, <FaPrint />],
  },
  {
    title: "INVESTOR PRESENTATION",
    subtitle: "Q4 FY 25",
    image:
      "https://www.trivenigroup.com/storage/3/images/investor-kit-session-img-des.webp",
    icons: [<FaDownload />, <FaPrint />],
  },
  {
    title: "EARNINGS CALL TRANSCRIPT",
    subtitle: "Q4 FY 25",
    image: "https://www.trivenigroup.com/images/unnamed_transcri[t-des.webp",
    icons: [<FaDownload />, <FaPrint />],
  },
  {
    title: "Audio Recording of the Earnings Conference Call",
    subtitle: "Q4 FY 25",
    image: "https://www.trivenigroup.com/images/earning-cell-q2fy22-des.webp",
    icons: [<FaHeadphones />],
  },
];

const InvestorKitSection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="fw-bold mb-4">INVESTOR KIT</h2>
        <div className="row">
          {investorItems.map((item, index) => (
            <div className="col-md-4 col-lg-2 mb-4" key={index}>
              <div className="border h-100 d-flex flex-column justify-content-between">
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                    style={{
                      height: "180px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="p-3">
                    <h6 className="fw-bold mb-1">{item.title}</h6>
                    <small className="text-muted">{item.subtitle}</small>
                    <div className="d-flex gap-2 mt-3">
                      {item.icons.map((icon, i) => (
                        <span key={i} style={{ fontSize: "1.1rem" }}>
                          {icon}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <button className="btn btn-outline-warning w-100">
                    PREVIOUS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3">
          For Earlier Periods <a href="#">View more</a>
        </p>
      </div>
    </section>
  );
};

export default InvestorKitSection;
