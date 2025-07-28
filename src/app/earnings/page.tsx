'use client'

import { useState } from 'react'

interface EarningsProof {
  id: number
  name: string
  investment: number
  profit: number
  time: string
  date: string
  status: 'completed' | 'processing'
}

export default function EarningsProof() {
  const [filter, setFilter] = useState<'all' | 'today' | 'week'>('all')

  const earningsData: EarningsProof[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      investment: 999,
      profit: 9999,
      time: "28 minutes",
      date: "Today, 2:45 PM",
      status: "completed"
    },
    {
      id: 2,
      name: "Priya Sharma",
      investment: 799,
      profit: 7999,
      time: "30 minutes",
      date: "Today, 2:15 PM",
      status: "completed"
    },
    {
      id: 3,
      name: "Amit Singh",
      investment: 699,
      profit: 6999,
      time: "29 minutes",
      date: "Today, 1:50 PM",
      status: "completed"
    },
    {
      id: 4,
      name: "Sneha Patel",
      investment: 599,
      profit: 5999,
      time: "27 minutes",
      date: "Today, 1:20 PM",
      status: "completed"
    },
    {
      id: 5,
      name: "Rohit Gupta",
      investment: 499,
      profit: 4999,
      time: "31 minutes",
      date: "Today, 12:45 PM",
      status: "completed"
    },
    {
      id: 6,
      name: "Kavya Reddy",
      investment: 899,
      profit: 8999,
      time: "26 minutes",
      date: "Today, 12:10 PM",
      status: "completed"
    },
    {
      id: 7,
      name: "Arjun Mehta",
      investment: 399,
      profit: 3999,
      time: "30 minutes",
      date: "Yesterday, 6:30 PM",
      status: "completed"
    },
    {
      id: 8,
      name: "Neha Joshi",
      investment: 799,
      profit: 7999,
      time: "29 minutes",
      date: "Yesterday, 5:45 PM",
      status: "completed"
    },
    {
      id: 9,
      name: "Vikash Yadav",
      investment: 699,
      profit: 6999,
      time: "Processing...",
      date: "Today, 3:15 PM",
      status: "processing"
    }
  ]

  const getFilteredData = () => {
    switch (filter) {
      case 'today':
        return earningsData.filter(item => item.date.includes('Today'))
      case 'week':
        return earningsData.filter(item => 
          item.date.includes('Today') || item.date.includes('Yesterday')
        )
      default:
        return earningsData
    }
  }

  const totalEarnings = earningsData
    .filter(item => item.status === 'completed')
    .reduce((sum, item) => sum + (item.profit - item.investment), 0)

  const successRate = Math.round((earningsData.filter(item => item.status === 'completed').length / earningsData.length) * 100)

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Earnings Proof</h1>
        <p className="text-gray-600">Real investor success stories</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-xl">
          <div className="text-center">
            <div className="text-2xl mb-2">💰</div>
            <p className="text-sm opacity-90">Total Profits Paid</p>
            <p className="text-lg font-bold">₹{totalEarnings.toLocaleString()}</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl">
          <div className="text-center">
            <div className="text-2xl mb-2">🎯</div>
            <p className="text-sm opacity-90">Success Rate</p>
            <p className="text-lg font-bold">{successRate}%</p>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex space-x-2 mb-6">
        {[
          { key: 'all', label: 'All Time' },
          { key: 'today', label: 'Today' },
          { key: 'week', label: 'This Week' }
        ].map((filterOption) => (
          <button
            key={filterOption.key}
            onClick={() => setFilter(filterOption.key as any)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              filter === filterOption.key
                ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filterOption.label}
          </button>
        ))}
      </div>

      {/* Earnings List */}
      <div className="space-y-4 mb-6">
        {getFilteredData().map((earning) => (
          <div
            key={earning.id}
            className={`bg-white border-2 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 ${
              earning.status === 'completed' 
                ? 'border-green-200 hover:border-green-300' 
                : 'border-yellow-200 hover:border-yellow-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                  earning.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                }`}>
                  {earning.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{earning.name}</h3>
                  <p className="text-sm text-gray-500">{earning.date}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm text-gray-600">₹{earning.investment}</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-lg font-bold text-green-600">₹{earning.profit}</span>
                </div>
                <div className={`text-xs px-2 py-1 rounded-full ${
                  earning.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {earning.status === 'completed' ? `✅ ${earning.time}` : '⏳ Processing...'}
                </div>
              </div>
            </div>
            
            {/* Profit Highlight */}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Profit Earned:</span>
                <span className="font-bold text-green-600">
                  +₹{(earning.profit - earning.investment).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Live Updates */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3 text-center">
          🔴 Live Updates
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-blue-700">Active Investments:</span>
            <span className="font-semibold text-blue-800">23</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-blue-700">Profits Paid (Today):</span>
            <span className="font-semibold text-green-600">₹2,45,678</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-blue-700">Average Return Time:</span>
            <span className="font-semibold text-purple-600">28.5 minutes</span>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold mb-4 text-center">💬 What Our Users Say</h3>
        <div className="space-y-3">
          <div className="bg-white bg-opacity-20 rounded-lg p-3">
            <p className="text-sm italic">"Amazing platform! Got my ₹7999 profit exactly in 30 minutes."</p>
            <p className="text-xs mt-1 opacity-80">- Rajesh K.</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-3">
            <p className="text-sm italic">"100% genuine. Already made 5 successful investments!"</p>
            <p className="text-xs mt-1 opacity-80">- Priya S.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-xl mb-4">
          <h3 className="text-lg font-bold mb-2">🚀 Ready to Start Earning?</h3>
          <p className="text-sm opacity-90 mb-4">Join thousands of successful investors</p>
          <a
            href="/"
            className="inline-block bg-white text-orange-500 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Start Investing Now
          </a>
        </div>
      </div>
    </div>
  )
}
