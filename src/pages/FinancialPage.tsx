import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopImage from "../components/TopImage";
import FinancialTab from "../components/FinancialTab";
import CreatedCategoryTab from "../components/CreatedCategoryTab";

const FinancialPage = () => {
  const [activeTab, setActiveTab] = useState<"financial" | "category">(
    "financial"
  );

  return (
    <>
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow-1 d-flex flex-column">
          <div className="d-flex justify-content-end align-items-start p-3">
            <TopImage />
          </div>

          <div className="px-4">
            {/* Header */}
            <h3 className="fw-bold mb-3">Financial</h3>

            {/* Horizontal Navbar */}
            <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
              <div className="btn-group">
                <button
                  className={`btn ${
                    activeTab === "financial"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setActiveTab("financial")}
                >
                  Financial
                </button>
                <button
                  className={`btn ${
                    activeTab === "category"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setActiveTab("category")}
                >
                  Created Category
                </button>
              </div>

              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  High School
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item">Primary</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Montessori</button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dynamic Content */}
            {activeTab === "financial" ? (
              <FinancialTab />
            ) : (
              <CreatedCategoryTab />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancialPage;
