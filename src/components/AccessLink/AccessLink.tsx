// components/AccessLink/AccessLink.jsx
import { FaLink } from "react-icons/fa";

export default function AccessLink({
  label = "LINK PARA ACESSO - TÍTULO DA IMAGEM",
  href,                       // opcional: se vier, vira um <a>
  target = "_blank",
  rel = "noopener noreferrer",
  className = "",
  widthClass = "",            // opcional: para customizar as larguras
}) {
  const containerWidth =
    widthClass || "w-[92%] sm:w-4/5 md:w-3/4 lg:w-2/3 xl:";

  const Box = (
    <div className="flex items-center gap-3 bg-[#F4F2FF] rounded-[7px] p-3 sm:p-4 shadow-md">
      <FaLink className="text-[#C9BFEF] flex-shrink-0" size={18} />
      <p className="text-[#0C1E33] font-semibold text-sm sm:text-base break-words">
        {label}
      </p>
    </div>
  );

  return (
    <section className={`pt-[70px] pb-[80px] lg:pr-[6.5%] lg:pl-[15px] ${className}`}>
      <div className={`mx-auto ${containerWidth}`}>
        {href ? (
          <a
            href={href}
            target={target}
            rel={rel}
            className="block hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#C9BFEF] transition"
          >
            {Box}
          </a>
        ) : (
          Box
        )}
      </div>
    </section>
  );
}
