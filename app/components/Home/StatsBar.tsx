import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import BackGroundImage from '@/public/Images/unsplash_RDXcFY5g5O4.png'

export default function StatsBar() {
  return (
    <section className="relative min-h-45 w-full flex items-center overflow-hidden">
      {/* 1. The Background Image Layer */}
      <div className="absolute inset-0 z-10">
        <Image
          src={BackGroundImage}
          alt="Stats Background"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay to ensure text legibility */}
        {/* <div className="absolute inset-0 bg-black/40" /> */}
      </div>

      {/* 2. The Content Layer */}
      <div className="max-w-5xl mx-auto px-6 py-10 w-full relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Stats Grid */}
          <div className="flex flex-col gap-8 w-full md:w-1/2">
            {[
              'Stable Liquidity',
              'High Buy Back Rate',
              'High Burn Rate Usage',
            ].map((text) => (
              <div key={text} className="flex items-center gap-3 text-white">
                <CheckCircle2 className="text-[#F39C12] shrink-0" size={24} />
                <span className="font-semibold text-base md:text-lg font-poppins tracking-tight">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="flex flex-col gap-8 w-full md:w-1/2">
            <p className="text-white text-center md:text-left max-w-87.5 font-semibold font-poppins text-lg leading-relaxed">
              Experience a perfect uptrend when you buy and HODL our coin...
            </p>
            <button
              style={{
                background:
                  'linear-gradient(135deg, #EEA743 0%, #EEA743 10%, #B54332 100%)',
              }}
              className="hover:scale-105 transition-transform text-white px-12 py-3 rounded-md font-bold whitespace-nowrap shadow-xl shadow-black/20 self-end"
            >
              Trade now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
