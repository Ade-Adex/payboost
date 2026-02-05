import React from 'react'
import clsx from 'clsx'

interface SubHeaderProps {
  text: string
  className?: string
}

export default function SubHeader({ text, className }: SubHeaderProps) {
  return (
    <p
      className={clsx(
        // Default styles
        'font-poppins font-medium leading-[100%] tracking-[0%] text-white',
        // Custom classes passed via props
        className,
      )}
    >
      {text}
    </p>
  )
}
