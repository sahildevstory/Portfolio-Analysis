// Calculate gain/loss for a holding
function calculateGainLoss(quantity, avgPrice, currentPrice) {
  return quantity * (currentPrice - avgPrice);
}

// Calculate percentage gain/loss
function calculatePercentage(avgPrice, currentPrice) {
  return ((currentPrice - avgPrice) / avgPrice) * 100;
}

// Calculate portfolio metrics
function calculatePortfolioMetrics(holdings) {
  const totalValue = holdings.reduce((sum, holding) => sum + holding.value, 0);
  const totalInvested = holdings.reduce((sum, holding) => sum + (holding.quantity * holding.avgPrice), 0);
  const totalGainLoss = totalValue - totalInvested;
  const totalGainLossPercent = (totalGainLoss / totalInvested) * 100;
  
  // Find top and worst performers
  const sortedByPerformance = holdings.sort((a, b) => b.gainLossPercent - a.gainLossPercent);
  const topPerformer = sortedByPerformance[0];
  const worstPerformer = sortedByPerformance[sortedByPerformance.length - 1];
  
  // Calculate diversification score (simplified)
  const sectors = [...new Set(holdings.map(h => h.sector))];
  const diversificationScore = Math.min(10, sectors.length * 1.2);
  
  // Determine risk level based on portfolio composition
  let riskLevel = "Low";
  if (totalGainLossPercent > 15) riskLevel = "High";
  else if (totalGainLossPercent > 5) riskLevel = "Moderate";
  
  return {
    totalValue,
    totalInvested,
    totalGainLoss,
    totalGainLossPercent,
    topPerformer: {
      symbol: topPerformer.symbol,
      name: topPerformer.name,
      gainPercent: topPerformer.gainLossPercent
    },
    worstPerformer: {
      symbol: worstPerformer.symbol,
      name: worstPerformer.name,
      gainPercent: worstPerformer.gainLossPercent
    },
    diversificationScore,
    riskLevel
  };
}

module.exports = {
  calculateGainLoss,
  calculatePercentage,
  calculatePortfolioMetrics
};