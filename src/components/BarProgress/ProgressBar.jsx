import React from "react";

function ProgressBar({ porcentagem }) {
  return (
    <div className="w-full">
      <div className="w-full bg-gray-200 h-1.5">
        <div
          className="bg-[#C9BFEF] h-1.5 transition-all duration-300"
          style={{ width: `${porcentagem}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
