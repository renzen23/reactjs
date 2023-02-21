import { Fragment } from "react";
// Owl
// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// import "owl.carousel/dist/owl.carousel.js";
// import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.min.css";

export default function TestimonialSection() {
  return (
    <Fragment>
      <div
        className="container-xxl bg-primary testimonial py-5 my-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container py-5 px-lg-5">
          <div className="owl-carousel testimonial-carousel">
            {/* <OwlCarousel items={3} className="owl-theme" loop nav margin={8}>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src={require("../../img/testimonial-3.jpg")}
                  style={{ width: "50px", height: "50px" }}
                  alt=""
                />
                <div className="ps-3">
                  <h6 className="text-white mb-1">Client Name</h6>
                  <small>Profession</small>
                </div>
              </div>
            </OwlCarousel> */}
            <div className="testimonial-item bg-transparent border rounded text-white p-4">
              <i className="fa fa-quote-left fa-2x mb-3"></i>
              <p>
                Test Dolor et eos labore, stet justo sed est sed. Diam sed sed
                dolor stet amet eirmod eos labore diam
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src={require("../../img/testimonial-3.jpg")}
                  style={{ width: "50px", height: "50px" }}
                  alt=""
                />
                <div className="ps-3">
                  <h6 className="text-white mb-1">Client Name</h6>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-transparent border rounded text-white p-4">
              <i className="fa fa-quote-left fa-2x mb-3"></i>
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src={require("../../img/testimonial-2.jpg")}
                  style={{ width: "50px", height: "50px" }}
                  alt=""
                />
                <div className="ps-3">
                  <h6 className="text-white mb-1">Client Name</h6>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-transparent border rounded text-white p-4">
              <i className="fa fa-quote-left fa-2x mb-3"></i>
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src={require("../../img/testimonial-3.jpg")}
                  style={{ width: "50px", height: "50px" }}
                  alt=""
                />
                <div className="ps-3">
                  <h6 className="text-white mb-1">Client Name</h6>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-transparent border rounded text-white p-4">
              <i className="fa fa-quote-left fa-2x mb-3"></i>
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src={require("../../img/testimonial-4.jpg")}
                  style={{ width: "50px", height: "50px" }}
                  alt=""
                />
                <div className="ps-3">
                  <h6 className="text-white mb-1">Client Name</h6>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            {/* </OwlCarousel> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
