import { Fragment } from "react";

export default function TeamSection() {
  return (
    <Fragment>
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div
            className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h6 className="position-relative d-inline text-primary ps-4">
              Our Team
            </h6>
            <h2 className="mt-2">Meet Our Team Members</h2>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item">
                <div className="d-flex">
                  <div
                    className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                    style={{ width: "75px" }}
                  >
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href="/"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href="/"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href="/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href="/"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <img
                    className="img-fluid rounded w-100"
                    src={require("../../img/team-1.jpg")}
                    alt=""
                  />
                </div>
                <div className="px-4 py-3">
                  <h5 className="fw-bold m-0">Jhon Doe</h5>
                  <small>CEO</small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item">
                <div className="d-flex">
                  <div
                    className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                    style={{ width: "75px" }}
                  >
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href="/"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href="/"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href="/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href="/"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <img
                    className="img-fluid rounded w-100"
                    src={require("../../img/team-2.jpg")}
                    alt=""
                  />
                </div>
                <div className="px-4 py-3">
                  <h5 className="fw-bold m-0">Emma William</h5>
                  <small>Manager</small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="team-item">
                <div className="d-flex">
                  <div
                    className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                    style={{ width: "75px" }}
                  >
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href="/"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href="/"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href="/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href="/"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <img
                    className="img-fluid rounded w-100"
                    src={require("../../img/team-3.jpg")}
                    alt=""
                  />
                </div>
                <div className="px-4 py-3">
                  <h5 className="fw-bold m-0">Noah Michael</h5>
                  <small>Designer</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
