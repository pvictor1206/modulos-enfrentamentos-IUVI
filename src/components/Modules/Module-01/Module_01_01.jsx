// Module_01_01.jsx
import MainLayout from "../../Sidebar/MainLayout";
import { AiOutlineRight } from "react-icons/ai"; // topo do arquivo
import MobileBottomBar from "../../Mobile/MobileBottomBar";
import conteudoJSON from '../../../assets/conteudo_textos_01.json';
import { Link } from 'react-router-dom';
import QuestionnairePrompt from "../../QuestionnairePrompt/QuestionnairePrompt ";
import ReferenceInfoBox from "../../ReferenceInfoBox/ReferenceInfoBox";
import AccessLink from "../../AccessLink/AccessLink"
import DropdownContent from "../../DropdownContent/DropdownContent";
import UseScrollProgress from "../../BarProgress/useScrollProgress";

import gatoImg from '../../../assets/imgs/gato.png';

function Module_01_01() {
  return (
    <MainLayout>
      <div className="pr-8 pt-[40px]"> {/* padding opcional à direita */}
        <h1 className="text-left font-semibold text-[18px] md:text-[25px]">
          Metodologia de Estudo na Educação a Distância - #1.1
        </h1>

        <div className="h-2 bg-[#d6cfee] rounded-b-lg mt-1 w-[calc(52vw-var(--content-left)-32px)]" /></div>
        
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
        <h2 className="text-left font-semibold text-[20px] py-[25px] md:py-[50px]">
          Introdução
        </h2>
          {conteudoJSON.paragrafo_m01_01.map((texto, index) => (
              <p
                key={index}
                className="text-[16px] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: texto }}
              />
            ))}
        </p>

        <QuestionnairePrompt />
          
        <p className="text-justify lg:pr-[18%] lg:pl-[170px]">
            {conteudoJSON.paragrafo_m01_02.map((texto, index) => (
                  <p
                    key={index}
                    className="text-[16px] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: texto }}
                  />
                ))}
          </p>

        
        <ReferenceInfoBox />

        <p className="text-justify lg:pr-[18%] lg:pl-[170px]">
            {conteudoJSON.paragrafo_m01_03.map((texto, index) => (
                  <p
                    key={index}
                    className="text-[16px] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: texto }}
                  />
                ))}
          </p>

          <AccessLink />

          
          <DropdownContent
                  title="Conteúdo 1"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  imageUrl={gatoImg}
                  altText="Gato fofo"
          />



        
        

      {/* tab bar só no mobile */}
      {/*<MobileBottomBar to="/#" text="Próximo" />*/}


    </MainLayout>
  );
}

export default Module_01_01;
