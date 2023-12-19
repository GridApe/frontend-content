// component for sidebar layout
import React from "react";

const DashboardLayout = ({ toggleDashboardLayout, children }) => {
  return (
    <div>
      {toggleDashboardLayout ? (
        <div className="">
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default DashboardLayout;
