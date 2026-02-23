// /app/fonts/fonts.ts

import {
  Plus_Jakarta_Sans,
  Poppins,
  Overpass,
  Lora,
  Montserrat,
  Syne,
  Archivo_Black,
} from 'next/font/google'

export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
})

export const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const overpass = Overpass({
  variable: '--font-overpass',
  subsets: ['latin'],
})

export const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], // include bold for headings
})

export const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['700', '800'],
})

export const archivoBlack = Archivo_Black({
  variable: '--font-archivo-black',
  subsets: ['latin'],
  weight: '400', // Archivo Black only comes in 400, but it is natively very heavy
})
