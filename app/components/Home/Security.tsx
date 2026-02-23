import Image from 'next/image'
import SectionBG from '@/public/Images/SectionBG.png'
import Shield from '@/public/Images/Trust-Checked.png' // Replace with your shield image path
import {
  SectionDescription,
  SectionHeading,
  SectionTag,
} from '@/app/components/shared/Typography'

export default function Security() {
  return (
    <section className="w-full relative overflow-hidden md:pt-6 pb-24">
      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 w-full">
        <Image
          src={SectionBG}
          alt="Background Pattern"
          fill
          priority
          className="object-fill w-full"
          quality={100}
        />
      </div>

      <div className="relative z-30 max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-0">
        {/* Left: Shield Illustration */}
        <div className="flex justify-center">
          <Image
            src={Shield}
            alt="Security Shield"
            className="w-full max-w-80 object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col">
          <SectionTag bgColor="bg-[#003B47]" textColor="text-white">
            Trustworthiness
          </SectionTag>

          <SectionHeading>
            We value your trust <br /> and security
          </SectionHeading>

          <div className="mt-4">
            <SectionDescription>
              Our Mission Is To Make Finance More Accessible, Transparent, And
              Secure For Everyone. With Cutting-Edge Technology, We Ensure Your
              Assets Are Always Protected.
            </SectionDescription>
          </div>

          <button className="bg-primary text-white rounded-full w-fit mx-auto md:mx-0 px-10 py-3 text-xs font-bold font-poppins shadow-[0_4px_20px_rgba(22,181,30,0.3)] hover:scale-105 transition-all mt-4">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}