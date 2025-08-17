import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BoardCarousel from "../Investor/BoardCarousel";
import Team from "../Home/Team";
import { Baseurl } from "../../Config";

function About() {
  const [activeTab, setActiveTab] = useState("About");
  const [boardMembers, setBoardMembers] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const res = await fetch(`${Baseurl}team`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to fetch members");

        const board = (data.members || [])
          .filter((m) => m.category === "Board" && m.isActive)
          .sort((a, b) => a.order - b.order);

        setBoardMembers(board);
         const teamOnly = (data.members || [])
          .filter((m) => m.category === "Team" && m.isActive)
          .sort((a, b) => a.order - b.order);

        setTeamMembers(teamOnly);
      } catch (err) {
        console.error("Error loading board members:", err.message);
      }
    };

    fetchBoard();
  }, []);
  const contentData = {
    About: {
      title: "About Us",
      text1:
        "Incorporation in 1995, M/S Integrated Industries Limited (ITL) is Presently Engaged in Business of Organic & Inorganic Foods Products, Bakery Products and other Processed Foods Items.",
      text2: `The Company has Successfully acquired a Running Biscuit Manufacturing Plant with a Capacity of 3400 Metric Tons Per Annum at Neemrana, Rajasthan in its 100% Wholly Owned Subsidiary M/S Nurture Well Food Private Limited.

M/S Nurture Well Food Private Limited Manufactures Biscuits & Cookies Under the Brand Name RICHLITE, FUNTREAT and CANBERRA at the State-of-the-art Production Facilities in Neemrana Rajasthan.

RICHLITE Biscuits and Cookies are Available at All Major Retail Outlets in Neighborhoods across North India. The Distribution Network of Richfield is Supported by Large Number of Super Stockiest and Distributors Who Share the Brand’s Ethos and are Brand Ambassadors for RICHLITE.

We have a Strong Network of 150+ Business Partner through them we Distribute Our Product in The Complete North Indian Marker Covering J&K, Himachal, Punjab, Rajasthan, Uttrakhand, Delhi NCR and Uttar Pradesh. Along with Domestic Market Our Product has Extremely Good Acceptability in Overseas Market Such as UAE, Somalia, Tanzania, Kuwait, Afghanistan, Congo, Kenya, Rwanda & Seychelles..`,
    },
    Vision: {
      title: "Our Vision",
      text1:
        "To be a globally recognized food company, bringing delight to every home with our trusted, high-quality products.",
      text2: "",
    },
    Mission: {
      title: "Our Mission",
      text1:
        "Delivering nutritious, safe, and innovative food products that satisfy our customers while upholding sustainability and excellence.",
      text2: "",
    },
    Values: {
      title: "Our Values",
      text1:
        "Integrity, customer satisfaction, quality, innovation, and sustainability drive our every decision and product.",
      text2: "",
    },
    Board: {
      title: "Board of Directors",
      text1:
        "Our board comprises seasoned professionals who bring experience, vision, and governance to ensure steady growth.",
      text2: "",
    },
    Management: {
      title: "Management Team",
      text1:
        "Our management team is dedicated to operational excellence, continuous improvement, and empowering our workforce.",
      text2: "",
    },
  };

  const current = contentData[activeTab];

  return (
    <>
      <section
        className="page-header clearfix"
        style={{
          backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="page-header__inner text-center clearfix">
            <ul className="thm-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>About</li>
            </ul>
            <h2>{current.title}</h2>
          </div>
        </div>
      </section>

      <section className="services-details">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="services-details__sidebar">
                <div className="services-details__sidebar-single">
                  <div className="services-details__sidebar-single-services">
                    <ul>
                      {Object.keys(contentData).map((key) => (
                        <li
                          key={key}
                          className={activeTab === key ? "current" : ""}
                          onClick={() => setActiveTab(key)}
                        >
                          <Link to="#">{contentData[key].title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="services-details__sidebar-single">
                  <div
                    className="services-details__sidebar-single-contact-box text-center"
                    style={{
                      backgroundImage:
                        "url(assets/images/resources/services-details-contact-box-bg.jpg)",
                    }}
                  >
                    <div className="icon">
                      <span className="icon-phone-call-2"></span>
                    </div>
                    <div className="title">
                      <h2>We’re Selling, Premium Quality Biscuits & Cookies</h2>
                    </div>
                    <p className="phone">
                      <a href="tel:+91-9811060171">+91-9811060171</a>
                    </p>
                    <p>Call Us Anytime</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-xl-8 col-lg-8">
              <div className="services-details__content">
                <h2 className="services-details__content-title">
                  {current.title}
                </h2>
                <p className="services-details__content-text1">
                  {current.text1}
                </p>
                {current.text2 && (
                  <p className="services-details__content-text2">
                    {current.text2}
                  </p>
                )}

                {/* Show Board Carousel only for Board tab */}
                {activeTab === "Board" && (
                  <div className="mt-4">
                    <div class="row">
                      {boardMembers.map((member, index) => (
                        <div
                          key={member._id}
                          className={`col-xl-4 col-lg-6 wow fadeInUp`}
                          data-wow-delay={`${(index % 4) * 100}ms`}
                          data-wow-duration="1000ms"
                        >
                          <div className="meet-farmers-one__single">
                            <div className="meet-farmers-one__single-img">
                              <img src={member.imageUrl} alt={member.name} />
                            </div>
                            <div className="meet-farmers-one__single-title text-center">
                              <p>{member.designation}</p>
                              <h2>
                                <a href="#">{member.name}</a>
                              </h2>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                 {activeTab === "Management" && (
                  <div className="mt-4">
                    <div class="row">
                      {teamMembers.map((member, index) => (
                        <div
                          key={member._id}
                          className={`col-xl-4 col-lg-6 wow fadeInUp`}
                          data-wow-delay={`${(index % 4) * 100}ms`}
                          data-wow-duration="1000ms"
                        >
                          <div className="meet-farmers-one__single">
                            <div className="meet-farmers-one__single-img">
                              <img src={member.imageUrl} alt={member.name} />
                            </div>
                            <div className="meet-farmers-one__single-title text-center">
                              <p>{member.designation}</p>
                              <h2>
                                <a href="#">{member.name}</a>
                              </h2>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
