import React from "react";
import Logo from "../../logo/Logo";
import NavLink from "../navLink/NavLink";
import SearchModal from "../../modal/search/Search";

export default function Nav() {
  return (
    <div>
      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Logo />
          <NavLink />
        </nav>
      </div>
      <SearchModal />
    </div>
  );
}
