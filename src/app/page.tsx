'use client'

import { useState } from 'react'
import Link from 'next/link'

interface InvestmentPlan {
  id: number
  investment: number
  returns: number
}

export default function HomePage() {
  const [selectedPlan, setSelectedPlan] = useState<InvestmentPlan | null>(null)

  const investmentPlans: InvestmentPlan[] = [
    { id: 1, investment: 399, returns: 3999 },
    { id: 2, investment: 499, returns: 4999 },
    { id: 3, investment: 599, returns: 5999 },
    { id: 4, investment: 699, returns: 6999 },
    { id: 5, investment: 799, returns: 7999 },
    { id: 6, investment: 899, returns: 8999 },
    { id: 7, investment: 999, returns: 9999 },
  ]

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      {/* Header Banner */}
      <div className="text-center mb-8">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-2xl shadow-lg">
          <h1 className="text-lg font-bold mb-2">
            🌍 𝐓𝐎𝐃𝐀𝐘 𝐒𝐏𝐄𝐂𝐈𝐀𝐋 𝐈𝐍𝐕𝐄𝐒𝐓𝐌𝐄𝐍𝐓 𝐏𝐋𝐀𝐍 👇
          </h1>
          <p className="text-sm opacity-90">Limited Time Offer - High Returns Guaranteed!</p>
        </div>
      </div>

      {/* Investment Plans */}
      <div className="space-y-4 mb-8">
        {investmentPlans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white border-2 border-gray-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-2xl">💰</div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-semibold text-gray-800">
                      ☞︎︎︎ ₹{plan.investment}
                    </span>
                    <span className="text-gray-500">→</span>
                    <span className="text-lg font-bold text-green-600">
                      ₹{plan.returns}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    {Math.round(((plan.returns - plan.investment) / plan.investment) * 100)}% profit in 30 minutes
                  </p>
                </div>
              </div>
              <Link
                href={`/payment?plan=${plan.id}&investment=${plan.investment}&returns=${plan.returns}`}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Invest Now in BTC
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Timer and Security Info */}
      <div className="bg-gray-50 rounded-xl p-6 mb-6">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">⏰</span>
            <p className="text-lg font-semibold text-gray-800">
              Profit will be refunded to your account in 30 minutes
            </p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">🗣️</span>
            <p className="text-lg font-semibold text-green-600">
              100% Safe & Secure Platform
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-xl text-center">
          <div className="text-2xl mb-2">🚀</div>
          <p className="text-sm font-semibold text-blue-800">Instant Returns</p>
          <p className="text-xs text-blue-600">Get profits in 30 mins</p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl text-center">
          <div className="text-2xl mb-2">🔒</div>
          <p className="text-sm font-semibold text-green-800">Secure Trading</p>
          <p className="text-xs text-green-600">Bank-level security</p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 gap-4">
        <Link
          href="/faq"
          className="bg-white border border-gray-200 p-4 rounded-xl text-center hover:shadow-md transition-all duration-200"
        >
          <div className="text-2xl mb-2">❓</div>
          <p className="text-sm font-semibold text-gray-800">FAQ</p>
        </Link>
        <Link
          href="/support"
          className="bg-white border border-gray-200 p-4 rounded-xl text-center hover:shadow-md transition-all duration-200"
        >
          <div className="text-2xl mb-2">💬</div>
          <p className="text-sm font-semibold text-gray-800">Support</p>
        </Link>
      </div>
    </div>
  )
}
