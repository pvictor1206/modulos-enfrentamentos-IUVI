// Module_01_01.jsx
import MainLayout from "../../Sidebar/MainLayout";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import MobileBottomBar from "../../Mobile/MobileBottomBar";
import conteudoJSON from '../../../assets/conteudo_textos_03.json';
import { Link } from 'react-router-dom';
import VideoEmbed from "../../Video/VideoEmbed";


function Module_01_03_02() {

  const YT_VIDEO_1 = "rMNlOc7mbOs";
  const YT_VIDEO_2 = "mpCNf9Bv8iA";
  const YT_VIDEO_3 = "G5P7J7Op790";
  const YT_VIDEO_4 = "Ll6-JFQzz-Y";
  const YT_VIDEO_5 = "Lcn7PmW_H-8";
  const YT_VIDEO_6 = "IuXUi09VYec";
  const YT_VIDEO_7 = "jNz8TX38LyM";

  return (
    <MainLayout>
      
      <div className="pr-8 pt-[40px]"> {/* padding opcional à direita */}
        <h1 className="text-left font-semibold text-[20px] md:text-[25px]">
          Metodologia de Estudo na Educação a Distância - #1.3.2
        </h1>

        <div className="h-2 bg-[#d6cfee] rounded-b-lg mt-1 w-[calc(52vw-var(--content-left)-32px)]" /></div>

        
        <div className="hidden md:flex justify-between items-center px-[2%] mt-4">
          {/* Botão Voltar */}
          <div className="flex items-center gap-4">
            <Link to="/module_01_02">
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
                Metodologia de Estudo na Educação a Distância - #1.3.1
              </div>
            </div>
          </div>

          {/* Botão Próximo */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-[14px] font-semibold">Próximo</div>
              <div className="text-[14px]">
                Metodologia de Estudo na Educação a Distância - #1.4
              </div>
            </div>
            <img
              src="/Task List Pin Streamline Ultimate Regular - Free.png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <Link to="/module_01_04">
              <AiOutlineRight className="w-[20px] h-[20px] text-slate-500" />
            </Link>
          </div>
        </div>

        <hr className="border-0 h-px bg-[#F4F2FF] my-4" />

        <p className="text-justify lg:pr-[18%] lg:pl-[170px]">
        <h2 className="text-left font-semibold text-[20px] py-[25px] md:py-[50px]">
          Participação
        </h2>

            {conteudoJSON.paragrafo_m03_02.map((texto, index) => (
               <div key={index}>
                  <p
                      className="text-[16px] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: texto }}
                  />
            
                  {/* Vídeo após o item 3 (index 2) */}
                  {index === 0 && (
                      <VideoEmbed videoId={YT_VIDEO_1} title="Interações" />
                  )}
            
                  {index === 1 && (
                     <VideoEmbed videoId={YT_VIDEO_2} title="Cronograma" />
                  )}
            
                  {index === 2 && (
                     <VideoEmbed videoId={YT_VIDEO_3} title="Expresse" />
                  )}

                  {index === 5 && (
                     <VideoEmbed videoId={YT_VIDEO_4} title="Escrita" />
                  )}

                  {index === 8 && (
                     <VideoEmbed videoId={YT_VIDEO_5} title="Textos" />
                  )}

                  {index === 9 && (
                     <VideoEmbed videoId={YT_VIDEO_6} title="Textos" />
                  )}

                  {index === 10 && (
                     <VideoEmbed videoId={YT_VIDEO_7} title="Textos" />
                  )}


                  
            
                  
              </div>
           ))}
        </p>
        <br/><br/>
        <br/><br/>
        <br/><br/>

    </MainLayout>
  );
}

export default Module_01_03_02;
