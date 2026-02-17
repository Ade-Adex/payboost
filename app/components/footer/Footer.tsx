import React from 'react'
import { navLinks } from '@/app/data/navLinks'
import Image from 'next/image'
import Logo from '@/public/Images/Logo.png'
import Link from 'next/link'
// Importing React Icons
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full bg-background text-foreground py-12 border-t border-white/10">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 max-w-sm">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src={Logo}
                alt="PayBoost Logo"
                width={180}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed opacity-80 font-geist-sans text-center md:text-left">
              Welcome to Pay Boost, where financial empowerment meets
              innovation. We are a fintech platform dedicated to transforming
              the traditional salary cycle.
            </p>

            {/* Social Icons with React Icons */}
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <FaFacebookF size={16} />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <FaLinkedinIn size={16} />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <FaTwitter size={16} />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6 font-geist-sans">
              Company
            </h4>
            <ul className="space-y-4 opacity-80 text-sm font-geist-sans">
              <li>
                <Link
                  href="#products"
                  className="hover:opacity-100 transition-opacity"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="#why-choose-us"
                  className="hover:opacity-100 transition-opacity"
                >
                  Why Choose us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:opacity-100 transition-opacity"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* T&C Links */}
          <div className="w-full text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6 font-geist-sans">
              T & C
            </h4>
            <ul className="space-y-4 opacity-80 text-sm font-geist-sans">
              <li>
                <Link href="" className="hover:opacity-100 transition-opacity">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="" className="hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="" className="hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/10 text-center md:text-left">
          <p className="text-sm font-poppins">© 2026 PayBoost.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
