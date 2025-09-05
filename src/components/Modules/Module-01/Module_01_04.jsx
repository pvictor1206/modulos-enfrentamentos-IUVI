import MainLayout from "../../Sidebar/MainLayout";
import { Link } from 'react-router-dom';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import MobileBottomBar from "../../Mobile/MobileBottomBar";
import QuestionnairePrompt from "../../QuestionnairePrompt/QuestionnairePrompt ";
import ReferenceInfoBox from "../../ReferenceInfoBox/ReferenceInfoBox";
import ReferenceList from "../../ReferenceInfoBox/ReferenceList";
import AccessLink from "../../AccessLink/AccessLink"
import DropdownContent from "../../DropdownContent/DropdownContent";
import UseScrollProgress from "../../BarProgress/useScrollProgress";
import ComparisonTable from "../../Table/ComparisonTable";

function Module_01_04() {

  const rows = [
    { left: "Centro geográfico de ensino: sala de aula", right: "O aluno estuda onde e quando desejar" },
    { left: "Ênfase na interação social presencial", right: "Ênfase na interação social ocorrida em AVAs" },
    { left: "Ênfase na interação", right: "Ênfase na mediação" },
    { left: "Situações de ensino controladas pelo professor", right: "Aprendizagem independente e autônoma" },
    { left: "Um só tipo de docente", right: "Conteúdos, tutores (presenciais e/ou virtuais), professores (formadores)" },
    { left: "Maior possibilidade do professor ser percebido como “fonte de conhecimento”", right: "Mediação realizada, essencialmente, por tutores" },
    { left: "Recursos didáticos usuais", right: "Recursos didáticos baseados nas TICs" },
    { left: "Comunicação direta", right: "Comunicação diferenciada no espaço e no tempo" },
    { left: "Foco no atendimento direto ao aluno", right: "Foco no auxílio para que o estudante se organize e busque o conhecimento em locais e horários definidos por ele próprio" },
  ];

  return (
    <MainLayout>
      
      <div className="pr-8 pt-[40px]"> {/* padding opcional à direita */}
        <h1 className="text-left font-semibold text-[20px] md:text-[25px]">
          Metodologia de Estudo na Educação a Distância - #1.4
        </h1>

        <div className="h-2 bg-[#d6cfee] rounded-b-lg mt-1 w-[calc(52vw-var(--content-left)-32px)]" /></div>
        
        <div className="hidden md:flex justify-between items-center px-[2%] mt-4">
          {/* Botão Voltar */}
          <Link to="/module_01_03_02" className="flex items-center gap-3">
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
                Metodologia de Estudo na Educação a Distância - #1.3.2
              </div>
            </div>
          </Link>
        </div>

        <hr className="border-0 h-px bg-[#F4F2FF] my-4" />

        <div className="lg:pl-[20%]">

            <div className="p-4">
              <ComparisonTable
                title="Diferenças Entre Alunos e Alunas Presenciais e EaD"
                leftHeader="PRESENCIAL"
                rightHeader="EaD"
                rows={rows}
                footnote="Texto da fonte/observação opcional."
                className="my-1"
              />
          </div>

          <br /><br />


          <ReferenceInfoBox
            id="source-4"
            quote={`“O espaço na EaD está ligado ao fato de não ser necessária a utilização do mesmo espaço físico, de forma simultânea, por alunos, tutores e professores, para que os processos de ensino e de aprendizagem aconteçam. Os espaços de encontros se multiplicam e se subdividem. Professores, tutores e alunos comunicam-se em um ambiente de interação síncrona ou assíncrona, com a utilização de recursos tecnológicos, sem barreiras espaciais ou temporais. Um dos espaços mais utilizados em EaD é a sala de aula virtual, materializada pelo AVA. A presença do aluno se faz por meio das atividades e de estudos propostos pelo curso.“`}
            reference="Referência 4"
            targetId="ref-4"
          />

          <br/><br/>

          <ReferenceList
            headerOffset={72} // ajuste conforme a altura do seu header fixo
            references={[
              {
                text:
                  "Metodologia da aprendizagem em EAD [recurso eletrônico] / autores: Adriana Soares Pereira - [et. al.]. - 1. ed. - Santa Maria, RS : UFSM, NTE, 2017. 1 e-book : il.",
                targetId: "ref-3",  
                sourceId: "source-3" 
              },
              {
                text:
                  "Metodologia da aprendizagem em EAD [recurso eletrônico] / autores: Adriana Soares Pereira - [et. al.]. - 1. ed. - Santa Maria, RS : UFSM, NTE, 2017. 1 e-book : il.",
                targetId: "ref-4",   
                sourceId: "source-4"
              },
            ]}
          />


        </div>

    </MainLayout>
  );
}

export default Module_01_04;
