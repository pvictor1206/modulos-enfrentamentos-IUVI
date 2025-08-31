// components/QuestionnairePrompt/QuestionnairePrompt.jsx
export default function QuestionnairePrompt({
  message = "null",
  buttonLabel = "null",
  href = "#",
  onClick,
  className = "", // opcional, para estilização extra
}) {
  return (
    <section className={`pt-6 pb-10 px-4 sm:px-6 ${className}`}>
      {/* Bloco de texto */}
      <div
        className="
          bg-[#D8D1F5] rounded-t-[14px] shadow-md
          mx-auto w-full sm:w-4/5 md:w-3/5 max-w-[720px]
          p-4 sm:p-5 md:p-6
          flex items-center justify-center
        "
      >
        <p
          className="
            text-[#0C1E33] font-semibold text-center break-words whitespace-pre-line
            text-[16px] sm:text-base md:text-lg leading-relaxed
          "
        >
          {message}
        </p>
      </div>

      {/* Botão */}
      <div className="mx-auto w-full sm:w-4/5 md:w-3/5 max-w-[720px]">
        <a
          href={href}
          onClick={onClick}
          className="
            block text-center select-none
            bg-[#F4F2FF] text-[#0C1E33] font-semibold
            rounded-b-[14px] shadow-md
            h-12 sm:h-[50px] leading-[48px] sm:leading-[50px]
            text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-[#C9BFEF]
            hover:brightness-95 transition
          "
          aria-label={buttonLabel}
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}
