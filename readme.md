📊 Portfolio Analytics Dashboard
Full-Stack Internship Assignment – WealthManager.online

This is a complete portfolio analytics dashboard developed as part of the internship assignment for WealthManager.online. It consists of a fully functional backend API and an interactive, responsive frontend interface.

The goal is to provide investors with a real-time, insightful view of their stock portfolio through visual analytics, key metrics, and performance tracking.

🧩 Project Overview
This application provides meaningful insights into an investor's portfolio using a clean UI and a structured backend. It includes:

RESTful backend with portfolio metrics and calculations

Interactive React frontend with modern UI libraries

Real-time visualizations: holdings, allocation, performance

Fully responsive, production-ready layout

✅ Features
Backend API (Node.js + Express)
Endpoint	Description
GET /api/portfolio/holdings	Returns list of stock holdings with gain/loss metrics
GET /api/portfolio/allocation	Returns portfolio breakdown by sector and market cap
GET /api/portfolio/performance	Historical performance vs benchmarks (Nifty 50, Gold)
GET /api/portfolio/summary	Returns total value, gain/loss, top/worst performers, diversification score, and risk level

Frontend Dashboard (React + Vite)
Overview Cards: Total Value, Gain/Loss, % Return, Total Holdings

Allocation Charts: Sector-wise and market cap distribution

Holdings Table: Sortable, searchable, and color-coded by performance

Performance Chart: Line chart comparison with Nifty 50 and Gold

Top Performers: Highlights best and worst performing stocks with insights

🎨 Design System
Clean, modern financial dashboard layout

Card-based grid system with responsive design

Color-coded indicators:

Green for gains (#10B981)

Red for losses (#EF4444)

Other accents: #F59E0B (warning), #3B82F6 (primary)

Smooth transitions, hover effects, and loading states

Chart visualizations powered by Chart.js via react-chartjs-2

🧰 Tech Stack
Backend
Node.js

Express.js

CORS middleware

Deployed on Render

Frontend
React + Vite

TailwindCSS

ShadCN/UI

Chart.js (react-chartjs-2)

Lucide React Icons

Axios for API calls

Deployed on Vercel

📁 Folder Structure
bash
Copy
Edit
project-root/
├── server/
│   ├── index.js
│   ├── data/portfolioData.js
│   └── utils/calculations.js
├── src/
│   ├── App.tsx
│   ├── types/portfolio.ts
│   ├── services/api.ts
│   └── components/
│       ├── OverviewCards.tsx
│       ├── AllocationCharts.tsx
│       ├── HoldingsTable.tsx
│       ├── PerformanceChart.tsx
│       └── TopPerformers.tsx
🧪 Installation & Running Locally
bash
Copy
Edit
# Install dependencies
npm install

# Start backend (from root)
cd server && node index.js

# Start frontend (from root in separate terminal)
npm run dev
🤖 AI Tools Used
Tool	Purpose
ChatGPT-4	Clarified requirements, optimized logic
GitHub Copilot	Tailwind suggestions, JSX generation assistance

All critical logic and business calculations were manually written.
AI tools were used to accelerate development and assist with syntax—not replace implementation.

🚀 Deployment
Backend + Frontend hosted on: Render

Environment-safe, modular, and production-ready configuration

📌 Deliverables Summary
 Functional REST API with 4 endpoints

 Fully interactive React frontend with analytics

 Responsive, clean UI with proper design system

 Error handling and loading states in place

 Organized, production-grade GitHub repository

 Hosted and working demo (backend + frontend)
