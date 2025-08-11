import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBar';
import DropdownMenu from './DropdownMenu';


const modules = [
    {
        title: "Módulo 1",
        items: [
            "Metodologia de Estudo na Educação a Distância",
        ]
    },
    {
        title: "Cronograma",
        items: [
            "EM BREVE",
        ]
    },
]


function NavBar() {
    const [sidebar, setSidebar] = useState(true)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className=''>
                <Link to='#' className=''>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={`bg-[#fff] w-[298px] h-screen flex flex-col justify-start items-start fixed top-0 transition-all duration-[450ms] bg-[#C9BFEF] shadow-xl/20 ${sidebar ? "left-0" : "-left-full"}`}>
                <ul className="w-full">
                    <li className="bg-[#44257A] w-full h-[95px] flex justify-start items-center rounded-b-lg ">
                    <Link to="#" className="flex items-start">
                        <h2 className='pl-[16px] pr-[32px] h-[60px] text-[#F3F3F3] text-left text-[14px]'>Diferença e Enfrentamento Profissionais nas Desigualdades Sociais</h2>
                        <AiIcons.AiOutlineClose onClick={showSidebar} className='w-[60px] h-[60px] text-white cursor-pointer pr-[16px]' />
                    </Link>
                    </li>
                    <li className='flex justify-start items-center'>
                        <DropdownMenu module={modules} ></DropdownMenu>
                    </li>
                    {/*
                    {SidebarData.map((item, index) => (
                    <li key={index} className={item.cName}>
                        <Link to={item.path} className="flex items-center ml-4">
                        <span className="ml-4 text-[#0C1E33]">{item.title}</span>
                        </Link>
                    </li>
                    ))}*/}
                </ul>
            </nav>

        </>
    );
}

export default NavBar;