function ProgressBar({ porcentagem = 0 }) {
  const pct = Math.round(porcentagem);
  return (
    <div className="w-full" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
      <div className="w-full bg-gray-200 h-1.5">
        <div
          className="bg-[#C9BFEF] h-1.5 transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
