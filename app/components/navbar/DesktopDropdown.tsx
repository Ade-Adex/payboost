'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { NavLink } from '@/app/types/navigation'

interface DesktopDropdownProps {
  link: NavLink
}

export default function DesktopDropdown({ link }: DesktopDropdownProps) {
  const [open, setOpen] = useState(false)
  const closeTimeout = useRef<NodeJS.Timeout | null>(null)

  if (!link.children) return null

  const handleOpen = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
    setOpen(true)
  }

  const handleClose = () => {
    closeTimeout.current = setTimeout(() => {
      setOpen(false)
    }, 150) // 👈 delay prevents accidental close
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      {/* Trigger */}
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:bg-primary px-2 py-1.5 rounded-md"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {link.label}
        <ChevronDown size={14} />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute left-0 top-full mt-2 min-w-40 rounded-md border border-white/10 bg-background shadow-lg pb-4"
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        >
          {link.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block text-sm font-medium text-foreground/70 hover:bg-primary px-2 py-1.5"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
