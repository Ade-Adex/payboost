import React from 'react'
import clsx from 'clsx'

interface SectionHeaderProps {
  children: React.ReactNode
  className?: string
}

export default function SectionHeader({
  children,
  className,
}: SectionHeaderProps) {
  return (
    <h2
      className={clsx(
        'text-3xl md:text-4xl font-bold font-poppins text-foreground mb-6',
        className,
      )}
    >
      {children}
    </h2>
  )
}
