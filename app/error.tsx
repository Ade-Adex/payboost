'use client'

import { useEffect } from 'react'
import { RefreshCcw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse">
          !
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Something went wrong!
      </h2>
      <p className="text-white/60 max-w-md mx-auto mb-10">
        We encountered an unexpected error. Our team has been notified and
        we&apos;re working to boost the system back up.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <button
          onClick={() => reset()}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-bold transition-all active:scale-95 border border-white/10"
        >
          <RefreshCcw size={18} />
          Try Again
        </button>

        <Link
          href="/"
          className="flex items-center gap-2 bg-[#00B512] hover:bg-[#00E625] text-white px-8 py-3 rounded-full font-bold transition-all active:scale-95 shadow-lg shadow-green-900/20"
        >
          <Home size={18} />
          Go Home
        </Link>
      </div>
    </main>
  )
}
