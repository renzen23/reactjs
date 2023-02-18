import React from "react";
// import Newsletter from "./home/newsletter";
import Subscribe from "../forms/subscribe/Subscribe";

export default function NewsletterSection() {
  return (
    <section>
      <div
        className="container-xxl bg-primary newsletter my-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container px-lg-5">
          <div className="row align-items-center" style={{ height: "250px" }}>
            <div className="col-12 col-md-6">
              <h3 className="text-white">Ready to get started</h3>
              <small className="text-white">
                Diam elitr est dolore at sanctus nonumy.
              </small>
              <Subscribe />
            </div>
            <div className="col-md-6 text-center mb-n5 d-none d-md-block">
              <img
                className="img-fluid mt-5"
                style={{ height: "250px" }}
                src={require("../../img/newsletter.png")}
                alt="Newsletter"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
