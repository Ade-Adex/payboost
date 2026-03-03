import Link from 'next/link'
import { MoveLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="relative">
        <h1 className="text-[12rem] md:text-[15rem] font-bold text-white/5 leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
            Lost in Space?
          </h2>
          <p className="text-white/60 max-w-md mx-auto mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved to a better version.
          </p>
        </div>
      </div>

      <Link
        href="/"
        className="flex items-center gap-2 bg-[#00B512] hover:bg-[#00E625] text-white px-8 py-3 rounded-full font-bold transition-all active:scale-95 shadow-lg shadow-green-900/20 cursor-pointer z-30"
      >
        <MoveLeft size={20} />
        Back to PayBoost
      </Link>
    </main>
  )
}
