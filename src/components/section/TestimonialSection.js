import { Fragment } from "react";
// Owl
// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// import "owl.carousel/dist/owl.carousel.js";
// import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.min.css";

const testimonialData = [
  {
    id: 1,
    message:
      "Test Dolor et eos labore, stet justo sed est sed. Diam sed sed Test Dolor et eos labore, stet justo sed est sed. Diam sed",
    imageUrl: "testimonial-1.jpg",
    clientName: "Client Name",
    profession: "Manager",
  },
  {
    id: 2,
    message:
      "Test Dolor et eos labore, stet justo sed est sed. Diam sed sed Test Dolor et eos labore, stet justo sed est sed. Diam sed",
    imageUrl: "testimonial-2.jpg",
    clientName: "Client Name",
    profession: "Supervisor",
  },
  {
    id: 3,
    message:
      "Test Dolor et eos labore, stet justo sed est sed. Diam sed sed Test Dolor et eos labore, stet justo sed est sed. Diam sed",
    imageUrl: "testimonial-3.jpg",
    clientName: "Client Name",
    profession: "Web Designer",
  },
  {
    id: 4,
    message:
      "Test Dolor et eos labore, stet justo sed est sed. Diam sed sed Test Dolor et eos labore, stet justo sed est sed. Diam sed",
    imageUrl: "testimonial-4.jpg",
    clientName: "Client Name",
    profession: "Web Developer",
  },
];

const testimonials = testimonialData.map((value) => (
  <div className="testimonial-item bg-transparent border rounded text-white p-4">
    <i className="fa fa-quote-left fa-2x mb-3"></i>
    <p>{value.message}</p>
    <div className="d-flex align-items-center">
      <img
        className="img-fluid flex-shrink-0 rounded-circle"
        src={require(`../../img/${value.imageUrl}`)}
        style={{ width: "50px", height: "50px" }}
        alt={value.clientName}
      />
      <div className="ps-3">
        <h6 className="text-white mb-1">{value.clientName}</h6>
        <small>{value.profession}</small>
      </div>
    </div>
  </div>
));

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
            {testimonials}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
