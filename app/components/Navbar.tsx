'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/app/data/navLinks'
import Image from 'next/image'
import Logo from '@/public/Images/Logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tight">
              <Image src={Logo} alt="PayBoost Logo" className='w-auto h-8 md:h-12' />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <NavbarLink key={link.href} href={link.href} label={link.label} />
            ))}
            |
            <div className="hidden md:block">
              <button className="px-4 py-2 rounded-full font-medium text-sm transition-all underline">
                Register
              </button>

              <button className="bg-primary hover:bg-primary/80 text-white px-4 py-1.5 rounded-md font-medium text-sm transition-all shadow-lg shadow-primary/20">
                Login
              </button>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-white/10">
          <div className="px-2 pt-2 pb-8 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-base font-medium hover:opacity-70 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

function NavbarLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-foreground/70 hover:opacity-70 transition-opacity"
    >
      {label}
    </Link>
  )
}
