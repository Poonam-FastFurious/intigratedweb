/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Toppage from "../../Components/Toppage";
import InvestorTabs from "./InvestorTabs";
import axios from "axios";
import { Baseurl } from "../../Config";
import { Link, useLocation, useNavigate } from "react-router-dom";

function ShareholdersPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedDocType, setSelectedDocType] = useState("agm-transcript");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedQuarter, setSelectedQuarter] = useState("Q1");
  const [documents, setDocuments] = useState([]);
  const [years, setYears] = useState([]);

  const quarters = ["Q1", "Q2", "Q3", "Q4"];

  const documentTypes = [
    { value: "agm-transcript", label: "Annual General Meeting Transcript" },
    { value: "annual-return", label: "Annual Return" },
    { value: "credit-rating", label: "Credit Rating" },
    {
      value: "dematerialisation-of-shares",
      label: "Dematerialisation of Shares",
    },
    {
      value: "clause-305-of-lodr",
      label: "Disclosure under Regulation 30(5) of SEBI LODR",
    },
    {
      value: "clause-46-of-lodr",
      label: "Disclosures under Regulation 46 of the LODR",
    },
    { value: "unclaimed-dividend", label: "Dividend and Shares" },
    { value: "kyc-forms", label: "KYC Forms" },
    { value: "listing", label: "Listing" },
    { value: "nomination-facility", label: "Nomination Facility" },
    { value: "notices", label: "Notices" },
    { value: "online-dispute-resolution", label: "Online Dispute Resolution" },
    {
      value: "registrar-share-transfer-agents",
      label: "Registrar & Share Transfer Agents",
    },
    { value: "scheme-of-arrangement", label: "Scheme of Arrangement" },
    {
      value: "secretarial-compliance-report",
      label: "Secretarial Compliance Report",
    },
    { value: "shareHolding-pattern", label: "Share Holding Pattern" },
    { value: "share-transfer-system", label: "Share Transfer System" },
    { value: "shareholding-service", label: "Shareholder Services" },
    { value: "survey-form", label: "Shareholder Survey Form" },
    { value: "stock-exchange-filings", label: "Stock Exchange Filings" },
    {
      value: "tds-instructions",
      label: "TDS Instructions on Dividend Distribution",
    },
  ];

  // 🟢 When URL changes, update selectedDocType
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const typeFromUrl = params.get("type");
    if (typeFromUrl && documentTypes.some((d) => d.value === typeFromUrl)) {
      setSelectedDocType(typeFromUrl);
    }
  }, [location.search]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const res = await axios.get(Baseurl + "shareholders");
        const docs = res.data.documents || [];
        setDocuments(docs);

        const yearSet = new Set(
          docs
            .map((doc) => doc.year)
            .filter((year) => year && year.trim() !== "")
        );

        const uniqueYears = Array.from(yearSet).sort().reverse();
        setYears(uniqueYears);

        if (uniqueYears.length > 0 && !selectedYear) {
          setSelectedYear(uniqueYears[0]);
        }
      } catch (err) {
        console.error("Failed to fetch documents", err);
      }
    };

    fetchDocuments();
  }, [selectedYear]);

  const shouldShowYear = documents.some(
    (doc) => doc.documentType === selectedDocType && doc.year
  );

  const shouldShowQuarter = documents.some(
    (doc) => doc.documentType === selectedDocType && doc.quarter
  );

  const visibleDocuments = documents.filter((doc) => {
    if (doc.documentType !== selectedDocType) return false;

    const isYearMatch = !shouldShowYear || doc.year === selectedYear;
    const isQuarterMatch =
      !shouldShowQuarter || doc.quarter === selectedQuarter;

    return isYearMatch && isQuarterMatch;
  });

  const static46LodrLinks = [
    {
      title: "Details of business",
      url: "/corporate-governance?tab=Overview",
    },
    {
      title: "Composition of various committees of board of directors",
      url: "/corporate-governance?tab=board-of-directors",
    },
    {
      title:
        "The email address for grievance redressal and other relevant details",
      url: "/investor?p=investor-contact",
    },
    {
      title:
        "Contact information of the designated officials of the listed entity who are responsible for assisting and handling investor grievances",
      url: "/investor?p=investor-contact",
    },
    {
      title: "Financial information including",
      url: "/investor/financials?tab=Financial+Results",
    },
    {
      title: "Shareholding pattern",
      url: "/shareholders-information?type=agm-transcript",
    },
    {
      title:
        "Items in sub-regulation (1) of regulation 47 (Newspaper Publication of financial results, notices given to shareholders by advertisement)",
      url: "/shareholders-information?type=stock-exchange-filings",
    },
    {
      title:
        "All credit ratings obtained by the entity for all its outstanding instruments",
      url: "/shareholders-information?type=credit-rating",
    },
    {
      title:
        "Separate audited financial statements of each subsidiary of the listed entity",
      url: "/investor/financials?tab=Financial+Results",
    },
    {
      title:
        "Secretarial compliance report under Regulation 24A of SEBI (LODR) Regulations",
      url: "/shareholders-information?type=stock-exchange-filings",
    },
    {
      title:
        "Disclosure of contact details of key managerial personnel under Regulation 30(5)",
      url: "/shareholders-information?type=secretarial-compliance-report",
    },
    {
      title: "Disclosures under Regulation 30(8) of SEBI (LODR) Regulations",
      url: "/shareholders-information?type=stock-exchange-filings",
    },
    {
      title:
        "Statements of deviation(s) or variation(s) as specified in Regulation 32",
      url: "#",
    },
    {
      title: "Annual return under section 92 of the Companies Act, 2013",
      url: "/shareholders-information?type=annual-return",
    },
    {
      title:
        "Brief profile of board of directors including directorship and full-time positions",
      url: "/corporate-governance?tab=board-of-directors",
    },
  ];

  const lodrApiPdfs = visibleDocuments.filter(
    (doc) =>
      doc.documentType === "clause-46-of-lodr" &&
      doc.fileType &&
      doc.fileType.includes("pdf")
  );

  return (
    <>
      <Toppage Tital="Shareholders Information" />
      <InvestorTabs />
      <div className="container">
        <h3 className="text-start mb-4 pt-2">Financial Documents</h3>

        <div className="row mb-5">
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <select
              className="form-select form-select-lg w-100 fs-6"
              value={selectedDocType}
              onChange={(e) => {
                const newType = e.target.value;
                setSelectedDocType(newType);
                const params = new URLSearchParams(location.search);
                params.set("type", newType);
                navigate({ search: params.toString() });
              }}
            >
              {documentTypes.map((type) => (
                <option value={type.value} key={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {shouldShowYear && (
            <div className="col-12 col-sm-6 col-md-4 mb-3">
              <select
                className="form-select form-select-lg w-100 fs-6"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          )}

          {shouldShowQuarter && (
            <div className="col-12 col-sm-6 col-md-4 mb-3">
              <select
                className="form-select form-select-lg w-100 fs-6"
                value={selectedQuarter}
                onChange={(e) => setSelectedQuarter(e.target.value)}
              >
                {quarters.map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {selectedDocType === "clause-46-of-lodr" ? (
          <>
            <h4 className="mb-3">
              Mandatory Information under Regulation 46 of Listing Regulations
            </h4>
            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="table-secondary">
                  <tr>
                    <th>Name</th>
                    <th className="text-center">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {static46LodrLinks.map((link, index) => (
                    <tr key={index}>
                      <td>{link.title}</td>
                      <td className="text-center">
                        <Link to={link.url} rel="noopener noreferrer">
                          <i className="fas fa-globe text-primary fs-5"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                  {lodrApiPdfs.map((doc) => (
                    <tr key={doc._id}>
                      <td>{doc.title}</td>
                      <td className="text-center">
                        <a
                          href={doc.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fas fa-file-pdf text-danger fs-5"></i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {visibleDocuments.length === 0 ? (
              <div className="text-muted fs-6">
                No documents available for this selection.
              </div>
            ) : (
              visibleDocuments.map((doc) => (
                <div className="col mb-4" key={doc._id}>
                  <a
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center border-bottom pb-3 fs-6"
                    style={{
                      minHeight: "100px",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <span className="me-3 fs-3">
                      {doc.fileType.includes("pdf") ? (
                        <i className="fas fa-file-pdf text-danger"></i>
                      ) : (
                        <i className="fas fa-volume-up text-primary"></i>
                      )}
                    </span>
                    <span>{doc.title}</span>
                  </a>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default ShareholdersPage;
