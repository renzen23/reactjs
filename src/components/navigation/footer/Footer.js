import React from "react";
import Subscribe from "../../forms/subscribe/Subscribe";
import Socials from "../../navigation/socials/Socials";
import { Portfolio } from "../../data/dataGallery";
import Gallery from "../../gallery/Gallery";

export default function Footer() {
  const socialData = [
    {
      className: "btn btn-outline-light btn-social",
      text: null,
      icon: "fab fa-facebook-f",
    },
    {
      className: "btn btn-outline-light btn-social",
      text: null,
      icon: "fab fa-twitter",
    },
    {
      className: "btn btn-outline-light btn-social",
      text: null,
      icon: "fab fa-instagram",
    },
    {
      className: "btn btn-outline-light btn-social",
      text: null,
      icon: "fab fa-linkedin-in",
    },
  ];

  // const GalleryList = Portfolio.map((value) => (
  //   <div key={value.id} className="col-4">
  //     <p>{value.catergory}</p>
  //     <p>{value.name}</p>
  //     <img
  //       src={require(`../../../img/${value.imageUrl}`)}
  //       className="img-fluid"
  //       alt={value.name}
  //     />
  //   </div>
  // ));

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
                <Socials data={socialData} />
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
              {/* <div className="row g-2">{GalleryList}</div> */}
              <div className="row g-2">
                <Gallery data={Portfolio} />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Newsletter</h5>
              <p>
                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                Curabitur facilisis ornare velit non vulpu
              </p>
              <Subscribe />
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
