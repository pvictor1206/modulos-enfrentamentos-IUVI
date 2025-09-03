import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { SidebarData } from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ module }) => {
  const [openIndex, setOpenIndex] = useState(null);     // abre/fecha "Módulo 1", "Cronograma", etc.
  const [openGroup, setOpenGroup] = useState({});       // abre/fecha grupos (#1.3)
  const location = useLocation();

  const toggleModule = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleGroup = (key) => {
    setOpenGroup(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full text-black">
      {module.map((mod, index) => (
        <div key={index} className="mb-2">
          <button
            onClick={() => toggleModule(index)}
            className={`font-semibold w-full text-left text-[14px] py-[16px] px-[16px] transition flex justify-between items-center ${openIndex === index ? "" : "border-b"} border-gray-300`}
            aria-expanded={openIndex === index}
          >
            {mod.title}
            <FontAwesomeIcon icon={openIndex === index ? faChevronUp : faChevronDown} className="ml-2" />
          </button>

          {(openIndex === index) && (
            <div className="border-b border-gray-300 rounded-md mt-2">
              {/* descrição do módulo */}
              <ul className="ps-4 space-y-2 text-left text-[14px] text-[#0C1E33]">
                {mod.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>

              {/* lista de páginas e grupos */}
              {mod.title.includes("Módulo") && (
                <ul className="mt-4 space-y-2">
                  {SidebarData.map((item, i) => {
                    const isActive = item.path && location.pathname === item.path;

                    const hasActiveChild = Array.isArray(item.children) &&
                      item.children.some(ch => location.pathname === ch.path);

                    const isExpanded = Array.isArray(item.children)
                      ? (openGroup[item.title] ?? hasActiveChild)
                      : false;

                    const activeClass =
                      'bg-[#F4F2FF] border border-[#C9BFEF] border-l-[5px] border-l-[#C9BFEF]';
                    const idleClass = 'bg-white border border-transparent';

                    return (
                      <li key={i} className="w-full list-none">
                        {/* GRUPO (ex.: #1.3) */}
                        {Array.isArray(item.children) ? (
                          <>
                            <button
                              type="button"
                              onClick={() => toggleGroup(item.title)}
                              aria-expanded={isExpanded}
                              className={`flex items-center justify-between w-full h-12 px-4 rounded ${ (isExpanded || hasActiveChild) ? activeClass : idleClass }`}
                            >
                              <span className="text-[#0C1E33] text-[14px]">{item.title}</span>
                              <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
                            </button>

                            {isExpanded && (
                              <ul className="pl-6 mt-1 space-y-1">
                                {item.children.map((child, j) => {
                                  const isChildActive = location.pathname === child.path;
                                  return (
                                    <li key={j} className="w-full list-none">
                                      <Link
                                        to={child.path}
                                        className={`flex items-center w-full h-12 px-4 rounded ${isChildActive ? activeClass : idleClass}`}
                                      >
                                        <span className="text-[#0C1E33] text-[14px]">{child.title}</span>
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </>
                        ) : (
                          // ITEM SIMPLES (#1.0, #1.1, #1.2, #1.4)
                          <Link
                            to={item.path}
                            className={`flex items-center w-full h-12 px-4 rounded ${isActive ? activeClass : idleClass}`}
                          >
                            <span className="text-[#0C1E33] text-[14px]">{item.title}</span>
                          </Link>
                        )}
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
