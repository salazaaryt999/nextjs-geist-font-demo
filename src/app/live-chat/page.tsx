'use client'

import { useState, useEffect, useRef } from 'react'

interface ChatMessage {
  id: number
  user: string
  message: string
  timestamp: Date
  type: 'success' | 'investment' | 'profit'
}

export default function LiveChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [onlineUsers, setOnlineUsers] = useState(247)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const sampleMessages = [
    { user: "Ravi", message: "invested ₹399 and got ₹3999 💸", type: "success" as const },
    { user: "Sneha", message: "earned ₹4999 from ₹499 in 30 minutes ✅", type: "profit" as const },
    { user: "Amit", message: "just received ₹7999 profit! Amazing platform 🚀", type: "success" as const },
    { user: "Priya", message: "invested ₹599 → got ₹5999 back! 💰", type: "profit" as const },
    { user: "Rohit", message: "₹899 investment returned ₹8999 in 28 minutes ⚡", type: "success" as const },
    { user: "Kavya", message: "This platform is genuine! Got my ₹6999 profit 🎉", type: "profit" as const },
    { user: "Arjun", message: "invested ₹799 and received ₹7999! Thank you 🙏", type: "success" as const },
    { user: "Neha", message: "₹999 → ₹9999 in exactly 30 minutes! 💎", type: "profit" as const },
    { user: "Vikash", message: "Amazing returns! ₹699 became ₹6999 🔥", type: "success" as const },
    { user: "Pooja", message: "just withdrew ₹4999 profit to my bank account ✨", type: "profit" as const },
    { user: "Rahul", message: "invested ₹499 and got ₹4999! Best decision ever 💪", type: "success" as const },
    { user: "Anjali", message: "₹399 investment gave me ₹3999 profit! 🎯", type: "profit" as const },
  ]

  // Initialize with some messages
  useEffect(() => {
    const initialMessages: ChatMessage[] = [
      {
        id: 1,
        user: "Ravi",
        message: "invested ₹399 and got ₹3999 💸",
        timestamp: new Date(Date.now() - 120000),
        type: "success"
      },
      {
        id: 2,
        user: "Sneha",
        message: "earned ₹4999 from ₹499 in 30 minutes ✅",
        timestamp: new Date(Date.now() - 90000),
        type: "profit"
      },
      {
        id: 3,
        user: "Amit",
        message: "just received ₹7999 profit! Amazing platform 🚀",
        timestamp: new Date(Date.now() - 60000),
        type: "success"
      }
    ]
    setMessages(initialMessages)
  }, [])

  // Add new messages every 5-10 seconds
  useEffect(() => {
    const addMessage = () => {
      const randomMessage = sampleMessages[Math.floor(Math.random() * sampleMessages.length)]
      const newMessage: ChatMessage = {
        id: Date.now(),
        user: randomMessage.user,
        message: randomMessage.message,
        timestamp: new Date(),
        type: randomMessage.type
      }

      setMessages(prev => [...prev, newMessage])
      
      // Update online users count randomly
      setOnlineUsers(prev => prev + Math.floor(Math.random() * 5) - 2)
    }

    const interval = setInterval(() => {
      const delay = Math.random() * 5000 + 5000 // 5-10 seconds
      setTimeout(addMessage, delay)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  // Auto scroll to bottom when new message arrives
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const getMessageStyle = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800'
      case 'profit':
        return 'bg-blue-50 border-blue-200 text-blue-800'
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800'
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Live Investment Updates</h1>
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-xl">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">{onlineUsers} users online</span>
            </div>
            <div className="text-sm opacity-80">|</div>
            <div className="text-sm font-semibold">Real-time updates</div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="bg-gray-50 rounded-xl p-4 mb-6 h-96 overflow-hidden">
        <div 
          ref={chatContainerRef}
          className="h-full overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-gray-300"
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-3 rounded-lg border-l-4 ${getMessageStyle(message.type)} animate-fade-in`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-sm">{message.user}</span>
                    <span className="text-xs opacity-60">{formatTime(message.timestamp)}</span>
                  </div>
                  <p className="text-sm">{message.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-yellow-50 p-4 rounded-xl text-center">
          <div className="text-2xl mb-2">💰</div>
          <p className="text-sm font-semibold text-yellow-800">Total Profits Today</p>
          <p className="text-lg font-bold text-yellow-600">₹12,45,678</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-xl text-center">
          <div className="text-2xl mb-2">🎯</div>
          <p className="text-sm font-semibold text-purple-800">Success Rate</p>
          <p className="text-lg font-bold text-purple-600">98.5%</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          🔥 Recent Activity
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">New investments (last hour):</span>
            <span className="font-semibold text-green-600">42</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Profits paid out:</span>
            <span className="font-semibold text-blue-600">38</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Average return time:</span>
            <span className="font-semibold text-purple-600">28 minutes</span>
          </div>
        </div>
      </div>

      {/* Fake Chat Input (Disabled) */}
      <div className="bg-gray-100 rounded-xl p-4">
        <div className="flex items-center space-x-3">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Chat is view-only. Invest to join the conversation!"
              className="w-full p-3 bg-white border border-gray-300 rounded-lg text-gray-500 cursor-not-allowed"
              disabled
            />
          </div>
          <button
            className="bg-gray-400 text-white px-4 py-3 rounded-lg cursor-not-allowed"
            disabled
          >
            Send
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          💬 Make an investment to participate in live chat
        </p>
      </div>
    </div>
  )
}
