'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import SwiperCore from 'swiper'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import SectionHeader from '@/app/components/ui/SectionHeader'
import SubHeader from '@/app/components/ui/SubHeader'
import { testimonials } from '@/app/data/testimonials'

export default function Testimonials() {
  const swiperRef = useRef<SwiperCore | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <motion.section
      className="w-full py-16 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <SectionHeader className="mx-auto max-w-xl leading-normal">
            Trusted by Thousands of Happy Customer
          </SectionHeader>
          <SubHeader
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab"
            className="mx-auto max-w-xl"
          />
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="!pb-20"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div
                  className={`p-8 rounded-2xl border h-full transition-all duration-300 bg-[#101543] flex flex-col ${
                    activeIndex === index
                      ? 'border-primary shadow-[0_0_20px_rgba(50,205,50,0.1)]'
                      : 'border-white/10'
                  }`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden relative border border-white/10">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-bold font-poppins text-lg">
                          {item.name}
                        </h4>
                        <p className="text-white/80 text-xs font-sans">
                          {item.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-white font-bold text-sm">
                        {item.rating}
                      </span>
                      <Star
                        size={14}
                        className="text-yellow-500 fill-yellow-500"
                      />
                    </div>
                  </div>
                  <p className="text-white/70 font-sans leading-relaxed text-sm">
                    {item.content}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls Bar */}
          <div className="flex flex-row justify-between items-center -mt-6">
            {/* Custom Pagination Pills */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => swiperRef.current?.slideTo(index)}
                  className={`transition-all duration-300 rounded-full h-3 ${
                    activeIndex === index
                      ? 'w-10 bg-[#7C3AED]' // Purple pill from screenshot
                      : 'w-3 bg-white'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="p-3 rounded-full border border-primary text-white hover:bg-primary hover:text-white transition-all group active:scale-90"
              >
                <ArrowLeft size={24} />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="p-3 rounded-full border border-primary text-white hover:bg-primary hover:text-white transition-all group active:scale-90"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
