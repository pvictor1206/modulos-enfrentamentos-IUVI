import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

export default function MobileBottomBar({ to, text = "Próximo" }) {
  return (
    <div className="fixed bottom-4 right-[28px] z-50 md:hidden pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)]">
      <Link
        to={to}
        className="inline-flex items-center justify-center gap-2
                   rounded-full bg-[#44257A] text-white px-[40px] py-3
                   shadow-lg active:scale-[0.99] transition"
      >
        <span className="text-sm font-medium">{text}</span>
        <AiOutlineRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

