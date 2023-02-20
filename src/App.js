// React
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
// Pages
import Page from "./pages/Page";
import "./App.css";
// Libraries
import "./lib/animate/animate.min.css";
import "./lib/owlcarousel/assets/owl.carousel.min.css";
import "./lib/lightbox/css/lightbox.min.css";
import "./css/bootstrap.min.css";
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

export default function App() {
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
    </Fragment>
  );

  return (
    <div>
      <Meta />
      <div className="container-xxl bg-white p-0">
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Page title="Home" sections={homeSection} />}
            />
            <Route
              path="about-us"
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
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
      <a
        href="/"
        className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"
      >
        <i className="bi bi-arrow-up" />
      </a>
    </div>
  );
}
