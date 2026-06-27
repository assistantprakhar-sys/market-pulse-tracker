import { useState } from 'react';
import Head from 'next/head';
import Ticker from '../components/Ticker';
import MutualFunds from '../components/MutualFunds';
import SectorStocks from '../components/SectorStocks';
import Portfolio from '../components/Portfolio';
import { META } from '../data/marketData';

const TABS = [
  { id: 'mf', label: 'Mutual Funds', icon: '💼' },
  { id: 'india', label: 'India Stocks', icon: '🇮🇳' },
  { id: 'us', label: 'US Stocks', icon: '🇺🇸' },
  { id: 'portfolio', label: 'Portfolio', icon: '📊' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('mf');

  return (
    <>
      <Head>
        <title>Market Pulse Tracker</title>
        <meta name="description" content="India & US Market — Mutual Funds, Stocks, and Sector Analysis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📈</text></svg>" />
      </Head>

      <div className="min-h-screen bg-[#0A0E1A]">
        {/* Header */}
        <header className="bg-[#0F1629] border-b border-[#1E2D4A] sticky top-0 z-50">
          <div className="max-w-2xl mx-auto px-4">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#3B82F6] flex items-center justify-center text-sm font-bold">M</div>
                <div>
                  <div className="font-bold text-sm text-[#E2E8F0] leading-none">Market Pulse</div>
                  <div className="text-xs text-[#64748B] leading-none mt-0.5">7-day tracker</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] pulse-dot" />
                <span className="text-xs text-[#64748B] font-mono">{META.lastUpdated}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Ticker */}
        <Ticker />

        {/* Tab Navigation */}
        <div className="bg-[#0F1629] border-b border-[#1E2D4A] sticky top-[57px] z-40">
          <div className="max-w-2xl mx-auto px-4">
            <div className="flex">
              {TABS.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'text-[#3B82F6] border-b-2 border-[#3B82F6] bg-[#3B82F6]/5'
                      : 'text-[#64748B] hover:text-[#E2E8F0]'
                  }`}
                >
                  <span className="text-base">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-2xl mx-auto px-4 py-5">
          {activeTab === 'mf' && <MutualFunds />}
          {activeTab === 'india' && <SectorStocks market="india" />}
          {activeTab === 'us' && <SectorStocks market="us" />}
          {activeTab === 'portfolio' && <Portfolio />}
        </main>

        {/* Footer */}
        <footer className="border-t border-[#1E2D4A] mt-8">
          <div className="max-w-2xl mx-auto px-4 py-4 text-center">
            <p className="text-xs text-[#64748B]">
              Market Pulse Tracker · Updated every 7 days · For informational use only
            </p>
            <p className="text-xs text-[#1E2D4A] mt-1">
              Not financial advice · Always do your own research
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
