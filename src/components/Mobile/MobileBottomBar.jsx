import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";

export default function MobileBottomBar({ to, text = "Próximo" }) {
  return (
    // ocupa toda a largura da viewport, independente de paddings do layout
    <div className="fixed inset-x-0 bottom-0 md:hidden z-50">
      {/* barra branca full-bleed */}
      <div className="bg-white px-4 py-3 rounded-t shadow-lg">
        <div className="flex justify-end">
          <Link
            to={to}
            className="inline-flex items-center justify-center gap-2
                       rounded-full bg-[#44257A] text-white px-5 py-2
                       shadow-md active:scale-[0.99] transition"
          >
            <span className="text-[14px] font-medium">{text}</span>
            <GrLinkNext className="h-4 w-4" />
          </Link>
        </div>
      </div>
      {/* opcional: garantir espaço p/ a área segura do iOS */}
      <div className="bg-white h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}
