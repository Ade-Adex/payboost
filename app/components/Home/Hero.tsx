import Line from '@/app/components/shared/Line'
import AppStore from '@/public/Images/AppStore.png'
import GooglePlay from '@/public/Images/GooglePlay.png'
import HeroImage from '@/public/Images/Hero3.png'
import Image from 'next/image'
import HeroOverlay from '@/public/Images/Hero-Overlay.png'

export default function Hero() {
  return (
    <section className="flex items-center bg-background overflow-hidden w-full">
      {/* 2-Column Grid that spans full screen width */}
      <div className="grid md:grid-cols-2 w-full max-w-6xl mx-auto px-6 py-8 h-full md:h-[80vh]">
        {/* LEFT COLUMN: Content + Background touching edge */}
        <div className="relative flex items-center w-full">
          {/* Text Content wrapped to stay readable */}
          <div className="flex flex-col relative z-10 w-full max-w-[500px] ">
            <h1 className="w-full max-w-[85%] text-3xl md:text-5xl font-bold text-foreground font-lora md:leading-[1.05] text-left">
              Best place to buy and sell{' '}
              <span className="text-[#8EB69B]">
                crypto <br /> currency
              </span>{' '}
              asset
            </h1>
            <p className="text-base md:text-xl mt-4 md:mt-4 font-normal text-left font-poppins">
              The easiest and safest way to enter the world of digital assets.
            </p>
            <p className="text-xs md:text-sm mt-2 font-normal text-left font-poppins">
              Our crypto platform gives you instant access to Bitcoin, Ethereum,
              and hundreds of top cryptocurrencies — all in one powerful,
              easy-to-use wallet and exchange. Whether you’re just getting
              started or already trading, we make crypto simple, secure, and
              profitable.
            </p>
            {/* <div className="pt-6 relative flex flex-col w-full md:max-w-50">
              <button className="bg-primary hover:bg-primary/80 text-white mt-3 px-8 py-2 rounded-full font-semibold font-overpass text-lg transition-all shadow-xl shadow-primary/20 active:scale-95 w-fit mx-auto md:w-auto">
                Get Started
              </button>
              <Line
                width="w-16"
                height="2px"
                color="bg-gray-700"
                className="absolute -bottom-4 left-1/2 -translate-x-1/2"
              />
            </div> */}

            <div className="pt-6 relative flex flex-col items-center w-full md:max-w-md">
              {/* Store Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-0">
                <Image
                  src={GooglePlay}
                  alt="Get it on Google Play"
                  className="w-35 cursor-pointer hover:scale-105 transition-transform"
                />

                <Image
                  src={AppStore}
                  alt="Download on the App Store"
                  className="w-35 cursor-pointer hover:scale-105 transition-transform"
                />
              </div>

              {/* Decorative Line */}
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
        <div className="relative flex justify-end bg-transparent w-full">
          <div className="relative w-full h-75 md:h-[100%]">
            <Image
              src={HeroImage}
              alt="Payboost Illustration"
              priority
              fill
              className="object-cover md:scale-125 w-full"
            />
          </div>
        </div>
      </div>
      <div className="absolute left-0 inset-0 select-none pointer-events-none -bottom-100 lg:-bottom-125 z-40">
        <Image
          src={HeroOverlay}
          alt=""
          priority
          fill
          className="object-contain object-left"
        />
      </div>
    </section>
  )
}
