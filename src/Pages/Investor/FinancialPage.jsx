import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Toppage from "../../Components/Toppage";
import InvestorTabs from "./InvestorTabs";
import axios from "axios";
import { Baseurl } from "../../Config";

function FinancialPage() {
  const [documents, setDocuments] = useState([]);
  const [selectedDocType, setSelectedDocType] = useState("Financial Results");
  const [selectedYear, setSelectedYear] = useState("2024-2025");
  const [selectedQuarter, setSelectedQuarter] = useState("Q1");
  const [loading, setLoading] = useState(true);
  const [years, setYears] = useState([]);

  const quarters = ["Q1", "Q2", "Q3", "Q4"];
  const [searchParams, setSearchParams] = useSearchParams();

  // 🟢 Read tab from URL on mount and when URL changes
  useEffect(() => {
    const urlTab = searchParams.get("tab");
    if (urlTab) {
      setSelectedDocType(urlTab);
    }
  }, [searchParams]);

  // 🟢 Update URL when tab changes
  useEffect(() => {
    searchParams.set("tab", selectedDocType);
    setSearchParams(searchParams, { replace: true });
  }, [selectedDocType, searchParams, setSearchParams]);

  // Fetch documents from API
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const res = await axios.get(Baseurl + "finance");
        const apiDocs = res.data.documents || [];

        const formattedDocs = apiDocs.map((doc) => ({
          ...doc,
          type: doc.fileType === "application/pdf" ? "pdf" : "other",
          docType: doc.documentType,
        }));

        setDocuments(formattedDocs);

        const uniqueYears = Array.from(
          new Set(apiDocs.map((doc) => doc.year).filter(Boolean))
        ).sort((a, b) => b.localeCompare(a));

        setYears(uniqueYears);
      } catch (err) {
        console.error("Error fetching documents:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const visibleDocuments = documents.filter((doc) => {
    const isTypeMatch = doc.docType === selectedDocType;
    const isYearMatch = doc.year === selectedYear;
    const isQuarterMatch = !doc.quarter || doc.quarter === selectedQuarter;
    return isTypeMatch && isYearMatch && isQuarterMatch;
  });

  const shouldShowQuarter = documents.some(
    (doc) => doc.docType === selectedDocType && doc.quarter
  );

  return (
    <>
      <Toppage Tital="Financials" />
      <InvestorTabs />
      <section className="pt-5">
        <div className="container">
          <h3 className="text-start mb-4">Financial Documents</h3>

          {/* Filters */}
          <div className="row mb-4">
            <div className="col-md-4 mb-3">
              <select
                className="form-select"
                value={selectedDocType}
                onChange={(e) => setSelectedDocType(e.target.value)}
              >
                <option>Financial Results</option>
                <option>Annual Report</option>
                <option>Annual Report subsidiaries</option>
                <option>Investor Presentation</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <select
                className="form-select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {years.map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </select>
            </div>
            {shouldShowQuarter && (
              <div className="col-md-4 mb-3">
                <select
                  className="form-select"
                  value={selectedQuarter}
                  onChange={(e) => setSelectedQuarter(e.target.value)}
                >
                  {quarters.map((q) => (
                    <option key={q}>{q}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Document list */}
          <div className="row">
            {loading ? (
              <div>Loading...</div>
            ) : visibleDocuments.length === 0 ? (
              <div>No documents available.</div>
            ) : (
              visibleDocuments.map((doc, i) => (
                <div className="col-md-4 mb-3" key={doc._id || i}>
                  <div className="border-bottom p-3 h-100 d-flex align-items-center">
                    <i className="fas fa-file-pdf text-danger me-3 fs-6" />
                    <Link
                      to={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {doc.title}
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default FinancialPage;
