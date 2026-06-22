function NotFoundPage() {
  return (
    <main className="w-full flex-1 px-6 py-20 max-[820px]:py-12">
      <section className="mx-auto grid w-[min(1120px,100%)] gap-5">
        <p className="mb-3 text-sm font-bold uppercase">
          404
        </p>
        <h1 className="font-serif text-8xl leading-none max-[1024px]:text-7xl max-[540px]:text-5xl">
          Pagina no encontrada
        </h1>
        <p className="max-w-[680px] text-lg leading-8">
          La ruta que buscas todavia no existe.
        </p>
      </section>
    </main>
  )
}

export default NotFoundPage
