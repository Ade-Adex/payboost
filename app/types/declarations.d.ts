// /app/types/declarations.d.ts

declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

// Add these to fix the Swiper errors
declare module 'swiper/css'
declare module 'swiper/css/navigation'
declare module 'swiper/css/pagination'
declare module 'swiper/css/effect-fade'
