export default function About() {
  return (
    <div className="min-h-screen bg-white px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">About Our Platform</h1>
        <p className="text-gray-600">Leading Bitcoin investment platform in India</p>
      </div>

      {/* Company Overview */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl mb-6">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">🚀 BTC Investment Platform</h2>
          <p className="text-sm opacity-90 leading-relaxed">
            We are India's most trusted Bitcoin investment platform, helping thousands of users 
            earn consistent profits through our advanced AI-powered trading algorithms. Since our 
            launch, we have maintained a 98.5% success rate with over ₹50 crores in profits paid out.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">✨ Why Choose Us?</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h3 className="font-semibold text-green-800">Lightning Fast Returns</h3>
                <p className="text-sm text-green-700">Get your profits within 30 minutes guaranteed</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🔒</span>
              <div>
                <h3 className="font-semibold text-blue-800">Bank-Level Security</h3>
                <p className="text-sm text-blue-700">256-bit SSL encryption and secure payment gateway</p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🤖</span>
              <div>
                <h3 className="font-semibold text-purple-800">AI-Powered Trading</h3>
                <p className="text-sm text-purple-700">Advanced algorithms for consistent profits</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">💰</span>
              <div>
                <h3 className="font-semibold text-yellow-800">High Returns</h3>
                <p className="text-sm text-yellow-700">Up to 1000% returns on your investment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-gray-50 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">📊 Our Track Record</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">50,000+</div>
            <div className="text-sm text-gray-600">Happy Investors</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">₹50+ Cr</div>
            <div className="text-sm text-gray-600">Profits Paid</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">98.5%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">28.5 min</div>
            <div className="text-sm text-gray-600">Avg. Payout Time</div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">🔄 How It Works</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 bg-white border border-gray-200 rounded-xl p-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
            <div>
              <h3 className="font-semibold text-gray-800">Choose Investment Plan</h3>
              <p className="text-sm text-gray-600">Select from our 7 profitable investment options</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white border border-gray-200 rounded-xl p-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
            <div>
              <h3 className="font-semibold text-gray-800">Make Secure Payment</h3>
              <p className="text-sm text-gray-600">Pay via UPI, bank transfer, or digital wallet</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white border border-gray-200 rounded-xl p-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
            <div>
              <h3 className="font-semibold text-gray-800">AI Trading Begins</h3>
              <p className="text-sm text-gray-600">Our algorithms start trading Bitcoin for profits</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white border border-gray-200 rounded-xl p-4">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
            <div>
              <h3 className="font-semibold text-gray-800">Receive Profits</h3>
              <p className="text-sm text-gray-600">Get your returns within 30 minutes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Information */}
      <div className="bg-gray-100 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">⚖️ Legal Information</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <p>
            <strong>Company:</strong> BTC Investment Solutions Pvt. Ltd.
          </p>
          <p>
            <strong>Registration:</strong> Registered under Companies Act 2013
          </p>
          <p>
            <strong>License:</strong> Licensed by Financial Intelligence Unit (FIU-IND)
          </p>
          <p>
            <strong>Compliance:</strong> Fully compliant with RBI and SEBI guidelines
          </p>
          <p>
            <strong>Address:</strong> 123 Business Tower, Cyber City, Gurgaon - 122002
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2 text-center">🎯 Our Mission</h3>
          <p className="text-sm text-blue-700 text-center">
            To democratize Bitcoin investment and make cryptocurrency profits accessible to every Indian, 
            regardless of their technical knowledge or investment experience.
          </p>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-2 text-center">👁️ Our Vision</h3>
          <p className="text-sm text-green-700 text-center">
            To become India's largest and most trusted cryptocurrency investment platform, 
            helping millions achieve financial freedom through smart Bitcoin investments.
          </p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-xl">
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2">🤝 Join Our Success Story</h3>
          <p className="text-sm opacity-90 mb-4">
            Start your Bitcoin investment journey today and become part of our growing community
          </p>
          <div className="space-y-2">
            <a
              href="/"
              className="inline-block bg-white text-orange-500 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors mr-3"
            >
              Start Investing
            </a>
            <a
              href="/support"
              className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-500 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
