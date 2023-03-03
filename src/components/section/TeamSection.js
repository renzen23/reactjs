import { Fragment } from "react";
import Socials from "../navigation/socials/Socials";
export default function TeamSection() {
  const socialData = [
    {
      className: "btn btn-square text-primary bg-white my-1 m1",
      text: null,
      icon: "fab fa-facebook-f",
    },
    {
      className: "btn btn-square text-primary bg-white my-1 m2",
      text: null,
      icon: "fab fa-twitter",
    },
    {
      className: "btn btn-square text-primary bg-white my-1 m3",
      text: null,
      icon: "fab fa-instagram",
    },
    {
      className: "btn btn-square text-primary bg-white my-1 m4",
      text: null,
      icon: "fab fa-linkedin-in",
    },
  ];

  const teanMembers = [
    {
      id: 1,
      name: "Jhon Doe",
      position: "CEO",
      imageUrl: "team-1.jpg",
    },
    {
      id: 2,
      name: "Emma William",
      position: "Manager",
      imageUrl: "team-2.jpg",
    },
    {
      id: 3,
      name: "Noah Michael",
      position: "Designer",
      imageUrl: "team-3.jpg",
    },
  ];

  const TeamList = teanMembers.map((value) => (
    <Fragment key={value.id}>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="team-item">
          <div className="d-flex">
            <div
              className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
              style={{ width: "75px" }}
            >
              <Socials data={socialData} />
            </div>
            <img
              className="img-fluid rounded w-100"
              src={require(`../../img/${value.imageUrl}`)}
              alt={value.name}
            />
          </div>
          <div className="px-4 py-3">
            <h5 className="fw-bold m-0">{value.name}</h5>
            <small>{value.position}</small>
          </div>
        </div>
      </div>
    </Fragment>
  ));

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
          <div className="row g-4">{TeamList}</div>
        </div>
      </div>
    </Fragment>
  );
}
