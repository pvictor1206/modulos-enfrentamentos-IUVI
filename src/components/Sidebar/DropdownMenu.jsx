import React, { useState } from "react";
import { SidebarData } from './SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const DropdownMenu = ({ module }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleModule = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    console.log(openIndex);
  };

  return (
    <div className="w-full text-black py-[16px]">
      {/* Renderização dos módulos */}
      {module.map((mod, index) => (
        <div key={index} className="mb-2">

        <div
            onClick={() => toggleModule(index)}
            className={`w-full text-left text-[14px] py-[16px] px-[16px] transition flex justify-between items-center ${openIndex===null ? "border-y" : "border-t"} border-gray-300`}
        >

        {mod.title}
        <FontAwesomeIcon icon={openIndex === index ? faChevronUp : faChevronDown} className="ml-2" />
        </div>

          {openIndex === index && (
            <div className="border-b border-gray-300 rounded-md mt-2 p-4">
                <ul className="space-y-2 text-left text-[14px] text-[#0C1E33]">
                {mod.items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
                </ul>

                {mod.title.includes("Módulo") && (
                <ul className="mt-4 space-y-2">
                    {SidebarData.map((item, i) => (
                    <li key={i} className={item.cName}>
                        <a href={item.path} className="flex items-center ml-4 text-left text-[14px]">
                        <span className="ml-4 text-[#0C1E33] text-left text-[14px]">{item.title}</span>
                        </a>
                    </li>
                    ))}
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


