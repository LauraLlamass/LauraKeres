# Componentes de Ithesia

La página de Ithesia está construida mediante componentes pequeños y
reutilizables. Los componentes se encargan de la presentación, mientras que
los textos, imágenes, botones y rutas se configuran en:

`src/data/ithesiaContent.ts`

## Estructura principal

### `IthesiaPage`

Archivo: `src/pages/IthesiaPage.tsx`

Es la página principal de Ithesia. Su responsabilidad es importar y ordenar
las diferentes secciones:

1. `IthesiaHero`
2. `BooksSection`
3. `StoriesSection`
4. `HighlightSection`
5. `IthesiaCta`

No contiene directamente los textos de la página.

### `IthesiaHero`

Archivo: `src/components/ithesia/IthesiaHero.tsx`

Es la cabecera principal de Ithesia. Muestra:

- El título.
- Una descripción.
- Un botón.
- Tres imágenes dispuestas en una composición asimétrica.

Recibe sus datos desde `ithesiaHero`.

### `BooksSection`

Archivo: `src/components/ithesia/BooksSection.tsx`

Presenta los cuatro libros de Ithesia en una cuadrícula responsive.

Recibe:

- `title`: título de la sección.
- `text`: introducción.
- `books`: listado de libros.

Recorre el listado con `map` y crea un componente `BookCard` por cada libro.

### `StoriesSection`

Archivo: `src/components/ithesia/StoriesSection.tsx`

Muestra una historia principal con una imagen grande y varias historias
secundarias con imágenes más pequeñas.

Recibe:

- `title`: título de la sección.
- `stories`: listado de historias.

La primera historia se utiliza como destacada y las restantes aparecen en la
columna secundaria.

### `HighlightSection`

Archivo: `src/components/ithesia/HighlightSection.tsx`

Combina varios párrafos con una composición de tres imágenes. Sirve para
presentar información destacada sobre Ithesia.

Recibe:

- `title`: título.
- `paragraphs`: listado de párrafos.

### `IthesiaCta`

Archivo: `src/components/ithesia/IthesiaCta.tsx`

Es la llamada a la acción que aparece al final de la página.

Recibe:

- `title`: título.
- `text`: descripción.
- `cta`: texto y destino del botón.

## Componentes relacionados con los libros

### `BookCard`

Archivo: `src/components/ithesia/BookCard.tsx`

Representa un libro dentro de la cuadrícula de `BooksSection`.

Muestra:

- La portada.
- El título.
- Una descripción breve.
- Un botón para entrar en la página individual.

Utiliza `BookCover` para mostrar la portada y `ButtonLink` para el botón.

### `BookCover`

Archivo: `src/components/ithesia/BookCover.tsx`

Controla cómo se representa la portada de un libro.

- Si recibe `image`, muestra la portada oficial.
- Si no recibe una imagen, genera una portada provisional con el título,
  el estado y el nombre de Laura Keres.

Recibe:

- `title`: título del libro.
- `image`: ruta opcional de la portada.
- `status`: texto opcional, por ejemplo `Portada provisional`.

### `BookDetail`

Archivo: `src/components/ithesia/BookDetail.tsx`

Construye la vista individual de un libro.

Muestra:

- La portada.
- El título.
- Una descripción breve.
- Una descripción larga formada por varios párrafos.
- Un botón para volver a Ithesia.

### `IthesiaBookPage`

Archivo: `src/pages/IthesiaBookPage.tsx`

Gestiona las páginas individuales de los libros.

Busca dentro de `ithesiaBooks.books` el libro cuya ruta coincide con
`window.location.pathname`. Si encuentra el libro, entrega sus datos a
`BookDetail`. Si no lo encuentra, muestra `NotFoundPage`.

## Componentes reutilizables

### `VisualPanel`

Archivo: `src/components/ithesia/VisualPanel.tsx`

Representa los rectángulos visuales utilizados en el hero, las historias y
los destacados.

Recibe:

- `label`: texto alternativo accesible.
- `image`: imagen opcional.
- `variant`: color de fondo.
- `className`: clases adicionales para modificar su tamaño o posición.

Si no se indica otra imagen, utiliza por defecto:

`/trabajando.jpg`

### `SectionHeading`

Archivo: `src/components/ithesia/SectionHeading.tsx`

Es el encabezado común de las secciones.

Recibe:

- `title`: título obligatorio.
- `text`: descripción opcional.
- `eyebrow`: pequeño texto superior opcional.

## Contenido editable

Archivo: `src/data/ithesiaContent.ts`

Este archivo contiene:

- `ithesiaHero`: contenido del hero.
- `ithesiaBooks`: información de los cuatro libros.
- `ithesiaStories`: historias de Ithesia.
- `ithesiaHighlight`: contenido destacado.
- `ithesiaCta`: llamada a la acción final.

Para modificar textos, portadas, nombres o enlaces debe editarse este archivo,
sin necesidad de cambiar los componentes.

Cada libro sigue esta estructura:

```ts
{
  title: 'Título del libro',
  description: 'Descripción breve',
  longDescription: [
    'Primer párrafo',
    'Segundo párrafo',
  ],
  image: '/nombre-de-la-portada.png',
  cta: {
    label: 'Entrar al libro',
    href: '/proyectos/ithesia/ruta-del-libro',
  },
}
```

Si todavía no existe una portada, se omite `image` y se añade:

```ts
status: 'Portada provisional'
```

## Flujo de los datos

```text
ithesiaContent.ts
        |
        v
IthesiaPage
        |
        +-- IthesiaHero
        +-- BooksSection
        |      +-- BookCard
        |             +-- BookCover
        +-- StoriesSection
        +-- HighlightSection
        +-- IthesiaCta

IthesiaBookPage
        |
        +-- BookDetail
               +-- BookCover
```
