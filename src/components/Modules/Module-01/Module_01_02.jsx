import MainLayout from "../../Sidebar/MainLayout";
import ProgressBar from "../../BarProgress/ProgressBar";

function Module_01_02() {
  const progresso = 40;

  return (
    <MainLayout>
      <div className="px-8">
        <h1 className="text-left font-semibold text-[18px] md:text-[25px]">
          Metodologia de Estudo na Educação a Distância - #1.2
        </h1>
        <ProgressBar porcentagem={progresso} />
      </div>
    </MainLayout>
  );
}

export default Module_01_02;
