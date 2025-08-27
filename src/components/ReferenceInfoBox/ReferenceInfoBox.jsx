import { GoArrowDown } from "react-icons/go";

export default function ReferenceInfoBox() {
  return (
    <div className="pt-[10px] pb-[70px]">
        <div className="flex bg-white border-l-5 border-[#C9BFEF] rounded-md shadow-md p-4 max-w-3xl mx-auto">
          <div className="mr-4 text-purple-500">
          </div>
          <div className="flex-1">
            <p className="italic text-[#0C1E33] text-[16px] leading-relaxed">
              "...Estatísticas recentes publicadas por <strong>National Center of Education Statistics</strong> indicam que o interesse e a matrícula em cursos online incluem todas as faixas etárias."
            </p>
            <div className="flex items-center justify-end gap-2 mt-2">
              <p className="italic text-sm text-[#0C1E33]">Referência 1</p>
              <GoArrowDown />
            </div>
          </div>
        </div>
    </div>
  );
}

