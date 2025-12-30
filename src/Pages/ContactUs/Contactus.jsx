/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { Baseurl } from "../../Config";
import toast from "react-hot-toast";
import useWebsiteSettings from "../../Store/useWebsiteSettings";

function Contactus() {
  const { settings } = useWebsiteSettings();
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(Baseurl + "website/sendform", form);

      if (response.data.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", number: "", message: "" });
      } else {
        toast.error(response.data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Something went wrong. Please try again later.");
    }

    setLoading(false);
  };

  const contactAddress =
    settings?.contactAddress || "123 Main Street, City, Country";
  const contactEmail = settings?.contactEmail || "email@example.com";
  const contactPhone = settings?.contactPhone || "N/A";
  const socialLinks = settings?.socialLinks || {};

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
              <li>Contact</li>
            </ul>
            <h2>Contactus</h2>
          </div>
        </div>
      </section>

      <section className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="contact-page__left">
                <div className="sec-title">
                  <div className="icon">
                    <img
                      src="assets/images/resources/sec-title-icon1.png"
                      alt=""
                    />
                  </div>
                  <span className="sec-title__tagline">Contact now</span>
                  <h2 className="sec-title__title">
                    Get in Touch <br /> with Us
                  </h2>
                </div>
                <p className="contact-page__left-text">
                  We are committed to providing our customers with exceptional
                  service while offering our employees the best training.
                </p>

                <div className="contact-page__social-link">
                  <ul>
                    {socialLinks.facebook && (
                      <li>
                        <a href={socialLinks.facebook} target="_blank">
                          <i className="fab fa-facebook"></i>
                        </a>
                      </li>
                    )}
                    {socialLinks.twitter && (
                      <li>
                        <a href={socialLinks.twitter} target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                    )}
                    {socialLinks.instagram && (
                      <li>
                        <a href={socialLinks.instagram} target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    )}
                    {socialLinks.linkedin && (
                      <li>
                        <a href={socialLinks.linkedin} target="_blank">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                    )}
                    {socialLinks.youtube && (
                      <li>
                        <a href={socialLinks.youtube} target="_blank">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form remains same */}
            <div className="col-xl-8 col-lg-8">
              <div className="contact-page__right">
                <form
                  onSubmit={handleSubmit}
                  className="comment-one__form contact-form-validated"
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Your name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="email"
                          placeholder="Email address"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Phone number"
                          name="number"
                          value={form.number}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          disabled
                          value="Contact Form" // fixed or ignore this
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="comment-form__input-box">
                        <textarea
                          name="message"
                          placeholder="Write message"
                          value={form.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="thm-btn comment-form__btn"
                      >
                        {loading ? "Sending..." : "Send a message"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-page__investor-info clearfix">
        <div className="container">
          <div className="row">
            {/* Investor Contact */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="contact-info-box h-100">
                <h4>Investor Contact</h4>
                <p>
                  <strong>Name:</strong> Priyanka
                </p>
                <p>
                  <strong>Designation:</strong> Head – Investor Relations
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:012046142002">0120-46142002</a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:cs.integrated25@gmail.com">
                    cs.integrated25@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Corporate Office */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="contact-info-box h-100">
                <h4>Corporate Office</h4>
                <p>
                  Priyanka <br />
                  B-16, Second Floor-2, Sector-2 <br />
                  Noida – 201301, India
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+911204614300">+91 120 4614300</a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@integratedindustries.in">
                    info@integratedindustries.in
                  </a>
                </p>
              </div>
            </div>

            {/* Registrar & Transfer Agent */}
            <div className="col-xl-4 col-lg-4 col-md-12 mb-4">
              <div className="contact-info-box h-100">
                <h4>Registrar & Transfer Agent</h4>
                <p>
                  Skyline Financial Services Private Limited <br />
                  D-153 A, 1st Floor, Okhla Industrial Area <br />
                  Phase – I, New Delhi – 110020
                </p>
                <p>
                  <strong>Phone:</strong> 011-26812682, 26812683
                </p>
                <p>
                  <strong>Other Lines:</strong> 40450193 – 40450197
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactus;
