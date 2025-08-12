// Module_01_01.jsx
import MainLayout from "../../Sidebar/MainLayout";
import { AiOutlineRight } from "react-icons/ai"; // topo do arquivo
import MobileBottomBar from "../../Mobile/MobileBottomBar";

function Module_01_01() {
  return (
    <MainLayout>
      <div className="pr-8"> {/* padding opcional à direita */}
        <h1 className="title-module">
          Metodologia de Estudo na Educação a Distância - #1.1
        </h1>

        <div className="Line-After-Title" /></div>

        <div className="hidden md:block">
            <div className="mt-3 ml-auto w-full max-w-[460px] pt-2">
            <div className="flex items-center gap-4">
              <div className="">
                <div className="text-[14px] font-semibold text-right">Próximo</div>
                <div className="text-[14px]">
                  Metodologia de Estudo na Educação a Distância - #1.2
                </div>
              </div>

              <img
                src="/Task List Pin Streamline Ultimate Regular - Free.png" /* arquivo em /public */
                alt=""
                className="w-[40px] h-[40px]"
              />
              <AiOutlineRight className="w-[20px] h-[20px] text-slate-500" />
            </div>
          </div>
          <hr className="border-0 h-px bg-[#F4F2FF] my-4" />
        </div>

        {/* tab bar só no mobile */}
        <MobileBottomBar to="/#" text="Próximo" />
        

    </MainLayout>
  );
}

export default Module_01_01;
