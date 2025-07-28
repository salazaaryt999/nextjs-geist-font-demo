'use client'

import { useState, useEffect } from 'react'

export default function PopupNotification() {
  const [notification, setNotification] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const notifications = [
    "🔥 Ankit just earned ₹9999!",
    "💰 42 new users invested in the last 5 minutes",
    "🚀 Priya got ₹7999 profit in 30 minutes!",
    "⚡ 128 successful transactions today!",
    "💸 Rahul earned ₹5999 from ₹599 investment!",
    "🎯 95% users got their profits on time!",
  ]

  useEffect(() => {
    const showNotification = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)]
      setNotification(randomNotification)
      setIsVisible(true)

      // Hide notification after 4 seconds
      setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => setNotification(null), 300)
      }, 4000)
    }

    // Show first notification after 10 seconds
    const initialTimer = setTimeout(showNotification, 10000)

    // Then show notifications every 30-60 seconds
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 30000 + 30000 // 30-60 seconds
      setTimeout(showNotification, randomDelay)
    }, 60000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [])

  if (!notification) return null

  return (
    <div
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-lg shadow-lg mx-auto max-w-sm">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">{notification}</span>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-2 text-white hover:text-gray-200 transition-colors"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}
