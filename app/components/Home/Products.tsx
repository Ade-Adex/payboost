import SectionHeader from '@/app/components/ui/SectionHeader'
import SubHeader from '@/app/components/ui/SubHeader'
import { products } from '@/app/data/products'
import Image from 'next/image'

export function Products() {
  return (
    <section id='products' className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <SectionHeader>Products</SectionHeader>
          <SubHeader
            text="Depending on where you are, the stress of buying crypto could drive you nuts. We're here to change that."
            className="max-w-xl font-poppins font-medium text-base leading-relaxed text-white mb-8"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              className={`${p.color} px-10 pt-10 pb-20 rounded-2xl  flex flex-col items-center justify-end text-center text-white relative overflow-hidden group shadow-2xl`}
            >
              {/* Image in the middle */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8 group-hover:scale-110 transition-transform">
                <Image
                  src={p.icon}
                  alt={p.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text at the bottom */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-4 font-poppins">
                  {p.title}
                </h3>
                <p className="text-white font-sans text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
