import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
      <img src="/loader.gif" alt="Loading..." className="w-24 h-24" />
    </div>
  );
};

export default Loader;
