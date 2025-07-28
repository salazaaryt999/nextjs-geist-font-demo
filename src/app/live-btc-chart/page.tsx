'use client'

import { useState, useEffect } from 'react'

export default function LiveBTCChart() {
  const [price, setPrice] = useState(4250000)
  const [change, setChange] = useState(2.45)
  const [lastUpdate, setLastUpdate] = useState(new Date())
  const [chartData, setChartData] = useState<number[]>([])

  // Generate dummy chart data
  useEffect(() => {
    const generateChartData = () => {
      const data = []
      let basePrice = 4250000
      for (let i = 0; i < 50; i++) {
        basePrice += (Math.random() - 0.5) * 50000
        data.push(basePrice)
      }
      return data
    }
    setChartData(generateChartData())
  }, [])

  const refreshChart = () => {
    // Simulate price update
    const newPrice = price + (Math.random() - 0.5) * 100000
    const newChange = ((newPrice - price) / price) * 100
    
    setPrice(Math.round(newPrice))
    setChange(Number(newChange.toFixed(2)))
    setLastUpdate(new Date())

    // Update chart data
    const newData = [...chartData.slice(1), newPrice]
    setChartData(newData)
  }

  // Auto refresh every 5 seconds
  useEffect(() => {
    const interval = setInterval(refreshChart, 5000)
    return () => clearInterval(interval)
  }, [price, chartData])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Live BTC Market Price</h1>
        <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-4 rounded-xl">
          <div className="text-3xl font-bold mb-1">{formatPrice(price)}</div>
          <div className={`text-lg font-semibold ${change >= 0 ? 'text-green-200' : 'text-red-200'}`}>
            {change >= 0 ? '↗️' : '↘️'} {change >= 0 ? '+' : ''}{change}%
          </div>
          <div className="text-sm opacity-80 mt-2">
            Last updated: {lastUpdate.toLocaleTimeString()}
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="bg-gray-50 rounded-xl p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">24H Chart</h2>
          <button
            onClick={refreshChart}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md"
          >
            🔄 Refresh
          </button>
        </div>
        
        {/* Dummy Chart */}
        <div className="h-64 bg-white rounded-lg border-2 border-gray-200 p-4 relative overflow-hidden">
          <div className="absolute inset-0 p-4">
            <svg width="100%" height="100%" className="overflow-visible">
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.05"/>
                </linearGradient>
              </defs>
              
              {/* Chart Line */}
              {chartData.length > 1 && (
                <>
                  <polyline
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="3"
                    points={chartData.map((value, index) => {
                      const x = (index / (chartData.length - 1)) * 100
                      const minPrice = Math.min(...chartData)
                      const maxPrice = Math.max(...chartData)
                      const y = 100 - ((value - minPrice) / (maxPrice - minPrice)) * 80
                      return `${x}%,${y}%`
                    }).join(' ')}
                  />
                  
                  {/* Fill area under curve */}
                  <polygon
                    fill="url(#chartGradient)"
                    points={`0%,100% ${chartData.map((value, index) => {
                      const x = (index / (chartData.length - 1)) * 100
                      const minPrice = Math.min(...chartData)
                      const maxPrice = Math.max(...chartData)
                      const y = 100 - ((value - minPrice) / (maxPrice - minPrice)) * 80
                      return `${x}%,${y}%`
                    }).join(' ')} 100%,100%`}
                  />
                </>
              )}
            </svg>
          </div>
          
          {/* Chart Labels */}
          <div className="absolute bottom-2 left-4 text-xs text-gray-500">
            Min: {formatPrice(Math.min(...chartData))}
          </div>
          <div className="absolute top-2 right-4 text-xs text-gray-500">
            Max: {formatPrice(Math.max(...chartData))}
          </div>
        </div>
      </div>

      {/* Market Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 p-4 rounded-xl">
          <div className="text-center">
            <div className="text-2xl mb-2">📈</div>
            <p className="text-sm font-semibold text-green-800">24h High</p>
            <p className="text-lg font-bold text-green-600">
              {formatPrice(Math.max(...chartData))}
            </p>
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded-xl">
          <div className="text-center">
            <div className="text-2xl mb-2">📉</div>
            <p className="text-sm font-semibold text-red-800">24h Low</p>
            <p className="text-lg font-bold text-red-600">
              {formatPrice(Math.min(...chartData))}
            </p>
          </div>
        </div>
      </div>

      {/* Trading Info */}
      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-4 text-center">
          🚀 Perfect Time to Invest!
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-700">Market Trend:</span>
            <span className={`text-sm font-semibold ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change >= 0 ? 'Bullish 🐂' : 'Bearish 🐻'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-700">Volume (24h):</span>
            <span className="text-sm font-semibold text-blue-800">₹2,45,67,890</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-700">Market Cap:</span>
            <span className="text-sm font-semibold text-blue-800">₹84,23,45,67,890</span>
          </div>
        </div>
      </div>
    </div>
  )
}
