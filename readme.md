Portfolio Analytics Dashboard
Full-Stack Internship Assignment – WealthManager.online

This project is a complete portfolio analytics dashboard built for the WealthManager.online internship assignment. It includes both a fully functional backend API and an interactive, responsive frontend interface. The goal was to provide a comprehensive, real-time view of an investor’s stock portfolio through visualizations, metrics, and performance analytics.

Project Overview
This application gives investors meaningful insights into their investment portfolio via a clean UI and well-structured API. It includes:

RESTful backend with calculated portfolio metrics

Interactive frontend built with modern UI libraries

Real-time visualizations for holdings, performance, and allocation

Fully responsive, production-ready design

Features
Backend API
Implemented with Node.js + Express, the API exposes four core endpoints:

GET /api/portfolio/holdings
Returns a complete list of stock holdings with gain/loss metrics

GET /api/portfolio/allocation
Returns portfolio distribution by sector and market cap

GET /api/portfolio/performance
Provides historical performance of portfolio vs benchmarks (Nifty 50, Gold)

GET /api/portfolio/summary
Returns total value, gain/loss, top/worst performer, diversification score, and risk level

Frontend Dashboard
Developed using React, the frontend is designed for clarity, responsiveness, and interactivity. Major sections include:

Overview Cards – Total Value, Gain/Loss, % Performance, Number of Holdings

Allocation Charts – Sector-wise and market cap-based asset distribution

Holdings Table – Sortable and searchable with color-coded performance

Performance Chart – Timeline comparison against Nifty 50 and Gold

Top Performers – Best/worst stock analysis with risk and diversification scores

Design System
Clean, modern financial dashboard layout

Card-based grid system with professional typography

Color-coded indicators:

Green for gains (#10B981)

Red for losses (#EF4444)

Warning/Neutral colors: #F59E0B, #3B82F6

Responsive design supporting mobile and desktop

Loading states, error boundaries, and transitions for smooth UX

Charts implemented using Chart.js via react-chartjs-2

Tech Stack
Backend
Node.js

Express.js

CORS middleware

Deployed on Render

Frontend
React + Vite

TailwindCSS

ShadCN/UI

Chart.js (via react-chartjs-2)

Lucide React Icons

Axios for API calls

Deployed on Vercel

Folder Structure
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
Installation & Running Locally
bash
Copy
Edit
# Install dependencies
npm install

# Start backend
cd server && node index.js

# Start frontend (in a separate terminal)
npm run dev
AI Tools Used
Tool	Purpose
ChatGPT-4	Clarifying requirements, optimizing logic
GitHub Copilot	Auto-suggestions for Tailwind and React JSX

All business logic, performance calculations, and integration were hand-written. AI tools were used only to improve development speed and provide suggestions, not replace core implementation.

Deployment
Backend hosted on Render

Frontend deployed via Vercel

Fully optimized for production with environment-safe configurations and modular codebase

Deliverables Summary
 Functional REST API with four endpoints

 Fully interactive React frontend with visual analytics

 Clean, responsive design with professional UI

 Error handling and loading states implemented

 Complete GitHub repository with organized codebase

 Hosted live demo for both backend and frontend