# 📈 Market Pulse Tracker

A personal market dashboard for tracking **India & US** markets — Mutual Funds, Upcoming Sectors, and Stock Picks — refreshed every 7 days.

---

## 🗂️ What This App Does

| Tab | What you see |
|-----|-------------|
| 💼 Mutual Funds | India MFs and US ETFs, filtered by risk/category, with SIP & lumpsum suggestions |
| 🇮🇳 India Stocks | Upcoming sectors with thesis, geopolitics, growth indicators, and stock picks |
| 🇺🇸 US Stocks | Same as above for the US market |
| 📊 Portfolio | Allocation charts, macro watchlist, and investment principles |

---

## 🚀 STEP-BY-STEP DEPLOYMENT GUIDE (for non-coders)

### Step 1: Create a GitHub Account
1. Go to **github.com** and sign up for a free account
2. Verify your email

### Step 2: Create a New Repository
1. Click the **"+"** icon (top right) → **"New repository"**
2. Repository name: `market-pulse-tracker`
3. Set it to **Public** (required for free Vercel hosting)
4. Click **"Create repository"**

### Step 3: Upload the Code to GitHub
**Option A — Using GitHub's web interface (easiest):**
1. On your new empty repository page, click **"uploading an existing file"**
2. Upload ALL the files from this project folder, keeping the folder structure:
   - `pages/` folder (with `_app.js`, `index.js`)
   - `components/` folder (with all `.js` files)
   - `data/` folder (with `marketData.js`)
   - `styles/` folder (with `globals.css`)
   - `package.json`, `next.config.js`, `tailwind.config.js`, `postcss.config.js`, `vercel.json`, `.gitignore`
3. Click **"Commit changes"**

**Option B — Using GitHub Desktop (recommended for future edits):**
1. Download **GitHub Desktop** from desktop.github.com
2. Clone your repository to your computer
3. Copy all project files into the cloned folder
4. Click **"Commit to main"** → **"Push origin"**

### Step 4: Deploy to Vercel
1. Go to **vercel.com** and sign up with your GitHub account
2. Click **"Add New Project"**
3. Find and select your `market-pulse-tracker` repository
4. Vercel auto-detects Next.js. Click **"Deploy"**
5. Wait ~2 minutes. Your app is live! 🎉

Your URL will be: `https://market-pulse-tracker-[your-username].vercel.app`

---

## 🔄 HOW TO UPDATE YOUR DATA (every 7 days)

### The only file you need to edit: `data/marketData.js`

This file is the "brain" of the app. Everything you see on screen comes from here.

### What to update:

#### 1. Market Ticker (top scrolling bar)
```js
export const TICKER_DATA = [
  { label: "NIFTY 50", value: "24,502", change: "+0.62%", up: true },
  //                    ^^^^^^^^^^          ^^^^^^^^       ^^^^^^
  //                    Update this         Update this    true = green, false = red
```

#### 2. Update the date
```js
export const META = {
  lastUpdated: "2025-06-24",   // ← Change this to today's date
  nextRefresh: "2025-07-01",   // ← Change to 7 days from today
```

#### 3. Update Mutual Fund NAVs
Search for `nav:` in the file and update the number:
```js
nav: 109.4,   // ← Replace with current NAV from AMC website or Moneycontrol
```

#### 4. Update Stock Prices
Search for `price:` and update:
```js
price: 4320,       // ← Current Market Price from NSE/BSE or Yahoo Finance
targetPrice: 5800, // ← Update your target if analyst reports change
```

#### 5. After editing, push to GitHub:
- In GitHub Desktop: Commit + Push
- In browser: Edit file directly, click "Commit changes"

Vercel automatically redeploys within 60 seconds of a GitHub push!

---

## 📁 FILE STRUCTURE EXPLAINED

```
market-pulse-tracker/
│
├── data/
│   └── marketData.js          ← ⭐ UPDATE THIS EVERY 7 DAYS
│
├── pages/
│   ├── _app.js                ← App wrapper (don't touch)
│   └── index.js               ← Main page layout (tabs, header)
│
├── components/
│   ├── Ticker.js              ← Scrolling price bar at top
│   ├── MutualFunds.js         ← MF tab UI and cards
│   ├── SectorStocks.js        ← India/US sector analysis UI
│   └── Portfolio.js           ← Allocation charts + principles
│
├── styles/
│   └── globals.css            ← App-wide colours and animations
│
├── package.json               ← App dependencies (don't change)
├── next.config.js             ← Next.js config (don't change)
├── tailwind.config.js         ← Colour theme (only change if redesigning)
└── vercel.json                ← Deployment settings (don't change)
```

---

## 📱 How to Add a New Stock

Find the sector in `marketData.js` and add to its `stocks` array:

```js
{
  ticker: "INFY",
  name: "Infosys Limited",
  price: 1548,
  targetPrice: 1900,
  upside: "23%",
  mktCap: "₹6.4L Cr",
  pe: 26.8,
  rationale: "Your research rationale here in 2-3 sentences.",
  suggestedVolume: "10–20 shares",
  riskNote: "Main risk to watch out for",
},
```

---

## 📱 How to Add a New Mutual Fund

Copy any existing fund block in `INDIA_MF` or `US_MF` and change the values:

```js
{
  id: "imf11",          // ← Must be unique (increment the number)
  name: "Fund Name",
  category: "Equity – Large Cap",  // ← Match existing category for filter to work
  risk: "Medium",       // ← Low / Low-Medium / Medium / High / Very High
  nav: 150.4,
  aum: "₹12,000 Cr",
  returns: { "1Y": "15%", "3Y": "12%", "5Y": "14%" },
  expense: "0.80%",
  minLumpsum: 5000,
  minSIP: 500,
  rating: 4,            // ← 1 to 5 stars
  rationale: "Why you like this fund",
  investStyle: "Long-term (5+ years)",
  overlap: "Note any overlap with other funds",
  sipRecommend: "₹3,000/month",
  lumpRecommend: "₹25,000 on dips",
},
```

---

## 🛠️ Running Locally (to preview before pushing)

1. Install Node.js from nodejs.org (LTS version)
2. Open Terminal (Mac) or Command Prompt (Windows)
3. Navigate to your project folder: `cd market-pulse-tracker`
4. Run: `npm install`
5. Run: `npm run dev`
6. Open browser: `http://localhost:3000`

---

## 📊 Data Sources to Update From

| Data Type | Source |
|-----------|--------|
| Nifty / Sensex | nseindia.com or Google Finance |
| Mutual Fund NAV | moneycontrol.com or amfiindia.com |
| India Stocks | nseindia.com or screener.in |
| US ETF Prices | finance.yahoo.com |
| US Stocks | finance.yahoo.com or marketwatch.com |
| India VIX | nseindia.com/market-data/india-vix |
| Macro data | rbi.org.in, mospi.gov.in |

---

*Built for personal use. Not financial advice.*
