type FramedImageProps = {
  alt?: string
  className?: string
  src: string
}

function FramedImage({ alt = '', className = '', src }: FramedImageProps) {
  return (
    <figure
      className={`relative m-0 min-h-[390px] overflow-hidden rounded-xl bg-leather p-3 font-bold max-[540px]:min-h-[220px] ${className}`.trim()}
    >
      <img
        className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-xl object-cover"
        src={src}
        alt={alt}
      />
    </figure>
  )
}

export default FramedImage
