import React from "react";
import BasicHero from "../hero/basicHero/BasicHero";
import Socials from "../navigation/socials/Socials";

export default function AboutSection() {
  return (
    <section>
      <BasicHero />
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="section-title position-relative mb-4 pb-2">
                <h6 className="position-relative text-primary ps-4">
                  About Us
                </h6>
                <h2 className="mt-2">
                  The best SEO solution with 10 years of experience
                </h2>
              </div>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor eirmod magna dolore erat amet
              </p>
              <div className="row g-3">
                <div className="col-sm-6">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2"></i>Award
                    Winning
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2"></i>
                    Professional Staff
                  </h6>
                </div>
                <div className="col-sm-6">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2"></i>24/7
                    Support
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2"></i>Fair Prices
                  </h6>
                </div>
              </div>
              <Socials />
            </div>
            <div className="col-lg-6">
              {/* <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src={require("./img/about.jpg")} alt='about'/> */}
              <img
                className="img-fluid wow zoomIn"
                data-wow-delay="0.5s"
                src={require("../../img/about.jpg")}
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}