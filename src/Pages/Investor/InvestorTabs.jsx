import { NavLink } from "react-router-dom";

function InvestorTabs() {
  return (
    <div className="container mt-4">
      <div className="row mb-5 text-center">
        <div className="col-md-4 mb-2">
          <NavLink
            to="/investor/financials?tab=Financial+Results"
            className={({ isActive }) =>
              `btn btn-lg w-100 fw-bold fs-6 ${
                isActive ? "btn-warning text-white" : "btn-secondary"
              }`
            }
          >
            Financials
          </NavLink>
        </div>
        <div className="col-md-4 mb-2">
          <NavLink
            to="/corporate-governance"
            className={({ isActive }) =>
              `btn btn-lg w-100 fw-bold fs-6 ${
                isActive ? "btn-warning text-white" : "btn-secondary"
              }`
            }
          >
            Corporate Governance
          </NavLink>
        </div>
        <div className="col-md-4 mb-2">
          <NavLink
            to="/shareholders-information"
            className={({ isActive }) =>
              `btn btn-lg w-100 fw-bold fs-6 ${
                isActive ? "btn-warning text-white" : "btn-secondary"
              }`
            }
          >
            Shareholders Information
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default InvestorTabs;
