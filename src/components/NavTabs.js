import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <header>
        <a href="/react-portfolio/">
          <h2 id="logo">Geraldo Skana</h2>
        </a>

        <nav>
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <a
                href="#aboutMe"
                onClick={() => handlePageChange("About")}
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={
                  currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                }
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavTabs;