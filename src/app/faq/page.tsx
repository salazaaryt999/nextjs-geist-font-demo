'use client'

import { useState } from 'react'

interface FAQItem {
  id: number
  question: string
  answer: string
  isOpen: boolean
}

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      id: 1,
      question: "How does the investment process work?",
      answer: "Simply select an investment plan, make the payment, and receive your profit within 30 minutes. Our automated Bitcoin trading system generates consistent returns for all investors.",
      isOpen: false
    },
    {
      id: 2,
      question: "Is my money safe and secure?",
      answer: "Yes, absolutely! We use bank-level security with 256-bit SSL encryption. Your funds are protected by advanced security protocols and our platform has a 98.5% success rate.",
      isOpen: false
    },
    {
      id: 3,
      question: "How quickly will I receive my profits?",
      answer: "All profits are automatically transferred to your account within 30 minutes of investment. Our average payout time is 28.5 minutes based on thousands of successful transactions.",
      isOpen: false
    },
    {
      id: 4,
      question: "What are the minimum and maximum investment amounts?",
      answer: "You can start with as little as ₹399 and invest up to ₹999 per transaction. We offer 7 different investment plans to suit every budget and risk appetite.",
      isOpen: false
    },
    {
      id: 5,
      question: "Can I make multiple investments?",
      answer: "Yes! You can make multiple investments throughout the day. Many of our users make 3-5 investments daily to maximize their earnings. Each investment is processed independently.",
      isOpen: false
    },
    {
      id: 6,
      question: "How do you generate such high returns?",
      answer: "Our advanced AI-powered Bitcoin trading algorithms capitalize on market volatility and price differences across multiple exchanges to generate consistent profits for our investors.",
      isOpen: false
    },
    {
      id: 7,
      question: "What payment methods do you accept?",
      answer: "We accept UPI, bank transfers, and all major digital payment methods. Payments are processed instantly and securely through our encrypted payment gateway.",
      isOpen: false
    },
    {
      id: 8,
      question: "Is there any registration required?",
      answer: "No lengthy registration process! Simply select your plan, provide basic details, make payment, and start earning. We believe in keeping things simple and fast.",
      isOpen: false
    },
    {
      id: 9,
      question: "What if I don't receive my profit on time?",
      answer: "Our system has a 98.5% success rate. In the rare case of any delay, our support team will resolve it within 24 hours and provide compensation for the inconvenience.",
      isOpen: false
    },
    {
      id: 10,
      question: "Can I withdraw my profits immediately?",
      answer: "Yes! Once profits are credited to your account, you can withdraw them immediately to your bank account or UPI. There are no withdrawal restrictions or hidden fees.",
      isOpen: false
    }
  ])

  const toggleFAQ = (id: number) => {
    setFaqs(faqs.map(faq => 
      faq.id === id ? { ...faq, isOpen: !faq.isOpen } : { ...faq, isOpen: false }
    ))
  }

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-600">Everything you need to know about our investment platform</p>
      </div>

      {/* Quick Stats */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl mb-8">
        <div className="text-center">
          <h2 className="text-lg font-bold mb-4">📊 Platform Statistics</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-2xl font-bold">98.5%</div>
              <div className="text-xs opacity-80">Success Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold">28.5</div>
              <div className="text-xs opacity-80">Avg. Minutes</div>
            </div>
            <div>
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-xs opacity-80">Happy Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-4 mb-8">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
            >
              <h3 className="font-semibold text-gray-800 pr-4">{faq.question}</h3>
              <span className={`text-2xl transition-transform duration-200 ${
                faq.isOpen ? 'rotate-180' : ''
              }`}>
                ⌄
              </span>
            </button>
            
            {faq.isOpen && (
              <div className="px-4 pb-4">
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Support */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            💬 Still Have Questions?
          </h3>
          <p className="text-green-700 mb-4">
            Our support team is available 24/7 to help you
          </p>
          <div className="space-y-2">
            <a
              href="/support"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors mr-3"
            >
              Contact Support
            </a>
            <a
              href="/live-chat"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Join Live Chat
            </a>
          </div>
        </div>
      </div>

      {/* Investment Plans CTA */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-xl">
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2">🚀 Ready to Start Investing?</h3>
          <p className="text-sm opacity-90 mb-4">
            Join thousands of successful investors earning daily profits
          </p>
          <a
            href="/"
            className="inline-block bg-white text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            View Investment Plans
          </a>
        </div>
      </div>
    </div>
  )
}
