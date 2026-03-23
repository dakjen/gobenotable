const items = [
  "Go Be Notable",
  "Brand · Platform · Revenue",
  "Notable by DakJen Creative LLC",
  "For High-Performing Women Founders",
  "We Build Your Platform",
  "Go Be Notable",
  "Brand · Platform · Revenue",
  "Notable by DakJen Creative LLC",
  "For High-Performing Women Founders",
  "We Build Your Platform",
];

export default function Ticker() {
  return (
    <div className="fixed top-[58px] left-0 right-0 z-40 overflow-hidden bg-crimson py-[9px]">
      <div className="animate-ticker flex w-max">
        {items.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-[10px] font-semibold tracking-[3.5px] uppercase text-white/90 px-10"
          >
            {item}
            <span className="text-white/30"> · </span>
          </span>
        ))}
      </div>
    </div>
  );
}
