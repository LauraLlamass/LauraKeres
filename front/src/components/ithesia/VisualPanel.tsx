type VisualPanelProps = {
  className?: string
  image: string
  label: string
  variant?: 'leather' | 'parchment' | 'sage'
}

function VisualPanel({
  className = '',
  image,
  label,
  variant = 'leather',
}: VisualPanelProps) {
  const background = {
    leather: 'bg-leather',
    parchment: 'bg-parchment',
    sage: 'bg-sage',
  }[variant]

  return (
    <div
      aria-label={label}
      className={`relative flex min-h-40 items-center justify-center overflow-hidden rounded-2xl ${background} ${className}`}
      role="img"
    >
      <img
        alt={label}
        className="h-full w-full object-cover"
        src={image}
      />
    </div>
  )
}

export default VisualPanel
