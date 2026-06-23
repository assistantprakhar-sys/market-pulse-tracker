import { useState } from 'react';
import { INDIA_SECTORS, US_SECTORS } from '../data/marketData';
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Cell, LineChart, Line,
} from 'recharts';

const RISK_COLORS = { 'Low': '#10B981', 'Medium': '#3B82F6', 'Medium-High': '#06B6D4', 'High': '#F59E0B', 'Very High': '#EF4444' };

function ConvictionBar({ value }) {
  const color = value >= 90 ? '#10B981' : value >= 80 ? '#3B82F6' : '#F59E0B';
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-[#1E2D4A] rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${value}%`, background: color }} />
      </div>
      <span className="text-xs font-mono font-semibold" style={{ color }}>{value}%</span>
    </div>
  );
}

function GeopoliticsPanel({ geo }) {
  return (
    <div className="bg-[#0A0E1A] rounded-xl p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-[#E2E8F0] flex items-center gap-2">
          🌍 Geopolitical Risk
        </div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
          geo.risk === 'Low' ? 'risk-low' : geo.risk.includes('High') || geo.risk === 'Very High' ? 'risk-high' : 'risk-medium'
        }`}>{geo.risk}</span>
      </div>
      <div>
        <div className="text-xs text-[#64748B] uppercase tracking-wider mb-2">Key Geo Factors</div>
        <ul className="space-y-1.5">
          {geo.factors.map((f, i) => (
            <li key={i} className="flex gap-2 text-xs text-[#94A3B8]">
              <span className="text-[#F59E0B] mt-0.5 shrink-0">◆</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="text-xs text-[#64748B] uppercase tracking-wider mb-2">📡 Indicators to Track</div>
        <ul className="space-y-1.5">
          {geo.keyIndicators.map((ind, i) => (
            <li key={i} className="flex gap-2 text-xs text-[#94A3B8]">
              <span className="text-[#3B82F6] mt-0.5 shrink-0">→</span>
              <span>{ind}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StockCard({ stock, currency }) {
  return (
    <div className="bg-[#0A0E1A] rounded-xl p-4 border border-[#1E2D4A] hover:border-[#3B82F6]/40 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <div className="font-mono font-bold text-[#3B82F6] text-sm">{stock.ticker}</div>
          <div className="text-xs text-[#E2E8F0] mt-0.5 leading-snug">{stock.name}</div>
        </div>
        <div className="text-right shrink-0">
          <div className="text-sm font-bold text-[#10B981]">↑ {stock.upside}</div>
          <div className="text-xs text-[#64748B]">Upside</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
        <div>
          <span className="text-[#64748B]">CMP: </span>
          <span className="text-[#E2E8F0] font-semibold">{currency}{typeof stock.price === 'number' ? stock.price.toLocaleString() : stock.price}</span>
        </div>
        <div>
          <span className="text-[#64748B]">Target: </span>
          <span className="text-[#10B981] font-semibold">{currency}{typeof stock.targetPrice === 'number' ? stock.targetPrice.toLocaleString() : stock.targetPrice}</span>
        </div>
        <div>
          <span className="text-[#64748B]">Mkt Cap: </span>
          <span className="text-[#E2E8F0]">{stock.mktCap}</span>
        </div>
        {stock.pe && (
          <div>
            <span className="text-[#64748B]">P/E: </span>
            <span className="text-[#E2E8F0]">{stock.pe}x</span>
          </div>
        )}
      </div>
      <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">{stock.rationale}</p>
      <div className="flex gap-2 flex-wrap">
        <div className="bg-[#141C2E] rounded-lg px-2 py-1.5 text-xs">
          <span className="text-[#64748B]">📊 Volume: </span>
          <span className="text-[#3B82F6] font-semibold">{stock.suggestedVolume}</span>
        </div>
        <div className="bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-lg px-2 py-1.5 text-xs text-[#EF4444] flex-1">
          ⚠ {stock.riskNote}
        </div>
      </div>
    </div>
  );
}

function SectorCard({ sector, currency }) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const radarData = sector.growthIndicators.map(g => ({ subject: g.label, value: g.value, fullMark: 100 }));

  return (
    <div className="glass-card mb-5 overflow-hidden">
      <button
        className="w-full text-left p-4 hover:bg-[#1E2D4A]/20 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-2xl">{sector.emoji}</span>
              <h3 className="font-bold text-[#E2E8F0] text-base">{sector.sector}</h3>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                sector.riskIndex === 'High' ? 'risk-high' : sector.riskIndex === 'Medium-High' ? 'risk-medium' : 'risk-medium'
              }`}>{sector.riskIndex} Risk</span>
            </div>
            <p className="text-xs text-[#64748B] mb-2">Horizon: {sector.horizon}</p>
            <div>
              <div className="text-xs text-[#64748B] mb-1">Conviction Score</div>
              <ConvictionBar value={sector.conviction} />
            </div>
          </div>
          <div className="text-center shrink-0">
            <div className="text-xs font-mono text-[#64748B] bg-[#0A0E1A] rounded-lg px-3 py-2">
              {sector.stocks.length} stocks
            </div>
          </div>
        </div>
        <div className="mt-2 text-xs text-[#64748B]">{open ? '▲ Collapse' : '▼ Full Analysis'}</div>
      </button>

      {open && (
        <div className="border-t border-[#1E2D4A]">
          {/* Sub tabs */}
          <div className="flex border-b border-[#1E2D4A]">
            {['overview', 'indicators', 'geopolitics', 'stocks'].map(t => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`px-4 py-2.5 text-xs font-semibold capitalize transition-colors ${
                  activeTab === t
                    ? 'text-[#3B82F6] border-b-2 border-[#3B82F6] bg-[#3B82F6]/5'
                    : 'text-[#64748B] hover:text-[#E2E8F0]'
                }`}
              >
                {t === 'indicators' ? '📊 Indicators' : t === 'geopolitics' ? '🌍 Geopolitics' : t === 'stocks' ? '📈 Stocks' : '💡 Overview'}
              </button>
            ))}
          </div>

          <div className="p-4">
            {activeTab === 'overview' && (
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Investment Thesis</div>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{sector.theme}</p>
                </div>
                <div>
                  <div className="text-xs text-[#64748B] uppercase tracking-wider mb-2">Why Invest Now</div>
                  <ul className="space-y-2">
                    {sector.whyInvest.map((w, i) => (
                      <li key={i} className="flex gap-2 text-sm text-[#E2E8F0]">
                        <span className="text-[#10B981] mt-0.5 shrink-0">✓</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'indicators' && (
              <div>
                <div className="text-xs text-[#64748B] uppercase tracking-wider mb-3">Growth Indicator Radar</div>
                <ResponsiveContainer width="100%" height={200}>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#1E2D4A" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748B', fontSize: 9 }} />
                    <Radar dataKey="value" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.25} strokeWidth={2} />
                  </RadarChart>
                </ResponsiveContainer>
                <div className="space-y-2 mt-3">
                  {sector.growthIndicators.map((g, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-0.5">
                        <span className="text-[#94A3B8]">{g.label}</span>
                        <span className="text-[#E2E8F0] font-mono font-semibold">{g.value}%</span>
                      </div>
                      <div className="h-1.5 bg-[#1E2D4A] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${g.value}%`,
                            background: g.value >= 85 ? '#10B981' : g.value >= 70 ? '#3B82F6' : '#F59E0B'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'geopolitics' && (
              <GeopoliticsPanel geo={sector.geopolitics} />
            )}

            {activeTab === 'stocks' && (
              <div className="space-y-3">
                <div className="text-xs text-[#64748B] mb-2">
                  Suggested picks for this sector — review rationale before investing.
                </div>
                {sector.stocks.map((s, i) => (
                  <StockCard key={i} stock={s} currency={currency} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SectorStocks({ market }) {
  const sectors = market === 'india' ? INDIA_SECTORS : US_SECTORS;
  const currency = market === 'india' ? '₹' : '$';
  const flag = market === 'india' ? '🇮🇳' : '🇺🇸';

  const totalStocks = sectors.reduce((a, s) => a + s.stocks.length, 0);
  const avgConviction = Math.round(sectors.reduce((a, s) => a + s.conviction, 0) / sectors.length);

  return (
    <div>
      {/* Header stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="glass-card p-3 text-center">
          <div className="text-2xl font-bold text-[#3B82F6]">{sectors.length}</div>
          <div className="text-xs text-[#64748B] mt-0.5">Sectors Tracked</div>
        </div>
        <div className="glass-card p-3 text-center">
          <div className="text-2xl font-bold text-[#10B981]">{totalStocks}</div>
          <div className="text-xs text-[#64748B] mt-0.5">Stock Picks</div>
        </div>
        <div className="glass-card p-3 text-center">
          <div className="text-2xl font-bold text-[#F59E0B]">{avgConviction}%</div>
          <div className="text-xs text-[#64748B] mt-0.5">Avg Conviction</div>
        </div>
      </div>

      <div className="text-xs text-[#64748B] flex items-center gap-2 mb-4 bg-[#141C2E] border border-[#1E2D4A] rounded-lg px-3 py-2">
        <span>ℹ️</span>
        <span>Click on any sector to see full thesis, indicators, geopolitics, and stock picks.</span>
      </div>

      {sectors.map(sector => (
        <SectorCard key={sector.id} sector={sector} currency={currency} />
      ))}
    </div>
  );
}
