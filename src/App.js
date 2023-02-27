// React
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment, useEffect } from "react";
// Pages
import Page from "./pages/Page";
import "./App.css";

// Sections
import Nav from "./components/navigation/nav/Nav";
import Meta from "./components/navigation/meta/Meta";
import Footer from "./components/navigation/footer/Footer";
import PortfolioSection from "./components/section/PorfolioSection";
import NewsletterSection from "./components/section/NewsletterSection";
import AboutSection from "./components/section/AboutSection";
import ServiceSection from "./components/section/ServiceSection";
import Breadcrumb from "./components/navigation/breadcrumbs/Breadcrumbs";
import BasicHero from "./components/hero/basicHero/BasicHero";
import TeamSection from "./components/section/TeamSection";
import TestimonialSection from "./components/section/TestimonialSection";
import ContactSection from "./components/section/ContactSection";

export default function App() {
  const contactSection = (
    <Fragment>
      <Breadcrumb title="Contact Us" />
      <ContactSection />
    </Fragment>
  );
  const testimonialSection = (
    <Fragment>
      <Breadcrumb title="Testimonial" />
      <TestimonialSection />
    </Fragment>
  );
  const teamSection = (
    <Fragment>
      <Breadcrumb title="Our Team" />
      <TeamSection />
    </Fragment>
  );
  const servicesSection = (
    <Fragment>
      <Breadcrumb title="Services" />
      <ServiceSection />
    </Fragment>
  );
  const portfolioSection = (
    <Fragment>
      <Breadcrumb title="Project" />
      <PortfolioSection />
      <NewsletterSection />
    </Fragment>
  );
  const aboutUsSection = (
    <Fragment>
      <Breadcrumb title="About us" />
      <AboutSection />
      <NewsletterSection />
    </Fragment>
  );
  const homeSection = (
    <Fragment>
      <BasicHero />
      <AboutSection />
      <NewsletterSection />
      <ServiceSection />
      <PortfolioSection />
      <TestimonialSection />
      <TeamSection />
    </Fragment>
  );

  return (
    <div>
      <Meta />
      <div className="container-xxl bg-white p-0">
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-grow text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <Nav />
        {/* <BrowserRouter> */}
        <Routes>
          <Route
            path={"/"}
            element={<Page title="Home" sections={homeSection} />}
          />
          <Route
            path={"about-us"}
            element={<Page title="About Us" sections={aboutUsSection} />}
          />
          <Route
            path="project"
            element={<Page title="Project" sections={portfolioSection} />}
          />
          <Route
            path="services"
            element={<Page title="Services" sections={servicesSection} />}
          />
          <Route
            path="team"
            element={<Page title="Our Team" sections={teamSection} />}
          />
          <Route
            path="testimonial"
            element={<Page title="Testimonial" sections={testimonialSection} />}
          />
          <Route
            activeClassName="active"
            path="contact"
            element={<Page title="Contact" sections={contactSection} />}
          />
        </Routes>
        {/* </BrowserRouter> */}
        <Footer />
      </div>
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"
      >
        <i className="bi bi-arrow-up" />
      </a>
    </div>
  );
}
