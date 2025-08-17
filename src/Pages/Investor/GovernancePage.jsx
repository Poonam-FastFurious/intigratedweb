/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Toppage from "../../Components/Toppage";
import BoardCarousel from "./BoardCarousel";
import InvestorTabs from "./InvestorTabs";
import axios from "axios";
import { Baseurl } from "../../Config";
import { useLocation, useNavigate } from "react-router-dom";

function GovernancePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  const tabParam = query.get("tab") || "Overview"; // fallback to Overview

  const [selectedOption, setSelectedOption] = useState(tabParam);
  const [documents, setDocuments] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedQuarter, setSelectedQuarter] = useState("");

  // ⚡ Sync selectedOption when URL changes (e.g., back/forward buttons)
  useEffect(() => {
    if (tabParam !== selectedOption) {
      setSelectedOption(tabParam);
    }
  }, []);

  // ⚡ Sync URL when tab changes manually
  const handleTabChange = (value) => {
    setSelectedOption(value);
    navigate(`?tab=${value}`);
  };

  // 📄 Fetch documents once
  useEffect(() => {
    async function fetchDocuments() {
      try {
        const res = await axios.get(Baseurl + "corporate-governance");
        setDocuments(res.data.documents || []);
      } catch (err) {
        console.error("Failed to fetch documents", err);
      }
    }
    fetchDocuments();
  }, []);

  return (
    <>
      <Toppage Tital="Corporate Governance" />
      <InvestorTabs />
      <div className="container">
        <div className="text-start">
          <h3 className="mb-4 pt-2">Corporate Governance</h3>

          <div className="mb-4 col-9">
            <div className="d-flex gap-3">
              <select
                className="form-select w-50"
                value={selectedOption}
                onChange={(e) => handleTabChange(e.target.value)}
              >
                <option value="Overview">Overview</option>
                <option value="board-of-directors">
                  Board of Directors & Committees
                </option>
                <option value="Policy">Policy</option>
                <option value="corporate-governance-report">
                  Corporate Governance Report
                </option>
              </select>

              {selectedOption === "corporate-governance-report" && (
                <>
                  <select
                    className="form-select w-50"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    <option value="">All Years</option>
                    {Array.from(
                      new Set(
                        documents
                          .filter(
                            (d) =>
                              d.documentType === "Corporate Governance Report"
                          )
                          .map((d) => d.year)
                          .filter(Boolean)
                      )
                    ).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>

                  <select
                    className="form-select w-50"
                    value={selectedQuarter}
                    onChange={(e) => setSelectedQuarter(e.target.value)}
                  >
                    <option value="">All Quarters</option>
                    {Array.from(
                      new Set(
                        documents
                          .filter(
                            (d) =>
                              d.documentType === "Corporate Governance Report"
                          )
                          .map((d) => d.quarter)
                          .filter(Boolean)
                      )
                    ).map((quarter) => (
                      <option key={quarter} value={quarter}>
                        {quarter}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </div>
          </div>

          {/* Board of Directors */}
          {selectedOption === "board-of-directors" && (
            <>
              <h4 className="mb-4">BOARD OF DIRECTORS</h4>
              <BoardCarousel />
            </>
          )}

          {/* Overview */}
          {selectedOption === "Overview" && (
            <div className="overview-section fs-6">
              <p>
                The Company is of the belief that sound Corporate Governance is
                vital to enhance and retain stakeholders' trust...
              </p>
              <p>
                The Company is in compliance with the requirements of the
                guidelines on Corporate Governance...
              </p>
              <p>
                Triveni has carved out the following committees of its Board of
                Directors for institutionalizing compliance...
              </p>

              <div className="row text-start pt-3">
                {[
                  {
                    title: "Audit Committee",
                    icon: "https://www.trivenigroup.com/storage/images/overview-cg-img1.webp",
                  },
                  {
                    title: "Stakeholders Relationship Committee",
                    icon: "https://www.trivenigroup.com/storage/images/Stakeholders-Relationship-Committee.webp",
                  },
                  {
                    title: "Nomination and Remuneration Committee",
                    icon: "https://www.trivenigroup.com/storage/images/overview-cg-img3.webp",
                  },
                  {
                    title: "Corporate Social Responsibility Committee",
                    icon: "https://www.trivenigroup.com/storage/images/Corporate-Social-Responsibility-Committee.webp",
                  },
                  {
                    title: "Risk Management Committee",
                    icon: "https://www.trivenigroup.com/storage/images/Risk%20Management%20Committee.webp",
                  },
                ].map((item, index) => (
                  <div className="col-md-2 col-6 mb-4" key={index}>
                    <div className="mb-2" style={{ fontSize: "2rem" }}>
                      <img src={item.icon} alt="" />
                    </div>
                    <p style={{ fontWeight: 500 }}>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Policy */}
          {selectedOption === "Policy" && (
            <div className="policy-grid">
              <div className="row">
                {documents
                  .filter((doc) => doc.documentType === "Policy")
                  .map((item, index) => (
                    <div className="col my-4" key={index}>
                      <div
                        className="d-flex align-items-start border-bottom pt-3 fs-6"
                        style={{ minHeight: "100px" }}
                      >
                        <span className="me-3 fs-3">
                          <i className="fas fa-file-pdf text-danger"></i>
                        </span>
                        <span className="text-start fs-6">{item.title}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Corporate Governance Report */}
          {selectedOption === "corporate-governance-report" && (
            <div className="policy-grid">
              <div className="row">
                {documents
                  .filter(
                    (doc) => doc.documentType === "Corporate Governance Report"
                  )
                  .filter((doc) =>
                    selectedYear ? doc.year === selectedYear : true
                  )
                  .filter((doc) =>
                    selectedQuarter ? doc.quarter === selectedQuarter : true
                  )
                  .map((doc) => (
                    <div className="col my-4" key={doc._id}>
                      <a
                        href={doc.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark"
                      >
                        <div
                          className="d-flex align-items-start border-bottom pt-3 fs-6"
                          style={{ minHeight: "100px" }}
                        >
                          <span className="me-3 fs-3">
                            <i className="fas fa-file-pdf text-danger"></i>
                          </span>
                          <span className="text-start fs-6">{doc.title}</span>
                        </div>
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default GovernancePage;
