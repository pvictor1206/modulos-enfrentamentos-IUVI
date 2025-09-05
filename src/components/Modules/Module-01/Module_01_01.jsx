// Module_01_01.jsx
import MainLayout from "../../Sidebar/MainLayout";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import conteudoJSON from '../../../assets/conteudo_textos_01.json';
import { Link } from 'react-router-dom';
import QuestionnairePrompt from "../../QuestionnairePrompt/QuestionnairePrompt ";
import MobileBottomBarBackNext from "../../Mobile/MobileBottomBarBackNext";


function Module_01_01() {
  return (
    <MainLayout>
      
      <div className="pr-8 pt-[40px]"> {/* padding opcional à direita */}
        <h1 className="text-left font-semibold text-[20px] md:text-[25px]">
          Metodologia de Estudo na Educação a Distância - #1.1
        </h1>

        <div className="h-2 bg-[#d6cfee] rounded-b-lg mt-1 w-[calc(52vw-var(--content-left)-32px)]" /></div>

        
        <div className="hidden md:flex justify-between items-center px-[2%] mt-4">
          {/* Botão Voltar */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <AiOutlineLeft className="w-[20px] h-[20px] text-slate-500" />
            </Link>
            <img
              src="/Task List Pin Streamline Ultimate Regular - Free.png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <div>
              <div className="text-[14px] font-semibold text-left">Voltar</div>
              <div className="text-[14px]">
                Metodologia de Estudo na Educação a Distância - #1.0
              </div>
            </div>
          </div>

          {/* Botão Próximo */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-[14px] font-semibold">Próximo</div>
              <div className="text-[14px]">
                Metodologia de Estudo na Educação a Distância - #1.2
              </div>
            </div>
            <img
              src="/Task List Pin Streamline Ultimate Regular - Free.png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <Link to="/module_01_02">
              <AiOutlineRight className="w-[20px] h-[20px] text-slate-500" />
            </Link>
          </div>
        </div>

        <hr className="border-0 h-px bg-[#F4F2FF] my-4" />

        <p className="text-justify lg:pr-[18%] lg:pl-[170px]">
        <h2 className="text-left font-semibold text-[20px] py-[25px] md:py-[50px]">
          Responda ao questionário
        </h2>
          {conteudoJSON.paragrafo_m01_01.map((texto, index) => (
              <p
                key={index}
                className="text-[16px] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: texto }}
              />
            ))}
        </p>

        <QuestionnairePrompt
          message={`É importantíssimo que vocês respondam esse questionário antes de
            qualquer coleta de informações, consulta ou estudo sobre os temas que
            vamos trabalhar.`}
          buttonLabel="RESPONDER QUESTIONÁRIO"
          href="#"
        />

        <MobileBottomBarBackNext
          toPrev="/#"
          toNext="/module_01_02"
          textPrev="Anterior"
          textNext="Próximo"
        />

    </MainLayout>
  );
}

export default Module_01_01;
