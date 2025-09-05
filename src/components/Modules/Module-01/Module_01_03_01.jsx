// Module_01_01.jsx
import MainLayout from "../../Sidebar/MainLayout";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import MobileBottomBarBackNext from "../../Mobile/MobileBottomBarBackNext";
import conteudoJSON from '../../../assets/conteudo_textos_03.json';
import { Link } from 'react-router-dom';
import VideoEmbed from "../../Video/VideoEmbed";



function Module_01_03_01() {
  
  const YT_VIDEO_1 = "w2xJ-mDgDdY";
  const YT_VIDEO_2 = "hOSnloSlmzw";
  const YT_VIDEO_3 = "nJmEuR67-Qo";
  const YT_VIDEO_4 = "w4QsGJX6BCs";
  const YT_VIDEO_5 = "E7ycfK_o6Po";

  return (
    <MainLayout>
      
      <div className="pr-8 pt-[40px]"> {/* padding opcional à direita */}
        <h1 className="text-left font-semibold text-[20px] md:text-[25px]">
          Metodologia de Estudo na Educação a Distância - #1.3.1
        </h1>

        <div className="h-2 bg-[#d6cfee] rounded-b-lg mt-1 w-[calc(52vw-var(--content-left)-32px)]" /></div>

        
        <div className="hidden md:flex justify-between items-center px-[2%] mt-4">
          {/* Botão Voltar */}
          <Link to="/module_01_02" className="flex items-center gap-3">
            {/* Seta à esquerda */}
            <AiOutlineLeft className="w-[20px] h-[20px] text-slate-500" />

            {/* Ícone */}
            <img
              src="/Task List Pin Streamline Ultimate Regular - Free.png"
              alt=""
              className="w-[40px] h-[40px]"
            />

            {/* Texto */}
            <div className="text-left">
              <div className="text-[14px] font-semibold">Voltar</div>
              <div className="text-[14px]">
                Metodologia de Estudo na Educação a Distância - #1.2
              </div>
            </div>
          </Link>

          {/* Botão Próximo */}
          <Link to="/module_01_03_02" className="flex items-center gap-3">
            {/* Texto */}
            <div className="text-right">
              <div className="text-[14px] font-semibold">Próximo</div>
              <div className="text-[14px]">
                Metodologia de Estudo na Educação a Distância - #1.3.2
              </div>
            </div>

            {/* Ícone */}
            <img
              src="/Task List Pin Streamline Ultimate Regular - Free.png"
              alt=""
              className="w-[40px] h-[40px]"
            />

            {/* Seta à direita */}
            <AiOutlineRight className="w-[20px] h-[20px] text-slate-500" />
          </Link>
        </div>

        <hr className="border-0 h-px bg-[#F4F2FF] my-4" />

        <p className="text-justify lg:pr-[18%] lg:pl-[170px]">
        <h2 className="text-left font-semibold text-[20px] py-[25px] md:py-[50px]">
          Tempo e Disciplina
        </h2>
        
          {conteudoJSON.paragrafo_m03_01.map((texto, index) => (
            <div key={index}>
              <p
                className="text-[16px] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: texto }}
              />

              {/* Vídeo após o item 3 (index 2) */}
              {index === 0 && (
                <VideoEmbed videoId={YT_VIDEO_1} title="Educação a Distância" />
              )}

             {index === 1 && (
                <VideoEmbed videoId={YT_VIDEO_2} title="Educação a Distância" />
              )}

              {index === 2 && (
                <VideoEmbed videoId={YT_VIDEO_3} title="Prazos" />
              )}

              {index === 3 && (
                <VideoEmbed videoId={YT_VIDEO_4} title="Respostas" />
              )}

              {index === 5 && (
                <VideoEmbed videoId={YT_VIDEO_5} title="Responsabilidade" />
              )}


            </div>
          ))}
        </p>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <MobileBottomBarBackNext
            toPrev="/module_01_02"
            toNext="/module_01_03_02"
            textPrev="Anterior"
            textNext="Próximo"
        />
    </MainLayout>
  );
}

export default Module_01_03_01;
