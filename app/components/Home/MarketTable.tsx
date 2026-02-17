import SectionHeader from '@/app/components/ui/SectionHeader'
import { coins } from '@/app/data/coins'

export default function MarketTable() {
  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader>Market History</SectionHeader>

        <div className="overflow-x-auto rounded-xl border border-foreground/10">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="text-black uppercase text-xs items-center font-semibold bg-gray-200 font-poppins">
                <th className="py-4 pl-10">Name</th>
                <th className="px-6 py-4">Coin</th>
                <th className="px-6 py-4">Last price</th>
                <th className="px-6 py-4">Market price</th>
                <th className="px-6 py-4">24h change</th>
                <th className="px-6 py-4">Trade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-foreground/10">
              {coins.map((coin) => (
                <tr
                  key={coin.coin}
                  className="hover:bg-foreground/5 transition-colors font-poppins font-medium"
                >
                  {/* Name + Icon */}
                  <td className="px-6 py-4 font-poppins">
                    <div className="flex items-center gap-3">
                      <coin.icon className="w-8 h-8 text-orange-500" />
                      <div className="font-medium text-black">
                        {coin.name}
                        <span className="ml-2 text-xs uppercase text-black">
                          {coin.coin}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-black">{coin.coin}</td>
                  <td className="px-6 py-4 text-black">{coin.lastPrice}</td>
                  <td className="px-6 py-4 text-black">{coin.marketPrice}</td>
                  <td className="px-6 py-4 text-green-500 font-medium">
                    {coin.change24h}
                  </td>
                  <td className="px-6 py-4">
                    <button className="bg-primary text-white px-8 py-2 rounded-lg text-sm font-poppins font-bold">
                      Buy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="flex mx-auto mt-10 border border-primary px-8 py-3 rounded-md text-sm font-bold hover:bg-foreground/5">
          View More
        </button>
      </div>
    </section>
  )
}
