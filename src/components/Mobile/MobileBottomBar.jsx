import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";

export default function MobileBottomBar({ to, text = "Próximo" }) {
  return (
    <div className="fixed bottom-0 md:hidden ">
      <div className="bg-white p-4 rounded-t shadow-lg flex justify-end w-88">

      <Link
        to={to}
        className="inline-flex items-center justify-center gap-4
                   rounded-full bg-[#44257A] text-white px-[30px] py-3
                   shadow-lg active:scale-[0.99] transition"
      >
        <span className="text-[16px] font-medium">{text}</span>
        <GrLinkNext className="h-5 w-5" />
      </Link>
      </div>
    </div>
  );
}



