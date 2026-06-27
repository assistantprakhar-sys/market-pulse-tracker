import { PORTFOLIO_SPLIT, META } from '../data/marketData';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

function AllocationPie({ data, title }) {
  return (
    <div className="glass-card p-4">
      <div className="text-sm font-semibold text-[#E2E8F0] mb-3">{title}</div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            paddingAngle={3}
            dataKey="pct"
            nameKey="name"
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} strokeWidth={0} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ background: '#141C2E', border: '1px solid #1E2D4A', borderRadius: 8, color: '#E2E8F0', fontSize: 12 }}
            formatter={(v, n) => [`${v}%`, n]}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="space-y-1.5 mt-2">
        {data.map((item, i) => (
          <div key={i} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: item.color }} />
              <span className="text-[#94A3B8]">{item.name}</span>
            </div>
            <span className="font-mono font-semibold text-[#E2E8F0]">{item.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const PRINCIPLES = [
  {
    icon: '🎯',
    title: 'Long-term MF + Mid-term Stocks',
    body: 'Mutual funds are your wealth compounders — hold for 5–10 years minimum. Individual stocks are your alpha generators — review every 6 months.',
  },
  {
    icon: '⚖️',
    title: 'SIP Beats Timing',
    body: 'Invest a fixed amount every month regardless of market levels. This averages your cost and removes the emotion from investing.',
  },
  {
    icon: '🔄',
    title: 'Rebalance Annually',
    body: 'If any asset crosses 5% above its target allocation, trim it and add to the laggards. This forces you to buy low and sell high systematically.',
  },
  {
    icon: '🛡️',
    title: 'Hold 6-Month Emergency Fund',
    body: 'Never invest money you may need in 1 year. Keep 6 months of expenses in a liquid fund or savings account before starting equities.',
  },
  {
    icon: '🌍',
    title: 'Geographic Diversification',
    body: 'India exposure gives you domestic growth. US exposure gives you dollar hedging and tech sector access. Both together reduce single-country risk.',
  },
  {
    icon: '📊',
    title: 'Review This Dashboard Weekly',
    body: 'The 7-day cadence is deliberate. You should review macro signals, not individual stock prices. Act only on data, not on daily noise.',
  },
];

const WATCHLIST_INDICATORS = [
  { name: 'Nifty PE Ratio', value: '22.4x', signal: 'Fair Value', color: '#3B82F6', note: 'Above 25x = expensive; below 18x = cheap' },
  { name: 'India VIX', value: '13.4', signal: 'Low Fear', color: '#10B981', note: 'Below 15 = calm market; above 25 = high fear' },
  { name: 'US 10Y Yield', value: '4.23%', signal: 'Watch', color: '#F59E0B', note: 'Rising yields = pressure on growth stocks' },
  { name: 'USD/INR', value: '83.52', signal: 'Stable', color: '#10B981', note: 'Above 86 = negative for India imports and inflation' },
  { name: 'Crude Oil (WTI)', value: '$76.4', signal: 'Manageable', color: '#3B82F6', note: 'Above $90 = inflation risk for India; negative for MF' },
  { name: 'India GST Collection', value: '₹2.1L Cr', signal: 'Strong', color: '#10B981', note: 'High GST = strong economy = positive for equities' },
];

export default function Portfolio() {
  return (
    <div className="space-y-6">
      {/* Last updated notice */}
      <div className="bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-xl p-3 flex items-start gap-3">
        <span className="text-[#3B82F6] text-lg shrink-0">📅</span>
        <div className="text-xs text-[#94A3B8]">
          <span className="text-[#E2E8F0] font-semibold">Last updated: </span>{META.lastUpdated} &nbsp;|&nbsp;
          <span className="text-[#E2E8F0] font-semibold">Next refresh: </span>{META.nextRefresh} &nbsp;|&nbsp;
          Cadence: {META.refreshCadence}
        </div>
      </div>

      {/* Allocation Charts */}
      <div>
        <div className="text-base font-bold text-[#E2E8F0] mb-3">📊 Suggested Portfolio Allocation</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AllocationPie data={PORTFOLIO_SPLIT.india} title="🇮🇳 India Portfolio" />
          <AllocationPie data={PORTFOLIO_SPLIT.us} title="🇺🇸 US Portfolio" />
        </div>
      </div>

      {/* Macro Watchlist */}
      <div>
        <div className="text-base font-bold text-[#E2E8F0] mb-3">🔭 Macro Watchlist</div>
        <div className="grid grid-cols-1 gap-3">
          {WATCHLIST_INDICATORS.map((ind, i) => (
            <div key={i} className="glass-card p-3 flex items-center justify-between gap-3">
              <div className="flex-1">
                <div className="text-xs text-[#64748B]">{ind.name}</div>
                <div className="text-xs text-[#94A3B8] mt-0.5">{ind.note}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="font-mono font-bold text-sm" style={{ color: ind.color }}>{ind.value}</div>
                <div className="text-xs mt-0.5" style={{ color: ind.color }}>{ind.signal}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Investment Principles */}
      <div>
        <div className="text-base font-bold text-[#E2E8F0] mb-3">🧭 Investment Principles</div>
        <div className="grid gap-3">
          {PRINCIPLES.map((p, i) => (
            <div key={i} className="glass-card p-4 flex gap-3">
              <span className="text-2xl shrink-0">{p.icon}</span>
              <div>
                <div className="font-semibold text-sm text-[#E2E8F0] mb-1">{p.title}</div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-[#EF4444]/5 border border-[#EF4444]/20 rounded-xl p-4">
        <div className="text-xs font-bold text-[#EF4444] mb-1">⚠️ Important Disclaimer</div>
        <p className="text-xs text-[#94A3B8] leading-relaxed">{META.disclaimer}</p>
      </div>
    </div>
  );
}
