// import React, { useState } from "react";
// import Toppage from "../../Components/Toppage";
// import BoardCarousel from "./BoardCarousel";
// const faqs = [
//   {
//     question: "Company Provides a Full Range of Services?",
//     answer:
//       "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl. Lorem ipsum is simply free text available in the market adipisi cing elit.",
//   },
//   {
//     question: "Home Improvement Works are Expensive?",
//     answer:
//       "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl. Lorem ipsum is simply free text available in the market adipisi cing elit.",
//   },
//   {
//     question: "Another Question Example?",
//     answer:
//       "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl. Lorem ipsum is simply free text available in the market adipisi cing elit.",
//   },
// ];
// function Financial() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };
//   const [activeTab, setActiveTab] = useState("Financials");
//   const [selectedDocType, setSelectedDocType] = useState("Financial Results");
//   const [selectedYear, setSelectedYear] = useState("2024-2025");
//   const [selectedQuarter, setSelectedQuarter] = useState("Q1");

//   const tabs = [
//     "Financials",
//     "Corporate Governance",
//     "Shareholders Information",
//   ];
//   const years = ["2024-2025", "2023-2024", "2022-2023"];
//   const quarters = ["Q1", "Q2", "Q3", "Q4"];

//   const documents = [
//     {
//       title: "FY25 Q1 Financial Report",
//       type: "pdf",
//       docType: "Financial Results",
//       year: "2024-2025",
//       quarter: "Q1",
//     },
//     {
//       title: "FY25 Q2 Financial Report",
//       type: "pdf",
//       docType: "Financial Results",
//       year: "2024-2025",
//       quarter: "Q2",
//     },
//     {
//       title: "FY25 Investor Presentation",
//       type: "pdf",
//       docType: "Investor Presentation",
//       year: "2024-2025",
//       quarter: "Q1",
//     },
//     {
//       title: "FY25 Annual Report",
//       type: "pdf",
//       docType: "Annual Report",
//       year: "2024-2025",
//     },
//     {
//       title: "FY25 Subsidiary Report A",
//       type: "pdf",
//       docType: "Annual Report Subsidiaries",
//       year: "2024-2025",
//     },
//   ];

//   const visibleDocuments = documents.filter((doc) => {
//     const isTypeMatch = doc.docType === selectedDocType;
//     const isYearMatch = doc.year === selectedYear;
//     const needsQuarter = "quarter" in doc;
//     const isQuarterMatch = !needsQuarter || doc.quarter === selectedQuarter;

//     return isTypeMatch && isYearMatch && isQuarterMatch;
//   });

//   const shouldShowQuarter = documents.some(
//     (doc) => doc.docType === selectedDocType && "quarter" in doc
//   );
//   return (
//     <>
//       <Toppage />
//       <section className="shop-one pt-5 ">
//         <div className="container text-center">
//           {/* Tabs */}
//           <div className="row mb-5">
//             {tabs.map((tab, index) => (
//               <div className="col-12 col-sm-6 col-md-4 " key={index}>
//                 <button
//                   className={`btn btn-lg w-100 fw-bold fs-6 ${
//                     activeTab === tab
//                       ? "btn-warning text-white"
//                       : "btn-secondary"
//                   }`}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab}
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Financials Section */}
//           {activeTab === "Financials" && (
//             <>
//               <h3 className="text-start mb-4 pt-2">Financial Documents</h3>

//               <div className="row mb-5">
//                 <div className="col-12 col-sm-6 col-md-4 mb-3">
//                   <select
//                     className="form-select form-select-lg w-100 fs-6"
//                     value={selectedDocType}
//                     onChange={(e) => setSelectedDocType(e.target.value)}
//                   >
//                     <option>Financial Results</option>
//                     <option>Annual Report</option>
//                     <option>Annual Report Subsidiaries</option>
//                     <option>Investor Presentation</option>
//                   </select>
//                 </div>

//                 <div className="col-12 col-sm-6 col-md-4 mb-3">
//                   <select
//                     className="form-select form-select-lg w-100 fs-6"
//                     value={selectedYear}
//                     onChange={(e) => setSelectedYear(e.target.value)}
//                   >
//                     {years.map((year) => (
//                       <option key={year}>{year}</option>
//                     ))}
//                   </select>
//                 </div>

//                 {shouldShowQuarter && (
//                   <div className="col-12 col-sm-6 col-md-4 mb-3">
//                     <select
//                       className="form-select form-select-lg w-100 fs-6"
//                       value={selectedQuarter}
//                       onChange={(e) => setSelectedQuarter(e.target.value)}
//                     >
//                       {quarters.map((q) => (
//                         <option key={q}>{q}</option>
//                       ))}
//                     </select>
//                   </div>
//                 )}
//               </div>

//               <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
//                 {visibleDocuments.length === 0 ? (
//                   <div className="text-muted fs-6">
//                     No documents available for this selection.
//                   </div>
//                 ) : (
//                   visibleDocuments.map((doc, index) => (
//                     <div className="col mb-4" key={index}>
//                       <div
//                         className="d-flex align-items-center border-bottom pb-3 fs-6"
//                         style={{ minHeight: "100px" }}
//                       >
//                         <span className="me-3 fs-3">
//                           {doc.type === "pdf" ? (
//                             <i className="fas fa-file-pdf text-danger"></i>
//                           ) : (
//                             <i className="fas fa-volume-up text-primary"></i>
//                           )}
//                         </span>
//                         <span>{doc.title}</span>
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </>
//           )}

//           {/* Corporate Governance Section */}
//           {activeTab === "Corporate Governance" && (
//             <div className="text-start">
//               <h3 className="mb-4 pt-2">Corporate Governance</h3>

//               <div className="mb-4 col-7">
//                 <select className="form-select w-50">
//                   <option>Board of Directors & Committees</option>
//                   <option>Policies</option>
//                   <option>Code of Conduct</option>
//                 </select>
//               </div>

//               <h4 className="mb-4">BOARD OF DIRECTORS</h4>
//               <BoardCarousel />

//               <h4 className="mt-5 mb-3">COMMITTEES</h4>
//               <div className="faq-one__accordions faq-one__accordions--services-details">
//                 <div className="accrodion-grp faq-one-accrodion">
//                   {faqs.map((faq, index) => (
//                     <div
//                       key={index}
//                       className={`accrodion ${
//                         activeIndex === index ? "active" : ""
//                       }`}
//                     >
//                       <div
//                         className="accrodion-title"
//                         onClick={() => toggleAccordion(index)}
//                         style={{ cursor: "pointer" }}
//                       >
//                         <h4>{faq.question}</h4>
//                       </div>
//                       <div
//                         className="accrodion-content"
//                         style={{
//                           display: activeIndex === index ? "block" : "none",
//                         }}
//                       >
//                         <div className="inner">
//                           <p>{faq.answer}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === "Shareholders Information" && (
//             <div className="text-start">
//               <h3 className="mb-4 pt-2">Shareholders Information</h3>
//               <p>
//                 This section provides notices, AGM details, shareholder contact
//                 info, and other resources.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }

// export default Financial;
