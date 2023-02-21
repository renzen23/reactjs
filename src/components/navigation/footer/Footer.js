import React from "react";
export default function Footer() {
  return (
    <div>
      <div
        className="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5 px-lg-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>123 Street, New
                York, USA
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube" />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-instagram" />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Popular Link</h5>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                Privacy Policy
              </a>
              <a className="btn btn-link" href="">
                Terms & Condition
              </a>
              <a className="btn btn-link" href="">
                Career
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Project Gallery</h5>
              <div className="row g-2">
                <div className="col-4">
                  <img
                    className="img-fluid"
                    src={require("../../../img/portfolio-1.jpg")}
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid"
                    src={require("../../../img/portfolio-2.jpg")}
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid"
                    src={require("../../../img/portfolio-3.jpg")}
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid"
                    src={require("../../../img/portfolio-4.jpg")}
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid"
                    src={require("../../../img/portfolio-5.jpg")}
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid"
                    src={require("../../../img/portfolio-6.jpg")}
                    alt="Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Newsletter</h5>
              <p>
                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                Curabitur facilisis ornare velit non vulpu
              </p>
              <div className="position-relative w-100 mt-3">
                <input
                  className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                  type="text"
                  placeholder="Your Email"
                  style={{ height: "48px" }}
                />
                <button
                  type="button"
                  className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                >
                  <i className="fa fa-paper-plane text-primary fs-4"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-lg-5">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="#">
                  Your Site Name
                </a>
                , All Right Reserved. Designed By{" "}
                <a className="border-bottom" href="https://htmlcodex.com">
                  HTML Codex
                </a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
