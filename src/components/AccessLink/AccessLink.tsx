import { FaLink } from "react-icons/fa"; // Instale com: npm install react-icons

export default function AccessLink() {
  return (
    <div className="pt-[70px] pb-[150px] lg:pr-[6.5%] lg:pl-[15px]">
        <div className="flex items-center bg-[#F4F2FF] rounded-[7px] p-4 shadow-md w-[75%] mx-auto">
            <FaLink className="text-[#C9BFEF] mr-3" size={20} />
            <p className="text-[#0C1E33] font-semibold text-[16px]">
                LINK PARA ACESSO - TÍTULO DA IMAGEM
            </p>
        </div>
    </div>
  );
}
