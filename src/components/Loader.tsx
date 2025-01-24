import React from "react";

const Loader = () => {
  return (
    <div className="flex gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-3 h-3 rounded-full bg-red-700 animate-bounce animation-delay-0" />
      <div className="w-3 h-3 rounded-full bg-red-700 animate-bounce animation-delay-150" />
      <div className="w-3 h-3 rounded-full bg-red-700 animate-bounce animation-delay-300" />
    </div>
  );
};

export default Loader;
