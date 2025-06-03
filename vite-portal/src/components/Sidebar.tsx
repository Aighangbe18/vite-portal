import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/CHS-Logo.png";

const Sidebar = () => {
  const links = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Users", path: "/users" },
    { label: "Academic", path: "/academic" },
    { label: "Financial", path: "/financial" },
    { label: "Communication", path: "/communication" },
  ];

  return (
    <div
      className="text-white p-3 d-flex flex-column justify-content-between"
      style={{ width: "250px", minHeight: "100vh", background: "#05022B" }}
    >
      <Nav className="flex-column">
        <div>
          <img
            src={logoImg}
            alt="School Logo"
            style={{
              width: "150px",
              height: "100px",
              marginBottom: "80px",
              marginTop: "20px",
            }}
          />
        </div>
        {links.map(({ label, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `nav-link mb-2 rounded px-3 py-2 ${
                isActive ? "bg-primary text-white fw-bold" : "text-white"
              }`
            }
            end
          >
            {label}
          </NavLink>
        ))}
      </Nav>

      <div>
        <Nav className="flex-column">
          <Nav.Link className="text-white" href="#">
            Settings
          </Nav.Link>
          <Nav.Link className="text-white" href="#">
            Logout
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
