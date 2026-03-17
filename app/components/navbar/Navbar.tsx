'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { navLinks } from '@/app/data/navLinks'
import Logo from '@/public/Images/Logo.png'
import WaitlistModal from '@/app/components/shared/WaitlistModal'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 40)

      // Highlight 'Home' automatically when at the top of the page
      if (scrollY < 100) {
        setActiveSection('home')
      }
    }

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navLinks.forEach((link) => {
      if (link.href?.startsWith('#')) {
        const targetId = link.href.replace('#', '')
        const element = document.getElementById(targetId)
        if (element) observer.observe(element)
      }
    })

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const getIsActive = (href: string) => activeSection === href.replace('#', '')

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-background/95 backdrop-blur-md border-b border-foreground/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-3">
            <Link
              href="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Image
                src={Logo}
                alt="Logo"
                className="object-contain h-8 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = getIsActive(link.href || '')

                return (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className={`text-sm font-medium transition-all px-3 py-1.5 rounded-md ${
                      isActive
                        ? 'bg-primary/10 text-foreground'
                        : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary px-4 py-1.5 rounded-md text-sm font-medium text-foreground/70 hover:opacity-70 transition-opacity"
              >
                Download App
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden px-6 pt-6 pb-12 space-y-4 bg-background border-b border-foreground/10">
            {navLinks.map((link) => {
              const isActive = getIsActive(link.href || '')

              return (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-medium py-2 px-3 rounded-md ${
                    isActive
                      ? 'bg-primary/10 text-foreground'
                      : 'text-foreground/70'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-primary px-4 py-2 rounded-md text-sm font-medium text-foreground/70"
            >
              Download App
            </button>
          </div>
        )}
      </nav>

      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
