import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBar';


function NavBar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className=''>
                <Link to='#' className=''>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={`bg-[#060b26] w-[250px] h-screen flex flex-col justify-start items-start fixed top-0 transition-all duration-[450ms] ${sidebar ? "left-0" : "-left-full"}`}>
                <ul className="w-full">
                    <li className="bg-[#060b26] w-full h-[80px] flex justify-start items-center">
                    <Link to="#" className="ml-4 text-xl p-4">
                        <AiIcons.AiOutlineClose onClick={showSidebar} />
                    </Link>
                    </li>
                    {SidebarData.map((item, index) => (
                    <li key={index} className={item.cName}>
                        <Link to={item.path} className="flex items-center ml-4">
                        {item.icon}
                        <span className="ml-4">{item.title}</span>
                        </Link>
                    </li>
                    ))}
                </ul>
            </nav>

        </>
    );
}

export default NavBar;