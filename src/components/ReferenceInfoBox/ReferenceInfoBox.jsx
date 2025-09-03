import { GoArrowDown } from "react-icons/go";

export default function ReferenceInfoBox({ id, quote, reference, targetId, headerOffset = 0 }) {
  const scrollToTarget = (targetId) => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div id={id} className="pt-[10px] pb-[20px]">
      <div className="flex bg-white border-l-5 border-[#C9BFEF] rounded-md shadow-md p-4 max-w-3xl mx-auto">
        <div className="flex-1">
          <p
            className="italic text-[#0C1E33] text-[16px] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: quote }}
          />
          <div className="flex items-center justify-end gap-2 mt-2">
            <p className="italic text-sm text-[#0C1E33]">{reference}</p>
            <button
              type="button"
              onClick={() => scrollToTarget(targetId)}
              className="p-1 rounded hover:bg-gray-100"
              aria-label="Ir para referência"
              title="Ir para referência"
            >
              <GoArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
