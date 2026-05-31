import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="app-main">
        <section className="starter-section">
          <p className="eyebrow">LauraKeres</p>
          <h1>Base lista para empezar</h1>
          <p>
            Edita esta pantalla desde <code>src/App.tsx</code> y construye tu
            proyecto a partir de aqui.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
