import { Link } from "react-router-dom";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

export default function MobileBottomBarBackNext({
  toNext,
  toPrev,
  textNext = "Próximo",
  textPrev = "Voltar",
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 md:hidden z-50">
      {/* barra branca full width */}
      <div className="bg-white px-4 py-3 rounded-t shadow-lg flex justify-between items-center">
        
        {/* Botão Voltar */}
        {toPrev ? (
          <Link
            to={toPrev}
            className="inline-flex items-center justify-center gap-2
                       rounded-full bg-[#44257A] text-white px-5 py-2
                       shadow-md active:scale-[0.99] transition"
          >
            <GrLinkPrevious className="h-4 w-4" />
            <span className="text-[14px] font-medium">{textPrev}</span>
          </Link>
        ) : (
          <span /> // se não tiver botão voltar, mantém espaço
        )}

        {/* Botão Próximo */}
        {toNext && (
          <Link
            to={toNext}
            className="inline-flex items-center justify-center gap-2
                       rounded-full bg-[#44257A] text-white px-5 py-2
                       shadow-md active:scale-[0.99] transition"
          >
            <span className="text-[14px] font-medium">{textNext}</span>
            <GrLinkNext className="h-4 w-4" />
          </Link>
        )}
      </div>

      {/* Espaço extra para safe-area em iOS */}
      <div className="bg-white h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}
