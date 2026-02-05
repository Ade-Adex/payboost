export default function MarketTable() {
  const coins = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$41,003',
      cap: '$778,673M',
      change: '+4.42%',
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$2,803',
      cap: '$778,877M',
      change: '+1.68%',
    },
    {
      name: 'Dogecoin',
      symbol: 'DOGE',
      price: '$1,004',
      cap: '$523,763M',
      change: '+4.05%',
    },
    // ... add more as per your screenshots
  ]

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-foreground mb-12">
          What The Market Is Saying?
        </h2>

        <div className="overflow-x-auto rounded-xl border border-foreground/10">
          <table className="w-full text-left border-collapse bg-background">
            <thead>
              <tr className="bg-foreground/5 text-foreground/60 uppercase text-xs">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Last price</th>
                <th className="px-6 py-4">Market price</th>
                <th className="px-6 py-4">24h change</th>
                <th className="px-6 py-4">Trade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-foreground/10">
              {coins.map((coin) => (
                <tr
                  key={coin.symbol}
                  className="hover:bg-foreground/5 transition-colors"
                >
                  <td className="px-6 py-6 font-bold text-foreground">
                    {coin.name}{' '}
                    <span className="text-foreground/40 ml-2 uppercase text-xs">
                      {coin.symbol}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-foreground">{coin.price}</td>
                  <td className="px-6 py-6 text-foreground">{coin.cap}</td>
                  <td className="px-6 py-6 text-green-500 font-medium">
                    {coin.change}
                  </td>
                  <td className="px-6 py-6">
                    <button className="bg-[#32CD32] text-white px-6 py-2 rounded-lg text-sm font-bold">
                      Buy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="mt-10 border border-foreground/20 px-8 py-3 rounded-lg font-bold hover:bg-foreground/5">
          View More
        </button>
      </div>
    </section>
  )
}
