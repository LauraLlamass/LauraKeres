import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import IthesiaBookPage from './pages/IthesiaBookPage'
import IthesiaPage from './pages/IthesiaPage'
import NotFoundPage from './pages/NotFoundPage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  const path = window.location.pathname
  const Page =
    path === '/'
      ? HomePage
      : path.startsWith('/proyectos/ithesia/')
        ? IthesiaBookPage
        : path === '/proyectos/ithesia'
          ? IthesiaPage
          : path === '/proyectos'
            ? ProjectsPage
            : path === '/sobre-mi'
              ? AboutPage
              : path === '/contacto'
                ? ContactPage
                : NotFoundPage

  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <Page />
      <Footer />
    </div>
  )
}

export default App
