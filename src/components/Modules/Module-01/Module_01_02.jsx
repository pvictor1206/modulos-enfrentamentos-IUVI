import MainLayout from "../../Sidebar/MainLayout";
import { Link } from 'react-router-dom';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import MobileBottomBarBackNext from "../../Mobile/MobileBottomBarBackNext";
import conteudoJSON from '../../../assets/conteudo_textos_02.json';
import ReferenceInfoBox from "../../ReferenceInfoBox/ReferenceInfoBox";
import ReferenceList from "../../ReferenceInfoBox/ReferenceList";


function Module_01_02() {

  return (
    <MainLayout>
      
      <div className="pr-8 pt-[40px]"> {/* padding opcional à direita */}
        <h1 className="text-left font-semibold text-[20px] md:text-[25px]">
          Metodologia de Estudo na Educação a Distância - #1.2
        </h1>

        <div className="h-2 bg-[#d6cfee] rounded-b-lg mt-1 w-[calc(52vw-var(--content-left)-32px)]" /></div>
        
        <div className="hidden md:flex justify-between items-center px-[2%] mt-4">
          {/* Botão Voltar */}
          <Link to="/module_01_01" className="flex items-center gap-3">
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
                Metodologia de Estudo na Educação a Distância - #1.1
              </div>
            </div>
          </Link>

          {/* Botão Próximo */}
          <Link to="/module_01_03_01" className="flex items-center gap-3">
            {/* Texto */}
            <div className="text-right">
              <div className="text-[14px] font-semibold">Próximo</div>
              <div className="text-[14px]">
                Metodologia de Estudo na Educação a Distância - #1.3
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
          Citações e Vídeos
        </h2>
          {conteudoJSON.paragrafo_m02_01.map((texto, index) => (
              <p
                key={index}
                className="text-[16px] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: texto }}
              />
            ))}
        </p>

        <ReferenceInfoBox
          id="source-1"
          quote={`"...Estatísticas recentes publicadas por National Center of Education Statistics indicam que o interesse e a matrícula em cursos online incluem todas as faixas etárias."`}
          reference="Referência 1"
          targetId="ref-1"
        />

        <ReferenceInfoBox
          id="source-2"
          quote={`"Ser alguém que pensa criticamente é parte daquilo que forma a pessoa que se desenvolve. ... Quando os professores, e quem está disposto a ajudar, trabalham desta maneira, estimulam o pensamento crítico. O pensamento crítico é complexo e frequentemente causa perplexidade pois requer a suspensão de crença ou abandono de conceitos aceitos anteriormente..."`}
          reference="Referência 2"
          targetId="ref-2"
        />

        <ReferenceList
          headerOffset={72} // ajuste conforme a altura do seu header fixo
          references={[
            {
              text:
                "Metodologia da aprendizagem em EAD [recurso eletrônico] / autores: Adriana Soares Pereira - [et. al.]. - 1. ed. - Santa Maria, RS : UFSM, NTE, 2017. 1 e-book : il.",
              targetId: "ref-1",  
              sourceId: "source-1" 
            },
            {
              text:
                "Metodologia da aprendizagem em EAD [recurso eletrônico] / autores: Adriana Soares Pereira - [et. al.]. - 1. ed. - Santa Maria, RS : UFSM, NTE, 2017. 1 e-book : il.",
              targetId: "ref-2",   
              sourceId: "source-2"
            },
          ]}
        />

        <MobileBottomBarBackNext
           toPrev="/module_01_01"
           toNext="/module_01_03_01"
           textPrev="Anterior"
           textNext="Próximo"
       />

    </MainLayout>
  );
}

export default Module_01_02;
