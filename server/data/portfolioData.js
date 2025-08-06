const portfolioData = {
  holdings: [
    {
      symbol: "RELIANCE",
      name: "Reliance Industries Ltd",
      quantity: 50,
      avgPrice: 2450.00,
      currentPrice: 2680.50,
      sector: "Energy",
      marketCap: "Large",
      exchange: "NSE"
    },
    {
      symbol: "INFY",
      name: "Infosys Limited",
      quantity: 100,
      avgPrice: 1800.00,
      currentPrice: 2010.75,
      sector: "Technology",
      marketCap: "Large",
      exchange: "NSE"
    },
    {
      symbol: "TCS",
      name: "Tata Consultancy Services",
      quantity: 75,
      avgPrice: 3200.00,
      currentPrice: 3450.25,
      sector: "Technology",
      marketCap: "Large",
      exchange: "NSE"
    },
    {
      symbol: "HDFCBANK",
      name: "HDFC Bank Limited",
      quantity: 80,
      avgPrice: 1650.00,
      currentPrice: 1580.30,
      sector: "Banking",
      marketCap: "Large",
      exchange: "NSE"
    },
    {
      symbol: "ICICIBANK",
      name: "ICICI Bank Limited",
      quantity: 60,
      avgPrice: 1100.00,
      currentPrice: 1235.80,
      sector: "Banking",
      marketCap: "Large",
      exchange: "NSE"
    },
    {
      symbol: "BHARTIARTL",
      name: "Bharti Airtel Limited",
      quantity: 120,
      avgPrice: 850.00,
      currentPrice: 920.45,
      sector: "Telecommunications",
      marketCap: "Large",
      exchange: "NSE"
    },
    {
      symbol: "ITC",
      name: "ITC Limited",
      quantity: 200,
      avgPrice: 420.00,
      currentPrice: 465.20,
      sector: "Consumer Discretionary",
      marketCap: "Large",
      exchange: "NSE"
    },
    {
      symbol: "BAJFINANCE",
      name: "Bajaj Finance Limited",
      quantity: 25,
      avgPrice: 6800.00,
      currentPrice: 7150.60,
      sector: "Financial Services",
      marketCap: "Large",
      exchange: "NSE"
    },
    {
      symbol: "ASIANPAINT",
      name: "Asian Paints Limited",
      quantity: 40,
      avgPrice: 3100.00,
      currentPrice: 2890.75,
      sector: "Consumer Discretionary",
      marketCap: "Large",
      exchange: "NSE"
    },
    {
      symbol: "MARUTI",
      name: "Maruti Suzuki India Limited",
      quantity: 30,
      avgPrice: 9500.00,
      currentPrice: 10250.30,
      sector: "Automotive",
      marketCap: "Large",
      exchange: "NSE"
    },
    {
      symbol: "WIPRO",
      name: "Wipro Limited",
      quantity: 150,
      avgPrice: 450.00,
      currentPrice: 485.60,
      sector: "Technology",
      marketCap: "Large",
      exchange: "NSE"
    },
    {
      symbol: "TATAMOTORS",
      name: "Tata Motors Limited",
      quantity: 100,
      avgPrice: 650.00,
      currentPrice: 720.85,
      sector: "Automotive",
      marketCap: "Large",
      exchange: "NSE"
    },
    {
      symbol: "TECHM",
      name: "Tech Mahindra Limited",
      quantity: 80,
      avgPrice: 1200.00,
      currentPrice: 1145.25,
      sector: "Technology",
      marketCap: "Large",
      exchange: "NSE"
    },
    {
      symbol: "AXISBANK",
      name: "Axis Bank Limited",
      quantity: 90,
      avgPrice: 980.00,
      currentPrice: 1055.40,
      sector: "Banking",
      marketCap: "Large",
      exchange: "NSE"
    },
    {
      symbol: "SUNPHARMA",
      name: "Sun Pharmaceutical Industries Limited",
      quantity: 60,
      avgPrice: 1150.00,
      currentPrice: 1245.30,
      sector: "Healthcare",
      marketCap: "Large",
      exchange: "NSE"
    }
  ],
  
  performance: {
    timeline: [
      {
        date: "2024-01-01",
        portfolio: 1650000,
        nifty50: 21000,
        gold: 62000
      },
      {
        date: "2024-02-01",
        portfolio: 1680000,
        nifty50: 21500,
        gold: 63200
      },
      {
        date: "2024-03-01",
        portfolio: 1720000,
        nifty50: 22100,
        gold: 64500
      },
      {
        date: "2024-04-01",
        portfolio: 1750000,
        nifty50: 22800,
        gold: 66000
      },
      {
        date: "2024-05-01",
        portfolio: 1780000,
        nifty50: 23200,
        gold: 67500
      },
      {
        date: "2024-06-01",
        portfolio: 1820000,
        nifty50: 23500,
        gold: 68000
      },
      {
        date: "2024-07-01",
        portfolio: 1850000,
        nifty50: 24000,
        gold: 69200
      },
      {
        date: "2024-08-01",
        portfolio: 1880000,
        nifty50: 24500,
        gold: 70000
      },
      {
        date: "2024-09-01",
        portfolio: 1900000,
        nifty50: 25000,
        gold: 71500
      },
      {
        date: "2024-10-01",
        portfolio: 1920000,
        nifty50: 25200,
        gold: 72000
      },
      {
        date: "2024-11-01",
        portfolio: 1950000,
        nifty50: 25800,
        gold: 73000
      },
      {
        date: "2024-12-01",
        portfolio: 1980000,
        nifty50: 26000,
        gold: 74000
      }
    ],
    returns: {
      portfolio: { "1month": 2.3, "3months": 8.1, "1year": 20.0 },
      nifty50: { "1month": 1.8, "3months": 6.2, "1year": 23.8 },
      gold: { "1month": -0.5, "3months": 4.1, "1year": 19.4 }
    }
  }
};

module.exports = portfolioData;