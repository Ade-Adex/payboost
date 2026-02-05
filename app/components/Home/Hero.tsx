import Image from 'next/image'
import HeroImage from '@/public/Images/Hero.png'
import HeroLeftBackGround from '@/public/Images/Hero-Left.png'
import Line from '@/app/components/shared/Line'

export default function Hero() {
  return (
    <section className="relative  flex items-center bg-background overflow-hidden w-full pt-6">
      {/* 2-Column Grid that spans full screen width */}
      <div className="grid md:grid-cols-2 w-full h-[90vh]">
        {/* LEFT COLUMN: Content + Background touching edge */}
        <div className="relative flex items-center px-4 md:px-0 md:pl-[10%] lg:pl-[20%]">
          {/* Background Image touching left and top/bottom edges */}
          <div className="absolute left-0 top-0 inset-0 select-none pointer-events-none">
            <Image
              src={HeroLeftBackGround}
              alt=""
              priority
              fill
              className="object-contain object-left"
            />
          </div>

          {/* Text Content wrapped to stay readable */}
          <div className="flex flex-col relative z-10 w-full">
            <h1 className="text-3xl md:text-5xl font-semibold text-foreground font-overpass leading-[1.4] md:leading-[1.05] text-left">
              Buy, Sell And Move Digital Assets
            </h1>
            <p className="text-[#767676] text-base md:text-xl mt-4 md:mt-0 font-normal text-left font-overpass">
              At Finance we care about your future. We help you invest the way
              you want. So you can relax, have fun and let your fund grow.
            </p>
            <div className="pt-6 relative flex flex-col w-full md:max-w-50">
              <button className="bg-primary hover:bg-primary/80 text-white mt-3 px-8 py-2 rounded-full font-semibold font-overpass text-lg transition-all shadow-xl shadow-primary/20 active:scale-95 w-fit mx-auto md:w-auto">
                Get Started
              </button>
              <Line
                width="w-16"
                height="2px"
                color="bg-gray-700"
                className="absolute -bottom-4 left-1/2 -translate-x-1/2"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Large Hero Illustration touching right edge */}
        <div className="relative flex justify-end items-center bg-transparent w-full">
          <div className="relative w-full h-75 md:h-full ">
            <Image
              src={HeroImage}
              alt="Payboost Illustration"
              priority
              fill
              className="object-contain md:object-right md:object-center scale-110" // scale-110 makes it a bit bigger
            />
          </div>
        </div>
      </div>
    </section>
  )
}
