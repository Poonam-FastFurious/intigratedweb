import React, { useState } from "react";

const faqData = [
  {
    question: "Company Provides a Full Range of Services?",
    answer:
      "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl. Lorem ipsum is simply free text available in the market adipisi cing elit.",
  },
  {
    question: "Home Improvement Works are Expensive?",
    answer:
      "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl. Lorem ipsum is simply free text available in the market adipisi cing elit.",
  },
  {
    question: "Do you offer custom interior design plans?",
    answer:
      "Yes, our expert designers tailor solutions to your space and preferences for stunning, functional results.",
  },
  {
    question: "Are your services available globally?",
    answer:
      "We primarily serve India, but international consultations are available depending on the project scope.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-one faq-one__dark">
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-xl-6">
            <div className="faq-one__content">
              <div className="sec-title">
                <span className="sec-title__tagline">
                  Recently completed work
                </span>
                <h2 className="sec-title__title">How Can We Help?</h2>
              </div>
              <div className="faq-one__btn">
                <a href="#" className="thm-btn">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="col-xl-6">
            <div className="faq-one__accordions">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`accrodion ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <div
                    className="accrodion-title"
                    onClick={() => toggleAccordion(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <h4>{faq.question}</h4>
                  </div>
                  {activeIndex === index && (
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
