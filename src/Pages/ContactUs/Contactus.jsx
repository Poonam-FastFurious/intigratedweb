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

      <section className="contact-page__contact-info clearfix">
        <div className="auto-container">
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-page__contact-info-wrapper">
                <div className="contact-page__contact-info-title">
                  <h2>Get in Touch</h2>
                </div>

                <div className="contact-page__contact-info-list">
                  <ul>
                    <li>
                      <div className="icon">
                        <span className="icon-map"></span>
                      </div>
                      <div className="title">
                        <span>Visit Our Store</span>
                        <p>{contactAddress}</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-email-1"></span>
                      </div>
                      <div className="title">
                        <span>Send Email</span>
                        <p>
                          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon phone">
                        <span className="icon-phone-call-2"></span>
                      </div>
                      <div className="title">
                        <span>Call Anytime</span>
                        <p>
                          <a href={`tel:${contactPhone}`}>{contactPhone}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}

export default Contactus;
