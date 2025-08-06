const express = require('express');
const cors = require('cors');
const portfolioData = require('./data/portfolioData');
const { calculateGainLoss, calculatePercentage, calculatePortfolioMetrics } = require('./utils/calculations');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
const allowedOrigins = [
  'http://localhost:5173', // local dev
  'https://portfolio-analysis-dashboard.netlify.app' // deployed frontend
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());

// Portfolio Holdings Endpoint
app.get('/api/portfolio/holdings', (req, res) => {
  try {
    const holdings = portfolioData.holdings.map(holding => ({
      ...holding,
      value: holding.quantity * holding.currentPrice,
      gainLoss: calculateGainLoss(holding.quantity, holding.avgPrice, holding.currentPrice),
      gainLossPercent: calculatePercentage(holding.avgPrice, holding.currentPrice)
    }));
    
    res.json(holdings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch portfolio holdings' });
  }
});

// Portfolio Allocation Endpoint
app.get('/api/portfolio/allocation', (req, res) => {
  try {
    const holdings = portfolioData.holdings.map(holding => ({
      ...holding,
      value: holding.quantity * holding.currentPrice
    }));
    
    const totalValue = holdings.reduce((sum, holding) => sum + holding.value, 0);
    
    // Group by sector
    const bySector = {};
    holdings.forEach(holding => {
      if (!bySector[holding.sector]) {
        bySector[holding.sector] = { value: 0, percentage: 0 };
      }
      bySector[holding.sector].value += holding.value;
    });
    
    // Calculate sector percentages
    Object.keys(bySector).forEach(sector => {
      bySector[sector].percentage = (bySector[sector].value / totalValue) * 100;
    });
    
    // Group by market cap
    const byMarketCap = {};
    holdings.forEach(holding => {
      if (!byMarketCap[holding.marketCap]) {
        byMarketCap[holding.marketCap] = { value: 0, percentage: 0 };
      }
      byMarketCap[holding.marketCap].value += holding.value;
    });
    
    // Calculate market cap percentages
    Object.keys(byMarketCap).forEach(cap => {
      byMarketCap[cap].percentage = (byMarketCap[cap].value / totalValue) * 100;
    });
    
    res.json({ bySector, byMarketCap });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch portfolio allocation' });
  }
});

// Performance Comparison Endpoint
app.get('/api/portfolio/performance', (req, res) => {
  try {
    res.json(portfolioData.performance);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch performance data' });
  }
});

// Portfolio Summary Endpoint
app.get('/api/portfolio/summary', (req, res) => {
  try {
    const holdings = portfolioData.holdings.map(holding => ({
      ...holding,
      value: holding.quantity * holding.currentPrice,
      gainLoss: calculateGainLoss(holding.quantity, holding.avgPrice, holding.currentPrice),
      gainLossPercent: calculatePercentage(holding.avgPrice, holding.currentPrice)
    }));
    
    const metrics = calculatePortfolioMetrics(holdings);
    res.json(metrics);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch portfolio summary' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});


// app.get('/*', (_, res) => {
//   res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
// });


app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});