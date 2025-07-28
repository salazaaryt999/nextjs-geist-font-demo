'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [countdown, setCountdown] = useState(30 * 60) // 30 minutes in seconds

  const planId = searchParams.get('plan')
  const investment = searchParams.get('investment')
  const returns = searchParams.get('returns')

  // Countdown timer
  useEffect(() => {
    if (isConfirmed && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isConfirmed, countdown])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const handleConfirmPayment = () => {
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsConfirmed(true)
    }, 2000)
  }

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-white px-4 py-6 flex items-center justify-center">
        <div className="max-w-md w-full">
          {/* Success Animation */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <span className="text-3xl text-white">✓</span>
            </div>
            <h1 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h1>
            <p className="text-gray-600">Your investment has been confirmed</p>
          </div>

          {/* Investment Details */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
            <h2 className="text-lg font-semibold text-green-800 mb-4 text-center">
              Investment Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-green-700">Investment Amount:</span>
                <span className="font-bold text-green-800">₹{investment}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-700">Expected Returns:</span>
                <span className="font-bold text-green-800">₹{returns}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-700">Profit:</span>
                <span className="font-bold text-green-600">₹{Number(returns) - Number(investment)}</span>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                ⏰ Profit Countdown
              </h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {formatTime(countdown)}
              </div>
              <p className="text-sm text-blue-700">
                You will receive your profit in your account
              </p>
            </div>
          </div>

          {/* Success Message */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-xl mb-6">
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2">
                🎉 Congratulations!
              </h3>
              <p className="text-sm opacity-90">
                You will receive your profit of ₹{Number(returns) - Number(investment)} in 30 minutes
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              href="/live-chat"
              className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-green-600 transition-colors"
            >
              💬 Join Live Chat
            </Link>
            <Link
              href="/"
              className="w-full bg-gray-100 text-gray-800 py-3 px-6 rounded-lg font-semibold text-center block hover:bg-gray-200 transition-colors"
            >
              🏠 Back to Home
            </Link>
          </div>

          {/* Support Info */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600 mb-2">Need help?</p>
            <Link
              href="/support"
              className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Complete Payment</h1>
        <p className="text-gray-600">Secure & instant Bitcoin investment</p>
      </div>

      {/* Selected Plan */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-xl mb-6">
        <h2 className="text-lg font-bold mb-2 text-center">Selected Plan</h2>
        <div className="text-center">
          <div className="text-3xl font-bold mb-2">₹{investment} → ₹{returns}</div>
          <p className="text-sm opacity-90">
            Profit: ₹{Number(returns) - Number(investment)} ({Math.round(((Number(returns) - Number(investment)) / Number(investment)) * 100)}%)
          </p>
        </div>
      </div>

      {/* Payment Form */}
      <div className="bg-gray-50 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Details</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Rajesh Kumar"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              defaultValue="+91 98765 43210"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              UPI ID
            </label>
            <input
              type="text"
              defaultValue="rajesh.kumar@paytm"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Investment Amount
            </label>
            <input
              type="text"
              value={`₹${investment}`}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Security Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">🔒</span>
          <div>
            <p className="text-sm font-semibold text-blue-800">Secure Payment</p>
            <p className="text-xs text-blue-600">256-bit SSL encryption & bank-level security</p>
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <button
        onClick={handleConfirmPayment}
        disabled={isProcessing}
        className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 ${
          isProcessing
            ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
            : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:scale-105'
        }`}
      >
        {isProcessing ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
            <span>Processing Payment...</span>
          </div>
        ) : (
          `💰 Confirm Payment of ₹${investment}`
        )}
      </button>

      {/* Terms */}
      <div className="text-center mt-4">
        <p className="text-xs text-gray-500">
          By confirming, you agree to our{' '}
          <Link href="/terms" className="text-blue-600 hover:text-blue-800">
            Terms & Conditions
          </Link>
        </p>
      </div>
    </div>
  )
}
