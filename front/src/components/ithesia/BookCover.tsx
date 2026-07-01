type BookCoverProps = {
  image?: string
  status?: string
  title: string
}

function BookCover({ image, status, title }: BookCoverProps) {
  if (image) {
    return (
      <div className="aspect-[141/200] overflow-hidden rounded-xl bg-leather">
        <img
          alt={`Portada de ${title}`}
          className="h-full w-full object-cover"
          src={image}
        />
      </div>
    )
  }

  return (
    <div className="relative flex aspect-[141/200] flex-col items-center justify-center overflow-hidden rounded-xl border border-sage bg-parchment p-6 text-center">
      <span
        aria-hidden="true"
        className="absolute inset-3 rounded-lg border border-sage"
      />
      <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-sage">
        {status}
      </p>
      <p className="relative mt-5 font-serif text-2xl leading-tight">{title}</p>
      <span
        aria-hidden="true"
        className="relative mt-6 h-px w-12 bg-sage"
      />
      <p className="relative mt-5 text-sm">Laura Keres</p>
    </div>
  )
}

export default BookCover
