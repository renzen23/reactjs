import { Fragment } from "react";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
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
          {/* <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink> */}
          <NavLink
            to="/"
            className="nav-item nav-link"
            activeClassName="active"
          >
            Home
          </NavLink>

          <NavLink
            to="/about-us"
            className="nav-item nav-link"
            activeClassName="active"
          >
            About
          </NavLink>

          <NavLink
            to="services"
            className="nav-item nav-link"
            activeClassName="active"
          >
            Service
          </NavLink>
          <NavLink
            to="/project"
            className="nav-item nav-link"
            activeClassName="active"
          >
            Project
          </NavLink>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              activeClassName="active"
            >
              Pages
            </a>
            <div className="dropdown-menu m-0">
              <NavLink
                to="/team"
                className="dropdown-item"
                activeClassName="active"
              >
                Our Team
              </NavLink>

              <NavLink
                to="testimonial"
                className="dropdown-item"
                activeClassName="active"
              >
                Testimonial
              </NavLink>
              <NavLink
                to="404.html"
                className="dropdown-item"
                activeClassName="active"
              >
                404 Page
              </NavLink>
            </div>
          </div>
          <NavLink
            to="contact"
            className="nav-item nav-link"
            activeClassName="active"
          >
            Contact
          </NavLink>
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
