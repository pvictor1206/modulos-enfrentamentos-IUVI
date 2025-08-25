
import React from "react";

function ProgressBar({ porcentagem }) {
  return (
    <div className="mt-4 pr-[2%]">
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-[#C9BFEF] h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${porcentagem}%` }}
        ></div>
      </div>
      <div className="text-right text-sm mt-1 text-gray-600">
        {porcentagem}%
      </div>
    </div>
  );
}

export default ProgressBar;
