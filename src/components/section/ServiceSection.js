export default function ServiceSection() {
  const serviceData = [
    {
      id: 1,
      serviceName: "EO Optimization",
      serviceContent:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      serviceIcon: "fa fa-home fa-2x",
    },
    {
      id: 2,
      serviceName: "Social Media Marketing",
      serviceContent:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      serviceIcon: "fa fa-home fa-2x",
    },
    {
      id: 3,
      serviceName: "Web Design",
      serviceContent:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      serviceIcon: "fa fa-home fa-2x",
    },
    {
      id: 4,
      serviceName: "Email Marketing",
      serviceContent:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      serviceIcon: "fa fa-home fa-2x",
    },
    {
      id: 5,
      serviceName: "PPC Advertising",
      serviceContent:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      serviceIcon: "fa fa-home fa-2x",
    },
    {
      id: 6,
      serviceName: "App Development",
      serviceContent:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      serviceIcon: "fa fa-home fa-2x",
    },
  ];

  const services = serviceData.map((value) => (
    <div
      key={value.id}
      className="col-lg-4 col-md-6 wow zoomIn"
      data-wow-delay="0.1s"
    >
      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
        <div className="service-icon flex-shrink-0">
          <i className={value.serviceIcon}></i>
        </div>
        <h5 className="mb-3">{value.serviceName}</h5>
        <p>{value.serviceContent}</p>
        <a className="btn px-3 mt-auto mx-auto" href="/">
          Read More
        </a>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div
            className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h6 className="position-relative d-inline text-primary ps-4">
              Our Services
            </h6>
            <h2 className="mt-2">What Solutions We Provide</h2>
          </div>
          <div className="row g-4">{services}</div>
        </div>
      </div>
    </div>
  );
}
