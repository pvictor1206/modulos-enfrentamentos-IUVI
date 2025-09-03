import { GoArrowUp } from "react-icons/go";

export default function ReferenceList({ references, headerOffset = 0 }) {
  // references: [{ text: string, targetId: string, sourceId: string }]
  const scrollToTarget = (targetId) => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-start text-lg font-semibold mb-[40px]">Referências</h2>
      <ul className="text-start space-y-4 text-sm text-[#0C1E33] leading-relaxed">
        {references.map((ref, i) => (
          <li key={ref.targetId} id={ref.targetId} className="flex items-start gap-2">
            <span className="font-medium">{i + 1}:</span>
            <span className="flex-1">{ref.text}</span>
            <button
              type="button"
              onClick={() => scrollToTarget(ref.sourceId)}
              className="p-1 rounded hover:bg-gray-100"
              aria-label={`Ir para a citação ${i + 1}`}
              title="Ir para a citação"
            >
              <GoArrowUp className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
