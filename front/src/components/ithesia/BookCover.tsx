type BookCoverProps = {
  image?: string
  status?: string
  title: string
}

function BookCover({ image, status, title }: BookCoverProps) {
  if (image) {
    return (
      <div className="relative aspect-[141/200] overflow-hidden rounded-xl bg-leather">
        <img
          alt={`Portada de ${title}`}
          className="h-full w-full object-cover"
          src={image}
        />
        {status && (
          <span className="absolute left-1/2 top-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-paper px-3 py-1 text-xs font-bold uppercase tracking-wide text-leather shadow-sm">
            {status}
          </span>
        )}
      </div>
    )
  }

  return (
    <div className="relative flex aspect-[141/200] flex-col items-center justify-center overflow-hidden rounded-xl border border-sage bg-parchment p-6 text-center">
      <span
        aria-hidden="true"
        className="absolute inset-3 rounded-lg border border-sage"
      />
      {status && (
        <span className="absolute left-1/2 top-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-paper px-3 py-1 text-xs font-bold uppercase tracking-wide text-leather shadow-sm">
          {status}
        </span>
      )}
      <p className="relative font-serif text-2xl leading-tight">{title}</p>
      <span
        aria-hidden="true"
        className="relative mt-6 h-px w-12 bg-sage"
      />
      <p className="relative mt-5 text-sm">Laura Keres</p>
    </div>
  )
}

export default BookCover
