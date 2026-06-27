// ============================================================
// MARKET PULSE TRACKER — DATA FILE
// ============================================================
// HOW TO UPDATE: Edit the values below to refresh your tracker.
// Update "lastUpdated" every time you make changes.
// All prices are in their local currency (INR / USD).
// ============================================================

export const META = {
  lastUpdated: "2025-06-24",
  nextRefresh: "2025-07-01",
  refreshCadence: "7 days",
  disclaimer:
    "This tool is for informational and analytical purposes only. It does not constitute financial advice. Always consult a SEBI-registered or SEC-licensed advisor before investing.",
};

// ─────────────────────────────────────────────
// MARKET TICKER (top bar)
// ─────────────────────────────────────────────
export const TICKER_DATA = [
  { label: "NIFTY 50", value: "24,502", change: "+0.62%", up: true },
  { label: "SENSEX", value: "80,874", change: "+0.58%", up: true },
  { label: "S&P 500", value: "5,447", change: "+0.34%", up: true },
  { label: "NASDAQ", value: "17,689", change: "+0.71%", up: true },
  { label: "USD/INR", value: "83.52", change: "-0.12%", up: false },
  { label: "GOLD (INR/10g)", value: "72,450", change: "+1.1%", up: true },
  { label: "CRUDE OIL", value: "$76.4", change: "-0.9%", up: false },
  { label: "10Y INDIA BOND", value: "7.02%", change: "+2bps", up: false },
  { label: "10Y US BOND", value: "4.23%", change: "-3bps", up: true },
  { label: "INDIA VIX", value: "13.4", change: "-0.5", up: true },
];

// ─────────────────────────────────────────────
// MUTUAL FUNDS — INDIA
// ─────────────────────────────────────────────
export const INDIA_MF = [
  // ── EQUITY – LARGE CAP ──
  {
    id: "imf1",
    name: "Mirae Asset Large Cap Fund",
    category: "Equity – Large Cap",
    risk: "Medium",
    nav: 109.4,
    aum: "₹40,200 Cr",
    returns: { "1Y": "18.4%", "3Y": "14.2%", "5Y": "16.8%" },
    expense: "0.54%",
    minLumpsum: 5000,
    minSIP: 500,
    rating: 5,
    rationale:
      "Consistent outperformer with diversified large-cap holdings across IT, BFSI, and Consumer sectors. Low expense ratio for the category.",
    investStyle: "Long-term wealth creation (5+ years)",
    overlap: "Low overlap with mid-cap or sector funds below",
    sipRecommend: "₹3,000–₹5,000/month",
    lumpRecommend: "₹25,000–₹50,000 during market dips (>2% Nifty fall)",
  },
  {
    id: "imf2",
    name: "HDFC Top 100 Fund",
    category: "Equity – Large Cap",
    risk: "Medium",
    nav: 1012.6,
    aum: "₹34,800 Cr",
    returns: { "1Y": "16.9%", "3Y": "13.8%", "5Y": "15.4%" },
    expense: "0.89%",
    minLumpsum: 5000,
    minSIP: 500,
    rating: 4,
    rationale:
      "Veteran fund with strong process and proven track record. Heavy banking exposure benefits from rising credit growth in India.",
    investStyle: "Long-term (5+ years)",
    overlap: "Moderate overlap with Mirae; diversify by adding flexi-cap",
    sipRecommend: "₹2,000–₹3,000/month",
    lumpRecommend: "₹20,000–₹30,000 on market correction",
  },
  // ── EQUITY – FLEXI CAP ──
  {
    id: "imf3",
    name: "Parag Parikh Flexi Cap Fund",
    category: "Equity – Flexi Cap",
    risk: "Medium",
    nav: 77.3,
    aum: "₹72,500 Cr",
    returns: { "1Y": "22.1%", "3Y": "18.4%", "5Y": "23.1%" },
    expense: "0.59%",
    minLumpsum: 1000,
    minSIP: 1000,
    rating: 5,
    rationale:
      "Unique: invests in both Indian and global stocks (Google, Meta, etc.). Natural geopolitical hedge. Outstanding long-term alpha generator.",
    investStyle: "Long-term (7+ years)",
    overlap: "Zero overlap — global component differentiates it",
    sipRecommend: "₹5,000–₹10,000/month",
    lumpRecommend: "₹50,000–₹1,00,000 — core holding",
  },
  // ── EQUITY – MID CAP ──
  {
    id: "imf4",
    name: "Nippon India Growth Fund",
    category: "Equity – Mid Cap",
    risk: "High",
    nav: 3782.1,
    aum: "₹28,400 Cr",
    returns: { "1Y": "37.2%", "3Y": "26.8%", "5Y": "29.4%" },
    expense: "0.78%",
    minLumpsum: 5000,
    minSIP: 100,
    rating: 5,
    rationale:
      "India's growth story plays out through mid-caps. Manufacturing, defence, renewables exposure. High risk but historically highest alpha.",
    investStyle: "Mid-term (3–5 years)",
    overlap: "Low overlap with large-cap funds",
    sipRecommend: "₹3,000–₹5,000/month via SIP only (volatility is high)",
    lumpRecommend: "Avoid large lumpsum; stagger via STP over 3–6 months",
  },
  // ── EQUITY – SECTORAL/THEMATIC ──
  {
    id: "imf5",
    name: "ICICI Pru Technology Fund",
    category: "Equity – Sectoral (Technology)",
    risk: "High",
    nav: 191.7,
    aum: "₹13,200 Cr",
    returns: { "1Y": "28.4%", "3Y": "16.2%", "5Y": "26.8%" },
    expense: "1.07%",
    minLumpsum: 5000,
    minSIP: 100,
    rating: 4,
    rationale:
      "India's IT sector benefits from AI spending globally. Infosys, TCS, HCL dominate. Cap at 5–8% of portfolio due to concentration risk.",
    investStyle: "Mid-term (2–4 years)",
    overlap: "High overlap with large-cap funds — keep allocation small",
    sipRecommend: "₹1,000–₹2,000/month",
    lumpRecommend: "₹10,000–₹20,000 only",
  },
  {
    id: "imf6",
    name: "Mirae Asset Great Consumer Fund",
    category: "Equity – Sectoral (Consumption)",
    risk: "High",
    nav: 82.5,
    aum: "₹4,200 Cr",
    returns: { "1Y": "25.6%", "3Y": "19.1%", "5Y": "18.9%" },
    expense: "0.65%",
    minLumpsum: 5000,
    minSIP: 1000,
    rating: 4,
    rationale:
      "India's rising middle class and rural consumption story. Direct play on India's demographic dividend. Works well with infrastructure themes.",
    investStyle: "Long-term (5+ years)",
    overlap: "Low with IT/BFSI heavy funds",
    sipRecommend: "₹2,000–₹3,000/month",
    lumpRecommend: "₹15,000–₹25,000",
  },
  // ── HYBRID ──
  {
    id: "imf7",
    name: "HDFC Balanced Advantage Fund",
    category: "Hybrid – Dynamic Asset Allocation",
    risk: "Medium",
    nav: 487.2,
    aum: "₹92,400 Cr",
    returns: { "1Y": "14.8%", "3Y": "13.1%", "5Y": "15.2%" },
    expense: "0.72%",
    minLumpsum: 5000,
    minSIP: 100,
    rating: 5,
    rationale:
      "Automatically shifts between equity and debt based on market valuations. Ideal for new investors or those nearing financial goals.",
    investStyle: "Long-term (5+ years), low intervention needed",
    overlap: "No direct overlap — serves as portfolio stabiliser",
    sipRecommend: "₹5,000–₹10,000/month as core holding",
    lumpRecommend: "₹50,000–₹1,00,000 — good for any market condition",
  },
  // ── DEBT ──
  {
    id: "imf8",
    name: "SBI Short Duration Fund",
    category: "Debt – Short Duration",
    risk: "Low",
    nav: 31.2,
    aum: "₹14,600 Cr",
    returns: { "1Y": "7.4%", "3Y": "6.8%", "5Y": "7.1%" },
    expense: "0.39%",
    minLumpsum: 5000,
    minSIP: 500,
    rating: 4,
    rationale:
      "Stable returns, low interest rate risk. Better post-tax returns than FDs for investors in the 30% tax bracket after indexation.",
    investStyle: "Parking emergency fund or short-term goals (1–3 years)",
    overlap: "None — different asset class",
    sipRecommend: "₹2,000–₹5,000/month",
    lumpRecommend: "₹50,000–₹2,00,000 for capital preservation",
  },
  {
    id: "imf9",
    name: "ICICI Pru Corporate Bond Fund",
    category: "Debt – Corporate Bond",
    risk: "Low-Medium",
    nav: 26.8,
    aum: "₹25,800 Cr",
    returns: { "1Y": "8.1%", "3Y": "7.4%", "5Y": "7.8%" },
    expense: "0.31%",
    minLumpsum: 5000,
    minSIP: 500,
    rating: 4,
    rationale:
      "High-quality AAA corporate bonds. Better yield than govt bonds with manageable credit risk. Good for investors seeking regular income.",
    investStyle: "Medium-term (3–5 years)",
    overlap: "None",
    sipRecommend: "₹3,000–₹5,000/month",
    lumpRecommend: "₹1,00,000–₹5,00,000",
  },
  // ── ELSS (Tax Saving) ──
  {
    id: "imf10",
    name: "Quant ELSS Tax Saver Fund",
    category: "ELSS – Tax Saving (Equity)",
    risk: "High",
    nav: 347.6,
    aum: "₹9,800 Cr",
    returns: { "1Y": "42.3%", "3Y": "30.1%", "5Y": "32.8%" },
    expense: "0.76%",
    minLumpsum: 500,
    minSIP: 500,
    rating: 5,
    rationale:
      "Best performing ELSS fund. 3-year lock-in, tax saving u/s 80C up to ₹1.5L. Quant's model-driven approach delivers superior returns.",
    investStyle: "Long-term (stay beyond the 3-year lock-in)",
    overlap: "Moderate with multi-cap; diversify with debt",
    sipRecommend: "₹4,167/month to maximise ₹50,000/year 80C benefit",
    lumpRecommend: "₹50,000–₹1,50,000 at start of financial year",
  },
];

// ─────────────────────────────────────────────
// MUTUAL FUNDS — US
// ─────────────────────────────────────────────
export const US_MF = [
  {
    id: "umf1",
    name: "Vanguard S&P 500 ETF (VOO)",
    category: "Equity – Large Cap Index",
    risk: "Medium",
    nav: 484.2,
    aum: "$1.07T",
    returns: { "1Y": "24.8%", "3Y": "10.2%", "5Y": "15.6%" },
    expense: "0.03%",
    minLumpsum: 1,
    minSIP: 1,
    rating: 5,
    rationale:
      "The gold standard of passive investing. Tracks S&P 500, ultra-low fee. If you only invest in one US fund, this is it.",
    investStyle: "Long-term (10+ years)",
    sipRecommend: "$100–$500/month via fractional shares",
    lumpRecommend: "$1,000–$5,000 on any >5% market pullback",
  },
  {
    id: "umf2",
    name: "Invesco QQQ (NASDAQ-100)",
    category: "Equity – Technology Heavy",
    risk: "High",
    nav: 468.5,
    aum: "$260B",
    returns: { "1Y": "32.4%", "3Y": "8.6%", "5Y": "21.3%" },
    expense: "0.20%",
    minLumpsum: 1,
    minSIP: 1,
    rating: 4,
    rationale:
      "Top 100 NASDAQ stocks — heavily FAANG + AI plays. Higher volatility but superior returns in bull markets. Cap at 15% of US allocation.",
    investStyle: "Mid to long-term (5+ years)",
    sipRecommend: "$50–$200/month",
    lumpRecommend: "$500–$2,000 on tech selloffs",
  },
  {
    id: "umf3",
    name: "Vanguard Total Stock Market ETF (VTI)",
    category: "Equity – Total Market",
    risk: "Medium",
    nav: 254.3,
    aum: "$430B",
    returns: { "1Y": "23.1%", "3Y": "9.8%", "5Y": "14.9%" },
    expense: "0.03%",
    minLumpsum: 1,
    minSIP: 1,
    rating: 5,
    rationale:
      "Broader than S&P 500 — includes mid and small caps. Slightly more growth potential with minimal extra cost.",
    investStyle: "Long-term (10+ years)",
    sipRecommend: "$100–$300/month",
    lumpRecommend: "$1,000–$3,000",
  },
  {
    id: "umf4",
    name: "ARK Innovation ETF (ARKK)",
    category: "Equity – Disruptive Innovation",
    risk: "Very High",
    nav: 52.3,
    aum: "$7.2B",
    returns: { "1Y": "15.6%", "3Y": "-18.4%", "5Y": "2.1%" },
    expense: "0.75%",
    minLumpsum: 1,
    minSIP: 1,
    rating: 2,
    rationale:
      "High risk/reward — focuses on AI, genomics, fintech. Extremely volatile. Only for high-risk investors with 5–10 year horizon. Keep <5%.",
    investStyle: "Speculative long-term (7–10 years)",
    sipRecommend: "$25–$50/month only",
    lumpRecommend: "Avoid lumpsum — SIP only due to volatility",
  },
  {
    id: "umf5",
    name: "iShares Global Clean Energy ETF (ICLN)",
    category: "Equity – Clean Energy",
    risk: "High",
    nav: 14.2,
    aum: "$2.8B",
    returns: { "1Y": "-8.4%", "3Y": "-21.3%", "5Y": "4.2%" },
    expense: "0.41%",
    minLumpsum: 1,
    minSIP: 1,
    rating: 3,
    rationale:
      "Currently undervalued after rate hike pressure. Long-term energy transition tailwind is strong. Entry now could yield 3–5x by 2030.",
    investStyle: "Long-term contrarian (5–8 years)",
    sipRecommend: "$50–$100/month — averaging into weakness",
    lumpRecommend: "$500–$1,000 — accumulate at current lows",
  },
  {
    id: "umf6",
    name: "Vanguard Real Estate ETF (VNQ)",
    category: "Hybrid – REIT",
    risk: "Medium",
    nav: 86.4,
    aum: "$32B",
    returns: { "1Y": "8.2%", "3Y": "-4.1%", "5Y": "6.3%" },
    expense: "0.12%",
    minLumpsum: 1,
    minSIP: 1,
    rating: 3,
    rationale:
      "REITs benefit from rate cuts. As US Fed pivots, this is a re-rating play. Dividend yield ~4%. Good inflation hedge.",
    investStyle: "Medium-term income + capital appreciation (3–5 years)",
    sipRecommend: "$75–$150/month",
    lumpRecommend: "$500–$2,000 ahead of rate cut cycle",
  },
  {
    id: "umf7",
    name: "iShares Core US Aggregate Bond ETF (AGG)",
    category: "Debt – US Investment Grade",
    risk: "Low",
    nav: 97.4,
    aum: "$103B",
    returns: { "1Y": "4.8%", "3Y": "-1.2%", "5Y": "1.4%" },
    expense: "0.03%",
    minLumpsum: 1,
    minSIP: 1,
    rating: 4,
    rationale:
      "Bond prices rise when rates fall. Rate cuts incoming in 2025. Accumulating now locks in high yields before they drop.",
    investStyle: "Capital preservation + upcoming rate cut play (2–4 years)",
    sipRecommend: "$100–$200/month",
    lumpRecommend: "$2,000–$5,000",
  },
];

// ─────────────────────────────────────────────
// INDIA UPCOMING SECTORS & STOCKS
// ─────────────────────────────────────────────
export const INDIA_SECTORS = [
  {
    id: "ind1",
    sector: "Defence & Aerospace",
    emoji: "🛡️",
    conviction: 95,
    riskIndex: "High",
    horizon: "3–5 years",
    theme:
      "India's defence budget crossed ₹6.2 lakh crore in FY25. The government has mandated 68% domestic procurement. Make in India for defence is no longer a slogan — it's policy.",
    whyInvest: [
      "Defence capex growing at 12–15% CAGR for next 5 years",
      "Export orders from Southeast Asia, Africa, and Middle East",
      "HAL's order book crossed ₹1.3 lakh crore",
      "Drone warfare demand accelerating post global conflicts",
    ],
    growthIndicators: [
      { label: "Budget Allocation Growth", value: 85 },
      { label: "Order Book Visibility", value: 90 },
      { label: "Export Pipeline", value: 70 },
      { label: "Policy Tailwind", value: 95 },
    ],
    geopolitics: {
      risk: "Medium",
      factors: [
        "Russia-Ukraine war: India positioned as alternative arms supplier",
        "India-China border tension sustains domestic defence spending",
        "US-India defence partnership (iCET) opens technology transfer",
        "Middle East instability = more demand for Indian ammunition exports",
      ],
      keyIndicators: [
        "Annual defence budget announcement (Feb)",
        "Ministry of Defence positive indigenisation list updates",
        "HAL & BDL quarterly order book disclosures",
        "US-India 2+2 ministerial meeting outcomes",
      ],
    },
    stocks: [
      {
        ticker: "HAL",
        name: "Hindustan Aeronautics Ltd",
        price: 4320,
        targetPrice: 5800,
        upside: "34%",
        mktCap: "₹2.89L Cr",
        pe: 32.4,
        rationale:
          "Monopoly on military aircraft. Tejas Mk1A order for 83 jets is a decade-long revenue stream. LCA Mk2 and AMCA are next catalysts.",
        suggestedVolume: "5–10 shares",
        riskNote: "Expensive valuation; enter in tranches",
      },
      {
        ticker: "BDL",
        name: "Bharat Dynamics Ltd",
        price: 1842,
        targetPrice: 2600,
        upside: "41%",
        mktCap: "₹33,800 Cr",
        pe: 58.2,
        rationale:
          "Missile systems manufacturer. MRSAM, Astra, Akash orders are multiyear. Export push to friendly nations accelerating.",
        suggestedVolume: "10–20 shares",
        riskNote: "Premium PE; warrant only if budget allocation stays strong",
      },
      {
        ticker: "COCHINSHIP",
        name: "Cochin Shipyard Ltd",
        price: 1654,
        targetPrice: 2200,
        upside: "33%",
        mktCap: "₹21,800 Cr",
        pe: 45.6,
        rationale:
          "India's biggest shipyard. Navy warship orders + commercial ships. Green ship retrofitting adds new revenue line.",
        suggestedVolume: "15–25 shares",
        riskNote: "Execution delays are primary risk",
      },
    ],
  },
  {
    id: "ind2",
    sector: "Green Energy & EV Ecosystem",
    emoji: "⚡",
    conviction: 90,
    riskIndex: "High",
    horizon: "3–7 years",
    theme:
      "India has committed to 500 GW renewable capacity by 2030. EV penetration is at 7% but growing at 40% YoY. The entire supply chain — solar cells, batteries, EV components — is being built from scratch in India.",
    whyInvest: [
      "PLI scheme pushes ₹18,100 Cr into advanced chemistry cells",
      "Solar module capacity will cross 100 GW domestically by 2026",
      "Two-wheeler EV market growing 4x by 2027",
      "Green hydrogen policy creating entire new energy segment",
    ],
    growthIndicators: [
      { label: "Solar Capacity Additions", value: 88 },
      { label: "EV Sales Growth", value: 82 },
      { label: "Battery Cell Manufacturing", value: 65 },
      { label: "Policy Support", value: 90 },
    ],
    geopolitics: {
      risk: "Medium-High",
      factors: [
        "China dominates solar cell supply chain — India vulnerability",
        "US IRA Act created incentive gap; India scrambling to match",
        "Critical minerals (lithium, cobalt) import risk from unstable regions",
        "OPEC+ oil cuts make EV economics more favourable",
      ],
      keyIndicators: [
        "MNRE monthly renewable capacity addition data",
        "VAHAN EV registration portal monthly numbers",
        "PLI disbursement updates for ACC battery scheme",
        "Lithium price on LME (below $15,000/t = positive)",
      ],
    },
    stocks: [
      {
        ticker: "TATAPOWER",
        name: "Tata Power Co Ltd",
        price: 412,
        targetPrice: 580,
        upside: "41%",
        mktCap: "₹1.32L Cr",
        pe: 38.2,
        rationale:
          "India's largest integrated power company. 30 GW renewable pipeline, largest EV charging network. Clean energy pivot well underway.",
        suggestedVolume: "50–100 shares",
        riskNote: "Legacy thermal assets are a drag; track clean energy % of revenue",
      },
      {
        ticker: "SUZLON",
        name: "Suzlon Energy Ltd",
        price: 57.3,
        targetPrice: 85,
        upside: "48%",
        mktCap: "₹80,200 Cr",
        pe: 42.1,
        rationale:
          "India's wind energy giant. Debt-free transformation complete. Order book at record high. Wind + hybrid orders accelerating.",
        suggestedVolume: "200–500 shares (low price point)",
        riskNote: "Wind resource variability; grid integration delays",
      },
      {
        ticker: "OLECTRA",
        name: "Olectra Greentech Ltd",
        price: 1478,
        targetPrice: 2100,
        upside: "42%",
        mktCap: "₹12,600 Cr",
        pe: 68.4,
        rationale:
          "Dominant electric bus manufacturer in India. BEST, BMTC, DTC orders rolling in. Solid order visibility of 10,000+ buses.",
        suggestedVolume: "10–20 shares",
        riskNote: "High PE; execution risk on delivery timelines",
      },
    ],
  },
  {
    id: "ind3",
    sector: "Speciality Chemicals & Pharma API",
    emoji: "🧪",
    conviction: 82,
    riskIndex: "Medium-High",
    horizon: "2–5 years",
    theme:
      "China+1 strategy is pushing global manufacturers to India. India already supplies 20% of global generics by volume. Speciality chemicals for agrochemicals, electronics, and pharma API are the next growth wave.",
    whyInvest: [
      "China+1 shift redirecting $15B+ annual orders to India",
      "PLI for bulk drugs reducing API import dependency",
      "India's CDMO market growing at 15% CAGR",
      "Agrochemical off-patent molecules creating new opportunities",
    ],
    growthIndicators: [
      { label: "Export Order Pipeline", value: 80 },
      { label: "China Replacement Trend", value: 85 },
      { label: "CDMO Deal Wins", value: 72 },
      { label: "R&D Investment Growth", value: 68 },
    ],
    geopolitics: {
      risk: "Low-Medium",
      factors: [
        "US-China trade tensions are India's biggest opportunity",
        "Taiwan Strait risk pushes electronics chemicals sourcing to India",
        "Europe's chemical plant closures create export opportunity",
        "Drug shortage in the US creates urgency for API diversification",
      ],
      keyIndicators: [
        "US FDA import alert list (fewer alerts = better for Indian pharma)",
        "China chemical plant shutdowns (environmental crackdowns)",
        "USD/INR rate (stronger INR = headwind for exporters)",
        "Quarterly commentary from SRF, PI Industries management",
      ],
    },
    stocks: [
      {
        ticker: "PIIND",
        name: "PI Industries Ltd",
        price: 3980,
        targetPrice: 5200,
        upside: "31%",
        mktCap: "₹60,400 Cr",
        pe: 42.6,
        rationale:
          "Best-in-class agrochemical chemistry. CSM (custom synthesis) business growing at 20%+ CAGR. Multi-year order book with global innovators.",
        suggestedVolume: "5–10 shares",
        riskNote: "Agrochemical cycle can be volatile; diversify within chemicals",
      },
      {
        ticker: "CLEAN",
        name: "Clean Science & Technology",
        price: 1456,
        targetPrice: 1900,
        upside: "30%",
        mktCap: "₹15,400 Cr",
        pe: 48.2,
        rationale:
          "Unique green chemistry process creates cost advantage. MEHQ, BHA with 40%+ global market share. Expanding to pharma intermediates.",
        suggestedVolume: "10–20 shares",
        riskNote: "Customer concentration in top 3 clients is a risk",
      },
    ],
  },
  {
    id: "ind4",
    sector: "Data Centres & Digital Infrastructure",
    emoji: "🖥️",
    conviction: 88,
    riskIndex: "Medium",
    horizon: "3–5 years",
    theme:
      "India will need 2,000+ MW of data centre capacity by 2027 vs 900 MW today. AI workloads, cloud adoption, and government digitisation are the twin engines. India is becoming the hyperscaler hub for Asia.",
    whyInvest: [
      "Hyperscalers (Microsoft, Google, AWS) committing $15B+ to India",
      "Digital Personal Data Protection Act drives domestic data localisation",
      "AI inference demand requires 10x more compute by 2027",
      "UPI, CoWIN, ONDC government platforms need massive infra",
    ],
    growthIndicators: [
      { label: "Cloud Adoption Rate", value: 78 },
      { label: "AI Workload Demand", value: 92 },
      { label: "FDI into Data Centres", value: 88 },
      { label: "Data Localisation Policy", value: 75 },
    ],
    geopolitics: {
      risk: "Low",
      factors: [
        "US-China tech war makes India a safe alternative for global tech",
        "India's neutral foreign policy = trusted data location for all sides",
        "Semiconductor shortage affects GPU supply for AI training",
        "Submarine cable vulnerabilities near key straits (data security)",
      ],
      keyIndicators: [
        "Hyperscaler India investment announcements",
        "NVIDIA GPU shipment availability in India",
        "Data Centre capacity utilisation rates (watch quarterly reports)",
        "Power availability and grid reliability in key hubs (Mumbai, Chennai)",
      ],
    },
    stocks: [
      {
        ticker: "ADANIGREEN",
        name: "Adani Green Energy Ltd",
        price: 1842,
        targetPrice: 2400,
        upside: "30%",
        mktCap: "₹2.92L Cr",
        pe: 112,
        rationale:
          "Data centres are power-hungry — Adani Green powers them. 10 GW operational, 45 GW pipeline. Captive power for hyperscalers is a new model.",
        suggestedVolume: "10–20 shares",
        riskNote: "High PE; Adani group governance concerns; keep allocation small",
      },
      {
        ticker: "NSLNISP",
        name: "Nesco Ltd",
        price: 820,
        targetPrice: 1100,
        upside: "34%",
        mktCap: "₹3,400 Cr",
        pe: 26.4,
        rationale:
          "Mumbai land-owning company pivoting to data centre development. Undervalued land bank + tech park revenue. Hidden gem in the space.",
        suggestedVolume: "25–50 shares",
        riskNote: "Low liquidity; small-cap volatility risk",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// US UPCOMING SECTORS & STOCKS
// ─────────────────────────────────────────────
export const US_SECTORS = [
  {
    id: "us1",
    sector: "Artificial Intelligence Infrastructure",
    emoji: "🤖",
    conviction: 96,
    riskIndex: "High",
    horizon: "3–7 years",
    theme:
      "The AI arms race is not slowing — it's accelerating. Every major enterprise is mandating AI integration. The infrastructure layer (chips, data centres, power) will compound for a decade.",
    whyInvest: [
      "Global AI infrastructure spend to reach $1.1T by 2030",
      "Hyperscaler capex guidance raised 40%+ in Q1 2025",
      "AI agents will require 100x more compute than current LLMs",
      "Power demand from AI data centres growing at 35% YoY",
    ],
    growthIndicators: [
      { label: "Hyperscaler Capex Growth", value: 94 },
      { label: "AI Enterprise Adoption", value: 88 },
      { label: "GPU Supply Chain", value: 72 },
      { label: "Power Infrastructure Build", value: 85 },
    ],
    geopolitics: {
      risk: "High",
      factors: [
        "US export controls on advanced chips to China — NVIDIA revenue risk",
        "US-China tech decoupling intensifying — supply chain fragmentation",
        "AI used in military — national security regulations emerging",
        "Rare earth minerals for magnets in chips from geopolitically risky regions",
      ],
      keyIndicators: [
        "US BIS export control rule updates (watch for chip restriction tightening)",
        "NVIDIA quarterly data centre revenue and guidance",
        "US-China diplomatic relations barometer",
        "Power capacity additions near US data centre corridors (Virginia, Texas)",
      ],
    },
    stocks: [
      {
        ticker: "NVDA",
        name: "NVIDIA Corporation",
        price: 131.4,
        targetPrice: 175,
        upside: "33%",
        mktCap: "$3.2T",
        pe: 38.2,
        rationale:
          "The one company that cannot be avoided in AI. H100/H200/B100 GPU monopoly for AI training. CUDA software moat takes 10+ years to replicate.",
        suggestedVolume: "5–15 shares",
        riskNote: "Export control to China = 15–20% revenue risk; size accordingly",
      },
      {
        ticker: "VST",
        name: "Vistra Energy Corp",
        price: 128.4,
        targetPrice: 180,
        upside: "40%",
        mktCap: "$42B",
        pe: 22.1,
        rationale:
          "AI data centres need nuclear-grade baseload power. Vistra operates nuclear plants + gas. Microsoft and Amazon are signing Power Purchase Agreements.",
        suggestedVolume: "15–30 shares",
        riskNote: "Regulatory risk on nuclear plant life extensions",
      },
      {
        ticker: "SMCI",
        name: "Super Micro Computer",
        price: 42.8,
        targetPrice: 65,
        upside: "52%",
        mktCap: "$25B",
        pe: 18.4,
        rationale:
          "GPU server building block supplier. Every NVIDIA GPU needs a SMCI rack server. Cheaper than NVDA with similar demand exposure. Recent accounting concerns create buy opportunity.",
        suggestedVolume: "30–60 shares",
        riskNote: "Accounting restatement risk; keep position small",
      },
    ],
  },
  {
    id: "us2",
    sector: "Biotech & GLP-1 / Longevity",
    emoji: "🧬",
    conviction: 87,
    riskIndex: "High",
    horizon: "3–7 years",
    theme:
      "GLP-1 drugs (Ozempic, Wegovy) are the biggest drug category in history. The adjacent market for obesity, cardiovascular, NASH, and Alzheimer's drugs will generate $100B+ in revenues by 2030.",
    whyInvest: [
      "Global obesity market $100B+ annual revenue opportunity",
      "GLP-1 demand outstripping supply through 2027",
      "AI-accelerated drug discovery cutting time-to-market by 60%",
      "Alzheimer's treatment pipeline — $20B TAM unlocking",
    ],
    growthIndicators: [
      { label: "GLP-1 Demand vs Supply", value: 91 },
      { label: "Pipeline Molecule Count", value: 82 },
      { label: "FDA Approval Rate", value: 68 },
      { label: "AI Drug Discovery", value: 78 },
    ],
    geopolitics: {
      risk: "Medium",
      factors: [
        "US drug pricing legislation (IRA) compressing margins post-2026",
        "China biotech competition undercutting generics timelines",
        "Patent cliff on major biologics creating generic entry wars",
        "Pandemic preparedness funding creates MRNA platform tailwind",
      ],
      keyIndicators: [
        "FDA PDUFA calendar — approval dates for key molecules",
        "Medicare drug price negotiation list additions",
        "Novo Nordisk + Eli Lilly supply expansion announcements",
        "Phase 3 clinical trial readouts (check clinicaltrials.gov)",
      ],
    },
    stocks: [
      {
        ticker: "LLY",
        name: "Eli Lilly and Company",
        price: 894.2,
        targetPrice: 1100,
        upside: "23%",
        mktCap: "$850B",
        pe: 58.4,
        rationale:
          "Mounjaro + Zepbound = multi-billion revenue machines. Alzheimer's drug Donanemab is a massive pipeline catalyst. Arguably the best large-cap pharma in the world.",
        suggestedVolume: "1–5 shares (high price; use fractional shares)",
        riskNote: "Extremely high PE; any clinical trial failure = sharp drawdown",
      },
      {
        ticker: "RGEN",
        name: "Repligen Corporation",
        price: 154.8,
        targetPrice: 220,
        upside: "42%",
        mktCap: "$8.5B",
        pe: 45.2,
        rationale:
          "Biotech picks-and-shovels: supplies filtration and chromatography for GLP-1 manufacturing. Every Ozempic manufactured uses Repligen equipment.",
        suggestedVolume: "20–40 shares",
        riskNote: "Mid-cap with leverage to biotech capex cycle — cyclical risk",
      },
    ],
  },
  {
    id: "us3",
    sector: "Space & Satellite Economy",
    emoji: "🚀",
    conviction: 78,
    riskIndex: "Very High",
    horizon: "5–10 years",
    theme:
      "SpaceX's Starlink has proven the model. The satellite economy — broadband, Earth observation, weather, and precision agriculture — is going mainstream. Launch costs fell 95% in 10 years.",
    whyInvest: [
      "Global satellite economy projected to reach $1T by 2040",
      "Low Earth Orbit constellation buildout: 50,000+ satellites by 2030",
      "Defence and intelligence satellite demand surging post-conflict",
      "Precision agriculture, climate monitoring — new commercial use cases",
    ],
    growthIndicators: [
      { label: "Launch Cost Reduction", value: 88 },
      { label: "Satellite Data Demand", value: 82 },
      { label: "Defence Contract Flow", value: 76 },
      { label: "Commercial Viability", value: 65 },
    ],
    geopolitics: {
      risk: "Very High",
      factors: [
        "Starlink used in Ukraine war — satellites are now military targets",
        "China launching rival constellation — spectrum and orbital slot conflicts",
        "Anti-satellite (ASAT) weapons testing by Russia and China",
        "US export control on satellite technology to adversary nations",
      ],
      keyIndicators: [
        "FCC spectrum allocation decisions",
        "US DoD satellite contract awards",
        "ITU orbital slot allocation disputes",
        "Russian/Chinese ASAT test announcements",
      ],
    },
    stocks: [
      {
        ticker: "RKLB",
        name: "Rocket Lab USA",
        price: 22.4,
        targetPrice: 38,
        upside: "70%",
        mktCap: "$11B",
        pe: null,
        rationale:
          "Only credible small launch vehicle competitor to SpaceX (which is private). Neutron medium rocket under development. Also makes spacecraft components. High risk, high reward.",
        suggestedVolume: "100–300 shares (low price, high risk)",
        riskNote: "Not yet profitable; binary risk on Neutron rocket development",
      },
      {
        ticker: "MNTS",
        name: "Momentus Inc",
        price: 3.2,
        targetPrice: 8,
        upside: "150%",
        mktCap: "$0.12B",
        pe: null,
        rationale:
          "In-space transportation services. Micro-cap with binary risk. Speculative position only — not more than 0.5% of portfolio.",
        suggestedVolume: "200–500 shares (speculative only)",
        riskNote: "Micro-cap; extremely high risk; speculative allocation only",
      },
    ],
  },
  {
    id: "us4",
    sector: "Cybersecurity",
    emoji: "🔐",
    conviction: 88,
    riskIndex: "Medium-High",
    horizon: "3–5 years",
    theme:
      "Every AI system, connected device, and cloud workload creates a new attack surface. Cyber attacks cost the global economy $8T in 2023. Growing at 15% CAGR.",
    whyInvest: [
      "Government mandates for zero-trust architecture across agencies",
      "AI-powered cyberattacks require AI-powered defence (arms race)",
      "Ransomware attacks grew 73% in 2024 — insurance mandates more protection",
      "Critical infrastructure protection: power grids, water, hospitals",
    ],
    growthIndicators: [
      { label: "Enterprise Security Spend", value: 86 },
      { label: "AI Threat Sophistication", value: 90 },
      { label: "Regulatory Pressure", value: 82 },
      { label: "Talent Supply (constraint)", value: 45 },
    ],
    geopolitics: {
      risk: "High",
      factors: [
        "State-sponsored hacking from China, Russia, North Korea, Iran intensifying",
        "Critical infrastructure attacks — cyber is now warfare",
        "5G network security concerns driving massive investment",
        "EU NIS2 directive and US Cybersecurity Executive Order create mandates",
      ],
      keyIndicators: [
        "US CISA threat advisories (monthly)",
        "Major breach announcements (create buying opportunities)",
        "Federal cyber spending in annual DoD/DHS budgets",
        "Gartner quarterly cybersecurity spend forecasts",
      ],
    },
    stocks: [
      {
        ticker: "CRWD",
        name: "CrowdStrike Holdings",
        price: 342.8,
        targetPrice: 420,
        upside: "22%",
        mktCap: "$85B",
        pe: 78.4,
        rationale:
          "The AI-native endpoint security leader. Falcon platform with 29 modules creates massive switching costs. Net retention rate >120% proves product stickiness.",
        suggestedVolume: "5–15 shares",
        riskNote: "Expensive; last year's outage created reputational scar — monitor customer churn",
      },
      {
        ticker: "ZS",
        name: "Zscaler Inc",
        price: 194.6,
        targetPrice: 260,
        upside: "34%",
        mktCap: "$29B",
        pe: 55.2,
        rationale:
          "Zero-trust architecture pure play. Federal government mandates drive adoption. Cloud-native = no hardware refresh cycle needed by customers.",
        suggestedVolume: "10–25 shares",
        riskNote: "Hyper-growth slowing; watch annual recurring revenue growth rate",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// PORTFOLIO ALLOCATION SUGGESTION
// ─────────────────────────────────────────────
export const PORTFOLIO_SPLIT = {
  india: [
    { name: "Large Cap MF (Mirae / HDFC)", pct: 25, color: "#3B82F6" },
    { name: "Flexi Cap MF (Parag Parikh)", pct: 20, color: "#06B6D4" },
    { name: "Mid Cap MF (Nippon Growth)", pct: 10, color: "#8B5CF6" },
    { name: "ELSS Tax Saver", pct: 10, color: "#10B981" },
    { name: "Debt / Short Duration", pct: 15, color: "#F59E0B" },
    { name: "Sectoral / Theme Stocks", pct: 20, color: "#EF4444" },
  ],
  us: [
    { name: "VOO / VTI (S&P Index)", pct: 40, color: "#3B82F6" },
    { name: "QQQ (NASDAQ-100)", pct: 20, color: "#06B6D4" },
    { name: "AI & Cyber Stocks", pct: 20, color: "#8B5CF6" },
    { name: "Biotech Stocks", pct: 10, color: "#10B981" },
    { name: "Bonds (AGG)", pct: 5, color: "#F59E0B" },
    { name: "Speculative (Space/ARKK)", pct: 5, color: "#EF4444" },
  ],
};
