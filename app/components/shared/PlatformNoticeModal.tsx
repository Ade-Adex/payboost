'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Apple, Info } from 'lucide-react'

export default function PlatformNoticeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-[#01202F] border border-white/10 shadow-2xl"
          >
            {/* Decorative Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 blur-[60px] rounded-full" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors cursor-pointer z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-10 text-center relative z-10">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
                <Apple className="text-white" size={32} />
              </div>

              <h2 className="text-2xl font-bold text-white mb-3">
                iOS Version Coming Soon
              </h2>

              <p className="text-white/70 text-sm leading-relaxed mb-8">
                We are currently polishing the Payboost experience for iPhone
                users. The iOS app is in development and will be available on
                the App Store shortly.
              </p>

              <div className="flex flex-col gap-3">
                <div className="bg-[#082930] border border-white/5 rounded-xl p-4 flex items-start gap-3 text-left">
                  <Info className="text-[#E2FF54] shrink-0" size={18} />
                  <p className="text-xs text-white/80">
                    Our Android APK is currently available for immediate use.
                    Check back soon for the Apple update!
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="w-full mt-4 bg-white text-[#01202F] font-bold py-3 rounded-full hover:bg-white/90 transition-all active:scale-95 cursor-pointer"
                >
                  Got it, thanks!
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
