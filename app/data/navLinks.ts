// /app/data/navLinks.ts



import { NavLink } from '@/app/types/navigation'

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },

  {
    label: 'Features',
    children: [
      { label: 'Crypto', href: '#crypto' },
      { label: 'Pay In', href: '#pay-in' },
    ],
  },

  { label: 'About Us', href: '#about-us' },
  { label: 'Contact', href: '#contact' },
]
