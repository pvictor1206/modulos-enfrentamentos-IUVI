import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { SidebarData } from './SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const DropdownMenu = ({ module }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation(); // Hook para obter a rota atual

  const toggleModule = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full text-black ">
      {module.map((mod, index) => (
        <div key={index} className="mb-2">
          <div
            onClick={() => toggleModule(index)}
            className={`w-full text-left text-[14px] py-[16px] px-[16px] transition flex justify-between items-center ${openIndex === null ? "border-y" : "border-t"} border-gray-300`}
          >
            {mod.title}
            <FontAwesomeIcon icon={openIndex === index ? faChevronUp : faChevronDown} className="ml-2" />
          </div>

          {openIndex === index && (
            <div className="border-b border-gray-300 rounded-md mt-2">
              <ul className="ps-4 space-y-2 text-left text-[14px] text-[#0C1E33]">
                {mod.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {mod.title.includes("Módulo") && (
                <ul className="mt-4 space-y-2">
                  {SidebarData.map((item, i) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <li key={i} className={`${item.cName} ${isActive ? 'bg-[#F4F2FF] border border-[#C9BFEF] border-l-[5px] border-l-[#C9BFEF]'  : 'bg-white'}`}>
                        <a href={item.path} className="flex items-center ml-4 text-left text-[14px]">
                          <span className="text-[#0C1E33] text-left text-[14px]">{item.title}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
