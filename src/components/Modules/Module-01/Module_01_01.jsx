// Module_01_01.jsx
import MainLayout from "../../Sidebar/MainLayout";
import { AiOutlineRight } from "react-icons/ai"; // topo do arquivo
import MobileBottomBar from "../../Mobile/MobileBottomBar";
import conteudoJSON from '../../../assets/conteudo_textos_01.json';
import { Link } from 'react-router-dom';

function Module_01_01() {
  return (
    <MainLayout>
      <div className="pr-8 pt-[40px]"> {/* padding opcional à direita */}
        <h1 className="text-left font-semibold text-[18px] md:text-[25px]">
          Metodologia de Estudo na Educação a Distância - #1.1
        </h1>

        <div className="h-2 bg-[#C9BFEF] rounded-b-lg mt-1 w-[calc(96vw-var(--content-left)-32px)]" /></div>
      <div className="hidden md:block pr-[2%]">
        <div className="mt-3 ml-auto w-full max-w-[460px] pt-[5px]">
          <div className="flex items-center gap-4">
            <div className="">
              <div className="text-[14px] font-semibold text-right">Próximo</div>
              <div className="text-[14px]">
                Metodologia de Estudo na Educação a Distância - #1.2
              </div>
            </div>
            <img
              src="/Task List Pin Streamline Ultimate Regular - Free.png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <Link to='/module_01_02'>
                    <AiOutlineRight className="w-[20px] h-[20px] text-slate-500" />
            </Link>
            
          </div>
        </div>
        <hr className="border-0 h-px bg-[#F4F2FF] my-4" />
      </div>

        <p className="text-justify lg:pr-[18%] lg:pl-[170px]">
          <h2 className="text-left font-semibold text-[20px] py-[50px]" >Introdução</h2>  
          {conteudoJSON.paragrafo.map((texto, index) => (
              <p
                key={index}
                className="text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: texto }}
              />
            ))}
        </p>

      {/* tab bar só no mobile */}
      <MobileBottomBar to="/#" text="Próximo" />


    </MainLayout>
  );
}

export default Module_01_01;
