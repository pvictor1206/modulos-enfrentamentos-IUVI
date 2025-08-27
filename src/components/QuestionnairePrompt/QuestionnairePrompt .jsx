
export default function QuestionnairePrompt() {
  return (
    <div className="pt-[28px] pb-[58px] pr-[60px]">
      <div className="bg-[#D8D1F5] rounded-t-[14px] w-[60%] h-[100px] mx-auto text-center shadow-md flex items-center justify-center p-4">
        <p className="text-[18px] text-[#0C1E33] font-semibold">
          É importantíssimo que vocês respondam esse questionário antes de qualquer coleta de informações, consulta ou estudo sobre os temas que vamos trabalhar.
        </p>
      </div>
      <div className="flex justify-center">
        <button className="text-[14px] font-semibold bg-[#F4F2FF] w-[60%] h-[50px] rounded-b-[14px] shadow-md">
          RESPONDER QUESTIONÁRIO
        </button>
      </div>
    </div>
  );
}
