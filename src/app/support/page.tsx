'use client'

import { useState } from 'react'

export default function Support() {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null)

  const supportOptions = [
    {
      id: 'whatsapp',
      title: 'WhatsApp Support',
      description: 'Get instant help via WhatsApp',
      icon: '💬',
      action: 'Chat Now',
      link: 'https://wa.me/919876543210?text=Hi, I need help with my investment',
      available: true
    },
    {
      id: 'telegram',
      title: 'Telegram Support',
      description: 'Join our Telegram support group',
      icon: '📱',
      action: 'Join Group',
      link: 'https://t.me/btcinvestmentsupport',
      available: true
    },
    {
      id: 'email',
      title: 'Email Support',
      description: 'Send us your queries via email',
      icon: '📧',
      action: 'Send Email',
      link: 'mailto:support@btcinvestment.com',
      available: true
    },
    {
      id: 'phone',
      title: 'Phone Support',
      description: '24/7 phone support available',
      icon: '📞',
      action: 'Call Now',
      link: 'tel:+919876543210',
      available: true
    }
  ]

  const commonIssues = [
    {
      id: 'payment',
      title: 'Payment Issues',
      description: 'Problems with payment processing or failed transactions',
      solution: 'Contact our WhatsApp support with your transaction ID for immediate assistance.'
    },
    {
      id: 'profit',
      title: 'Profit Not Received',
      description: 'Profit not credited within 30 minutes',
      solution: 'Check your account balance. If still not received, contact support with your investment details.'
    },
    {
      id: 'withdrawal',
      title: 'Withdrawal Problems',
      description: 'Unable to withdraw profits to bank account',
      solution: 'Ensure your bank details are correct. Contact support if the issue persists.'
    },
    {
      id: 'account',
      title: 'Account Related',
      description: 'Issues with account access or information',
      solution: 'Our support team can help you with any account-related queries via WhatsApp or Telegram.'
    }
  ]

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Customer Support</h1>
        <p className="text-gray-600">We're here to help you 24/7</p>
      </div>

      {/* Support Status */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-800 font-semibold">Support Team Online</span>
        </div>
        <p className="text-center text-green-700 text-sm mt-2">
          Average response time: 2-5 minutes
        </p>
      </div>

      {/* Quick Contact Options */}
      <div className="grid grid-cols-1 gap-4 mb-8">
        {supportOptions.map((option) => (
          <div
            key={option.id}
            className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{option.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-800">{option.title}</h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              </div>
              <a
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                {option.action}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Common Issues */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
          🔧 Common Issues & Solutions
        </h2>
        <div className="space-y-4">
          {commonIssues.map((issue) => (
            <div
              key={issue.id}
              className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedIssue(selectedIssue === issue.id ? null : issue.id)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-gray-800">{issue.title}</h3>
                  <p className="text-sm text-gray-600">{issue.description}</p>
                </div>
                <span className={`text-2xl transition-transform duration-200 ${
                  selectedIssue === issue.id ? 'rotate-180' : ''
                }`}>
                  ⌄
                </span>
              </button>
              
              {selectedIssue === issue.id && (
                <div className="px-4 pb-4 border-t border-gray-200 bg-white">
                  <div className="pt-4">
                    <p className="text-gray-700 mb-3">
                      <strong>Solution:</strong> {issue.solution}
                    </p>
                    <a
                      href={`https://wa.me/919876543210?text=Hi, I need help with: ${issue.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
                    >
                      Get Help via WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Support Hours */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-4 text-center">
          🕒 Support Hours
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-blue-700">WhatsApp & Telegram:</span>
            <span className="font-semibold text-blue-800">24/7 Available</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-700">Phone Support:</span>
            <span className="font-semibold text-blue-800">9 AM - 11 PM</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-700">Email Response:</span>
            <span className="font-semibold text-blue-800">Within 2 hours</span>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-red-800 mb-2 text-center">
          🚨 Emergency Support
        </h3>
        <p className="text-red-700 text-sm text-center mb-4">
          For urgent issues like payment failures or missing profits
        </p>
        <div className="text-center">
          <a
            href="https://wa.me/919876543210?text=URGENT: I need immediate help with my investment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition-colors"
          >
            Emergency WhatsApp
          </a>
        </div>
      </div>

      {/* Feedback */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl p-6">
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2">💝 Share Your Feedback</h3>
          <p className="text-sm opacity-90 mb-4">
            Help us improve our service by sharing your experience
          </p>
          <a
            href="https://wa.me/919876543210?text=Feedback: "
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Send Feedback
          </a>
        </div>
      </div>
    </div>
  )
}
