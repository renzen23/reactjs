export default function BasicHero() {
  return (
    <div className="container-xxl py-5 bg-primary hero-header mb-5">
      <div className="container my-5 py-5 px-lg-5">
        <div className="row g-5 py-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="text-white mb-4 animated zoomIn">
              All in one SEO tool need to grow your business rapidly
            </h1>
            <p className="text-white pb-3 animated zoomIn">
              Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet
              dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam
              sit justo amet ipsum vero ipsum clita lorem
            </p>
            <a
              href=""
              className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft"
            >
              Free Quote
            </a>
            <a
              href=""
              className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
            >
              Contact Us
            </a>
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <img
              className="img-fluid"
              src={require("../../../img/hero.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
