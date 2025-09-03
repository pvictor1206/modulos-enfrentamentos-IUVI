// ComparisonTable.jsx
export default function ComparisonTable({
  title,
  leftHeader = "Presencial",
  rightHeader = "EaD",
  rows = [],
  footnote,
  className = "",
  colors = {
    headBg: "#D8D1F5",   // lilás do cabeçalho
    headText: "#343A40",
    zebra: "#E5DFFB",    // faixa clara alternada
    zebra_two: "#F4F2FF",    // faixa clara alternada
    border: "#CBBEF2",   // divisões horizontais
    divider: "#FFF",  // linha vertical entre colunas
    caption: "#0C1E33",
  },
}) {
  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      {title && (
        <h3 className="text-left pb-[12px] text-[16px] md:text-[18px] font-semibold text-[#0C1E33] mb-2">
          {title}{footnote ? <sup>3</sup> : null}
        </h3>
      )}

      {/* Sem ring (remove a borda preta). Mantém cantos e clipping. */}
      <div className="rounded-md overflow-hidden bg-white">
        {/* Cabeçalho */}
        <div
          className="grid grid-cols-2 text-center text-[13px] md:text-[14px] font-semibold"
          style={{ backgroundColor: colors.headBg, color: colors.headText }}
        >
          <div className="py-3 uppercase">{leftHeader}</div>
          <div
            className="py-3 uppercase"
            style={{ borderLeft: `3px solid ${colors.divider}` }}
          >
            {rightHeader}
          </div>
        </div>

        {/* Linhas */}
        <div>
          {rows.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-2 text-[13px] md:text-[14px]"
              style={{
                backgroundColor: i % 2 === 1 ? colors.zebra : colors.zebra_two,
                // usamos borda superior por linha (em vez de divide-y) para controlar a cor
                borderTop: `1px solid ${colors.border}`,
              }}
            >
              <div className="px-4 py-3 text-center">{r.left}</div>
              <div
                className="px-4 py-3 text-center"
                // borda à esquerda contínua em toda a coluna direita
                style={{ borderLeft: `3px solid ${colors.divider}` }}
              >
                {r.right}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*{footnote && (
        <p className="mt-2 text-[12px]" style={{ color: colors.caption }}>
          <sup>1</sup> {footnote}
        </p>
      )}*/}
    </div>
  );
}
