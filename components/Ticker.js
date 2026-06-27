import { TICKER_DATA } from '../data/marketData';

export default function Ticker() {
  const items = [...TICKER_DATA, ...TICKER_DATA];
  return (
    <div className="bg-[#0A0E1A] border-b border-[#1E2D4A] overflow-hidden py-2">
      <div className="flex">
        <div className="ticker-inner flex gap-8 whitespace-nowrap">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-2 text-xs font-mono">
              <span className="text-[#64748B]">{item.label}</span>
              <span className="text-[#E2E8F0] font-semibold">{item.value}</span>
              <span className={item.up ? 'text-[#10B981]' : 'text-[#EF4444]'}>
                {item.up ? '▲' : '▼'} {item.change}
              </span>
              <span className="text-[#1E2D4A] mx-2">|</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
