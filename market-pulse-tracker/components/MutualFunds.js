import { useState } from 'react';
import { INDIA_MF, US_MF } from '../data/marketData';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const RISK_COLORS = {
  'Low': '#10B981',
  'Low-Medium': '#06B6D4',
  'Medium': '#3B82F6',
  'High': '#F59E0B',
  'Very High': '#EF4444',
};

const RISK_CLASS = {
  'Low': 'risk-low',
  'Low-Medium': 'risk-low',
  'Medium': 'risk-medium',
  'High': 'risk-high',
  'Very High': 'risk-high',
};

function RiskBadge({ level }) {
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${RISK_CLASS[level] || 'risk-medium'}`}>
      {level}
    </span>
  );
}

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(s => (
        <span key={s} className={s <= rating ? 'text-[#F59E0B]' : 'text-[#1E2D4A]'}>★</span>
      ))}
    </div>
  );
}

function FundCard({ fund, currency }) {
  const [open, setOpen] = useState(false);
  const returns = [
    { period: '1Y', value: parseFloat(fund.returns['1Y']) },
    { period: '3Y', value: parseFloat(fund.returns['3Y']) },
    { period: '5Y', value: parseFloat(fund.returns['5Y']) },
  ];
  return (
    <div className="glass-card mb-4 overflow-hidden transition-all duration-200">
      <button
        className="w-full text-left p-4 hover:bg-[#1E2D4A]/30 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-xs font-mono text-[#3B82F6] bg-[#3B82F6]/10 px-2 py-0.5 rounded">{fund.category}</span>
              <RiskBadge level={fund.risk} />
            </div>
            <h3 className="font-semibold text-[#E2E8F0] text-sm md:text-base leading-snug">{fund.name}</h3>
            <div className="flex items-center gap-3 mt-1 flex-wrap">
              <StarRating rating={fund.rating} />
              <span className="text-xs text-[#64748B]">AUM: {fund.aum}</span>
              <span className="text-xs text-[#64748B]">Exp: {fund.expense}</span>
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="text-lg font-bold text-[#10B981]">{fund.returns['5Y']}</div>
            <div className="text-xs text-[#64748B]">5Y Return</div>
            <div className="text-xs text-[#E2E8F0] mt-1">
              NAV: {currency}{typeof fund.nav === 'number' ? fund.nav.toLocaleString() : fund.nav}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-2 text-xs text-[#64748B]">
          <span>{open ? '▲ Hide details' : '▼ Show analysis'}</span>
        </div>
      </button>

      {open && (
        <div className="border-t border-[#1E2D4A] p-4 space-y-4">
          {/* Returns chart */}
          <div>
            <div className="text-xs text-[#64748B] uppercase tracking-wider mb-2">Historical Returns</div>
            <ResponsiveContainer width="100%" height={100}>
              <BarChart data={returns} barSize={32}>
                <XAxis dataKey="period" tick={{ fill: '#64748B', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis hide domain={[0, 'dataMax + 5']} />
                <Tooltip
                  contentStyle={{ background: '#141C2E', border: '1px solid #1E2D4A', borderRadius: 8, color: '#E2E8F0', fontSize: 12 }}
                  formatter={(v) => [`${v}%`, 'Return']}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {returns.map((_, i) => (
                    <Cell key={i} fill={['#3B82F6', '#06B6D4', '#10B981'][i]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Rationale */}
          <div>
            <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Why This Fund</div>
            <p className="text-sm text-[#94A3B8] leading-relaxed">{fund.rationale}</p>
          </div>

          {/* Investment details */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#0A0E1A] rounded-lg p-3">
              <div className="text-xs text-[#64748B] mb-1">📅 SIP Suggestion</div>
              <div className="text-sm font-semibold text-[#10B981]">{fund.sipRecommend}</div>
            </div>
            <div className="bg-[#0A0E1A] rounded-lg p-3">
              <div className="text-xs text-[#64748B] mb-1">💰 Lumpsum Suggestion</div>
              <div className="text-sm font-semibold text-[#3B82F6]">{fund.lumpRecommend}</div>
            </div>
            <div className="bg-[#0A0E1A] rounded-lg p-3">
              <div className="text-xs text-[#64748B] mb-1">🎯 Strategy</div>
              <div className="text-xs text-[#E2E8F0]">{fund.investStyle}</div>
            </div>
            <div className="bg-[#0A0E1A] rounded-lg p-3">
              <div className="text-xs text-[#64748B] mb-1">⚠️ Overlap Note</div>
              <div className="text-xs text-[#E2E8F0]">{fund.overlap || 'None identified'}</div>
            </div>
          </div>

          <div className="flex gap-3 text-xs">
            <div className="bg-[#0A0E1A] rounded-lg p-3 flex-1">
              <span className="text-[#64748B]">Min SIP: </span>
              <span className="text-[#E2E8F0] font-semibold">{currency}{fund.minSIP}</span>
            </div>
            <div className="bg-[#0A0E1A] rounded-lg p-3 flex-1">
              <span className="text-[#64748B]">Min Lumpsum: </span>
              <span className="text-[#E2E8F0] font-semibold">{currency}{fund.minLumpsum.toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const CATEGORIES_INDIA = ['All', 'Equity – Large Cap', 'Equity – Flexi Cap', 'Equity – Mid Cap', 'Equity – Sectoral (Technology)', 'Equity – Sectoral (Consumption)', 'Hybrid – Dynamic Asset Allocation', 'Debt – Short Duration', 'Debt – Corporate Bond', 'ELSS – Tax Saving (Equity)'];
const CATEGORIES_US = ['All', 'Equity – Large Cap Index', 'Equity – Technology Heavy', 'Equity – Total Market', 'Equity – Disruptive Innovation', 'Equity – Clean Energy', 'Hybrid – REIT', 'Debt – US Investment Grade'];

export default function MutualFunds() {
  const [market, setMarket] = useState('india');
  const [filter, setFilter] = useState('All');
  const funds = market === 'india' ? INDIA_MF : US_MF;
  const categories = market === 'india' ? CATEGORIES_INDIA : CATEGORIES_US;
  const currency = market === 'india' ? '₹' : '$';
  const filtered = filter === 'All' ? funds : funds.filter(f => f.category === filter);

  // Summary stats
  const lowRisk = funds.filter(f => f.risk === 'Low' || f.risk === 'Low-Medium').length;
  const medRisk = funds.filter(f => f.risk === 'Medium').length;
  const highRisk = funds.filter(f => f.risk === 'High' || f.risk === 'Very High').length;

  return (
    <div>
      {/* Market Toggle */}
      <div className="flex gap-2 mb-6">
        {['india', 'us'].map(m => (
          <button
            key={m}
            onClick={() => { setMarket(m); setFilter('All'); }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
              market === m
                ? 'bg-[#3B82F6] text-white shadow-lg shadow-blue-500/20'
                : 'bg-[#141C2E] text-[#64748B] hover:text-[#E2E8F0] border border-[#1E2D4A]'
            }`}
          >
            {m === 'india' ? '🇮🇳 India MF' : '🇺🇸 US ETF'}
          </button>
        ))}
      </div>

      {/* Risk Summary Bar */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="glass-card p-3 text-center">
          <div className="text-2xl font-bold text-[#10B981]">{lowRisk}</div>
          <div className="text-xs text-[#64748B] mt-0.5">Low Risk</div>
        </div>
        <div className="glass-card p-3 text-center">
          <div className="text-2xl font-bold text-[#3B82F6]">{medRisk}</div>
          <div className="text-xs text-[#64748B] mt-0.5">Medium Risk</div>
        </div>
        <div className="glass-card p-3 text-center">
          <div className="text-2xl font-bold text-[#EF4444]">{highRisk}</div>
          <div className="text-xs text-[#64748B] mt-0.5">High Risk</div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 ${
              filter === cat
                ? 'bg-[#3B82F6] text-white'
                : 'bg-[#141C2E] text-[#64748B] border border-[#1E2D4A] hover:border-[#3B82F6] hover:text-[#E2E8F0]'
            }`}
          >
            {cat === 'All' ? `All (${funds.length})` : cat.replace('Equity – ', '').replace('Debt – ', '').replace('Hybrid – ', '')}
          </button>
        ))}
      </div>

      {/* Fund Cards */}
      <div>
        {filtered.length === 0 ? (
          <div className="glass-card p-8 text-center text-[#64748B]">No funds match this filter.</div>
        ) : (
          filtered.map(fund => <FundCard key={fund.id} fund={fund} currency={currency} />)
        )}
      </div>
    </div>
  );
}
