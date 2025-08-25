import MainLayout from "../../Sidebar/MainLayout";
import ProgressBar from "../../BarProgress/ProgressBar";

import { AiOutlineRight } from "react-icons/ai"; // topo do arquivo
import { Link } from 'react-router-dom';

import MobileBottomBar from "../../Mobile/MobileBottomBar";

function Module_01_02() {

  return (
    <MainLayout>
      <div className="pr-8"> {/* padding opcional à direita */}
        <h1 className="text-left font-semibold text-[18px] md:text-[25px]">
          Metodologia de Estudo na Educação a Distância - #1.2
        </h1>

        <div className="h-2 bg-[#C9BFEF] rounded-b-lg mt-1 w-[calc(96vw-var(--content-left)-32px)]" /></div>
      <div className="hidden md:block pr-[2%]">
        <div className="mt-3 ml-auto w-full max-w-[460px] pt-[5px]">
          <div className="flex items-center gap-4">
            <div className="">
              <div className="text-[14px] font-semibold text-right">Próximo</div>
              <div className="text-[14px]">
                Metodologia de Estudo na Educação a Distância - #1.3
              </div>
            </div>
            <img
              src="/Task List Pin Streamline Ultimate Regular - Free.png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <Link to='/module_01_03'>
                    <AiOutlineRight className="w-[20px] h-[20px] text-slate-500" />
            </Link>
            
          </div>
        </div>
        <hr className="border-0 h-px bg-[#F4F2FF] my-4" />
      </div>


      <MobileBottomBar to="/#" text="Próximo" />

    </MainLayout>
  );
}

export default Module_01_02;
