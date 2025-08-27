import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export default function DropdownContent({ title, text, imageUrl, altText }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:pr-[18%] lg:pl-[170px]">
        <div className="border border-[#F9F8FF] rounded-lg shadow-md">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center px-4 py-3 bg-[#F9F8FF] text-[#0C1E33] font-semibold rounded-t-lg hover:bg-purple-100 transition"
            >
                <span className="text-[16px]">{title}</span>
                {isOpen ? <GoChevronUp size={20} /> : <GoChevronDown size={20} />}
            </button>

            {isOpen && (
                <div className="px-4 py-3 bg-[#F9F8FF] rounded-b-lg">
                <p className="text-[16px] text-justify text-black mb-4">{text}</p>
                {imageUrl && (
                    <div className="flex justify-center">
                        <img
                            src={imageUrl}
                            alt={altText || "Imagem"}
                            className="rounded-md shadow-sm"
                        />
                    </div>
                )}
                </div>
            )}
            </div>
    </div>
  );
}
