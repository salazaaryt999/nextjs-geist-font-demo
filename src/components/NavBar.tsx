'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home', emoji: '🏠' },
    { href: '/live-btc-chart', label: 'Chart', emoji: '📈' },
    { href: '/live-chat', label: 'Chat', emoji: '💬' },
    { href: '/earnings', label: 'Proof', emoji: '💰' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
              pathname === item.href
                ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg'
                : 'text-gray-600 hover:text-black hover:bg-gray-100'
            }`}
          >
            <span className="text-lg mb-1">{item.emoji}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
