// component for waitlist
import React from "react";
import HeaderFooterLayout from "../components/layouts/HeaderFooterLayout";
const WaitList = () => {
  return (
    <HeaderFooterLayout>
    <div className="max-h-screen h-screen bg-gray-200 flex justify-center items-center">
      <h1 className="text-3xl text-center font-bold text-primary-400 block btn-xs">
        WaitList
      </h1>
    </div>
    </HeaderFooterLayout>
  );
};

export default WaitList;
