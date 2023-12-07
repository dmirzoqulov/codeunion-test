import React from "react";
import AsideNav from "../components/AsideNav";

const MainLayout = ({ children }: any) => {
  return (
    <div className="layout-container">
      <AsideNav />
      {children}
    </div>
  );
};

export default MainLayout;
