interface LineProps {
  width?: string // e.g., "100%", "50px", "w-full"
  height?: string // thickness, default "1px"
  color?: string // tailwind class or hex
  className?: string // for extra margins/positioning
}

export default function Line({
  width = 'w-full',
  height = '1px',
  color = 'bg-foreground/10', // Default to subtle version of your text color
  className = '',
}: LineProps) {
  return (
    <div
      className={`${width} ${color} ${className}`}
      style={{ height: height }}
      aria-hidden="true"
    />
  )
}
