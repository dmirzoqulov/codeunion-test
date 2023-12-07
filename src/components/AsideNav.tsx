import React from "react";
import Logo from "../assets/images/svg/Logo";

const AsideNav = () => {
  return (
    <aside className="layout-menu">
      <div className="app-brand">
        <a href="#">
          <Logo />
        </a>
      </div>
    </aside>
  );
};

export default AsideNav;
