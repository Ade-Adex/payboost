import SectionHeader from '@/app/components/ui/SectionHeader'
import SubHeader from '@/app/components/ui/SubHeader'
import { features } from '@/app/data/features'
import Image from 'next/image'

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <SectionHeader>Why Choose Us?</SectionHeader>
          <SubHeader
            text="Depending on where you are, the stress of buying crypto could drive
            you nuts. We're here to change that."
            className="max-w-xl font-poppins font-medium text-base leading-relaxed text-white mb-8"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#101543] p-10 rounded-3xl border border-white/5 flex flex-col items-center text-center group hover:border-[#32CD32]/30 transition-all"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8 group-hover:scale-110 transition-transform">
                <Image
                  src={f.icon}
                  alt={f.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 font-poppins">
                {f.title}
              </h3>
              <p className="text-white font-sans text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
