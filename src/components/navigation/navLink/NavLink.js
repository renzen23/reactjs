import { Fragment } from "react";

export default function NavLink() {
  return (
    <Fragment>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <a href="/" className="nav-item nav-link active">
            Home
          </a>
          <a href="/about-us" className="nav-item nav-link">
            About
          </a>
          <a href="service.html" className="nav-item nav-link">
            Service
          </a>
          <a href="/project" className="nav-item nav-link">
            Project
          </a>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu m-0">
              <a href="team.html" className="dropdown-item">
                Our Team
              </a>
              <a href="testimonial.html" className="dropdown-item">
                Testimonial
              </a>
              <a href="404.html" className="dropdown-item">
                404 Page
              </a>
            </div>
          </div>
          <a href="contact.html" className="nav-item nav-link">
            Contact
          </a>
        </div>
        <button
          type="button"
          className="btn text-secondary ms-3"
          data-bs-toggle="modal"
          data-bs-target="#searchModal"
        >
          <i className="fa fa-search"></i>
        </button>
        <a
          href="https://htmlcodex.com/startup-company-website-template"
          className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3"
        >
          Pro Version
        </a>
      </div>
    </Fragment>
  );
}
